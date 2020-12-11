import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './Course';

const MainHeader = () => {
  return (
    <h1>Web development curriculum</h1>
  )
}

const HalfStackHeader = ({ name }) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  )
}

const Total = ({ part }) => {
  const sum = part.parts.reduce(function  (s, p) {
    return s + p.exercises;
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
      <div key={part.name}>
        <HalfStackHeader name={part.name} />
        <Part part={part} />
        <Total part={part} />
      </div>
      )}
    </>
  )
}

const Courses = (props) => {
  const { course } = props
  return (
    <>
      <MainHeader />
      <Content course={course} />
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