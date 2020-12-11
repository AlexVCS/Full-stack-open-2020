import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

  export default Courses