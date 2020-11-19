import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return (
  <button onClick={props.handleClick} className="next">next anecdote</button>
  )}

// const VoteCount = (props) => {
//   return (
//     <div>has {props} votes</div>
//   )
// }

const VoteButton = (props) => {
  return (
    <button onClick={props.handleClick} className="vote">vote</button>
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
const [votes, setVotes] = useState(() => anecdotes.map(() => 0))

const randomAnecdote = () => Math.floor(Math.random() * (props.anecdotes.length - 1))

const votesCopy = [...votes]

// [...votes.slice(0, selected), votes[selected] + 1, ...votes.slice(selected + 1)]

console.log(votes)

return (
  <div>
    <MainHeader />
    <div id="anecdote">
      {props.anecdotes[selected]}
    </div>
    <div id="votes">
      has {votes[selected]} votes
    </div>
    <VoteButton handleClick={() => {
      votesCopy[selected] += 1
      setVotes([...votesCopy])}} />
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
    <App anecdotes={anecdotes} />,
  document.getElementById('root')
)