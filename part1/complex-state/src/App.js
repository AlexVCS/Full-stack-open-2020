import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    }

    const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    }
  
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}



// Next section of code!!
// const Display = props => <div>{props.value}</div>

// const Button = (props) => {
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// }

// const App = (props) => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     setValue(newValue)
//   }


//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App