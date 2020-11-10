import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return (
  <button onClick={props.handleClick} className="next">next anecdote</button>
  )}

const VoteButton = (props) => {
  const votes = [1, 2, 3, 4, 5]

  const votesCopy = [...votes]
  votesCopy[votesCopy.value] += 1

  return (
    <button className="vote">vote</button>
  )
}

const MainHeader = () => {
  return (
    <h2>Anecdote of the day</h2>
  )
}

const SecondHeader = () => {
  return (
    <h2>Anecdote with most votes</h2>
  )
}

const App = (props) => {
const [selected, setSelected] = useState(0)

const randomAnecdote = () => Math.floor(Math.random() * (props.anecdotes.length - 1))

return (
  <div>
    <MainHeader />
    <div id="anecdote">
      {props.anecdotes[selected]}
    </div>
    <VoteButton />
    <Button handleClick={() => setSelected(randomAnecdote)} />
    <SecondHeader />
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

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
)