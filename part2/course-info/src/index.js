import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Total = (props) => {
  const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return(
    <p>Number of exercises {sum}</p>
  ) 
}

const Part = ({ course }) => {
  // console.log(props)
  console.log(course)
  return (
    <>
      <p>{course.part.name} {course.part.exercises}</p>
    </>    
  )
  
}


const Content = (props) => {
  return (
    <>
      {props.course.parts.map(part =>
      <Part key={props.course.parts.id}>{part.name}{part.exercises} </Part>
      )}
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

const App = (props) => {
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