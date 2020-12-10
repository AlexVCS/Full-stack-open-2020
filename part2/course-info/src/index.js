import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MainHeader = () => {
  return (
    <h1>Web development curriculum</h1>
  )
}

const HalfStackHeader = ({ course }) => {
  // console.log();
  
  return (
    <>
    {/* {course.map(course =>
      <h2 key={name.id}>{course.name}</h2>
    )} */}
    {course.name}
    {/* {course.name is undefined, find the proper convention} */}
    </>
  )
}

const Total = ({ course }) => {
  const sum = course.reduce(function  (s, p) {
    console.log(p.parts.exercises)
    // p.parts.exercises is undefined
return s + p.parts.exercises;
}, 0)
  return (
    <p className="total">total of {sum} exercises</p>
  ) 
}

const Part = ({ part }) => {
  return (
    <>
      {part.parts.map(part =>
        <p key={part.id}>{part.name} {part.exercises}</p>
  )}
    </>    
  )
}

const Content = ({ course }) => {
  return (
    <>
    {course.map(part =>
      <Part key={part.id} part={part} />
      )}
    </>
  )
}

const Courses = (props) => {
  const { course } = props
  return (
    <>
      <MainHeader />
      <HalfStackHeader course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return (
    <>
      <Courses course={course} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))