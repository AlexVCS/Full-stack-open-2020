import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }

const Part = (props) => {
  return (
    <div>
      <p>{props.partName} {props.exercisesAmount}</p>
    </div>
  )
}

const Content = (props) => {
    return (
      <div>
          <Part partName={props.course.parts.name} exercisesAmount={props.course.parts.exercises} />
          <Part partName={props.course.parts.name} exercisesAmount={props.course.parts.exercises} />
          <Part partName={props.course.parts.name} exercisesAmount={props.course.parts.exercises} />
      </div>
    )
  }
  
  const Total = (props) => {
   return (
    <div>
      <p>Number of exercises {props.course.parts.exercises + props.course.parts.exercises + props.course.parts.exercises}</p>
    </div>
   ) 
  }

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
 ]
}
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))