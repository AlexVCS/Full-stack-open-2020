import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
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
          <Part partName={props.parts[0].name} exercisesAmount={props.parts[0].exercises} />
          <Part partName={props.parts[1].name} exercisesAmount={props.parts[1].exercises} />
          <Part partName={props.parts[2].name} exercisesAmount={props.parts[2].exercises} />
      </div>
    )
  }
  
  const Total = (props) => {
   return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
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
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))