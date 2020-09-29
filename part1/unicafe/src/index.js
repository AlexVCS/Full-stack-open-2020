import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  return (
  <div>
    <h1>give feedback</h1>
    <Button handleClick={() => props.setGood(props.good + 1)} text="good" />
    <Button handleClick={() => props.setNeutral(props.neutral + 1)} text="neutral" />
    <Button handleClick={() => props.setBad(props.bad + 1)} text="bad" />
    <h1>statistics</h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.good + props.neutral + props.bad}</p>
    <p>average {(props.good + props.neutral + props.bad) / 3}</p>
    <p>positive {(props.good / (props.good + props.neutral + props.bad)) * 100}%</p>
  </div>
  )
}

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
   <Statistics />
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)

export default App