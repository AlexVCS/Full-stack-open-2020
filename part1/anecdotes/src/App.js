import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button className="next">next anecdote</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

  // const randomAnecdote = anecdotes[Math.floor(Math.random() * anecdotes.length)]

  return (
    <div>
      <div id="anecdote">
        {props.anecdotes[selected]}
      </div>
      <Button />
      {/* onClick={setSelected(selected + 1) */}
      {/* setSelected(randomAnecdote) */}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// let randomNumber = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
// }

// console.log(randomNumber(1, 6));

ReactDOM.render(
    <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

export default App
