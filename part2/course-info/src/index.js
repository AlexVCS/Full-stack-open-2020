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

  const Course = (props) => {
    const { course } = props
    
    return (
      <>
      <Header />
      <Content />
        {/* <Part {...course.map(exercises => <p key={course.id}>{course.exercises}</p>)}/> */}
        <Part />
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
  
    return <Course course={course} />
  }

ReactDOM.render(<App />, document.getElementById('root'))