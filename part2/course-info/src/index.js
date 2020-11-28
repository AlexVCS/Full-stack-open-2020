import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <p>Number of exercises {sum}</p>
  ) 
}

const Part = (props) => {
  const onePart = props.map((part) => part.name)
  console.log(onePart)
  
  return (
    <>
      <p key={props.id}>{onePart} </p>
    </>    
  )
  
}


const Content = ({ course }) => {
  return (
    <>
      <Part part={course.part} />
      <Part part={course.part} />
      <Part part={course.part} />
    </>
  )
}


const Course = (props) => {
  const { course } = props
  // console.log(props)
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
        <Part course={course} />
        <Part course={course} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  console.log('App works')

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))