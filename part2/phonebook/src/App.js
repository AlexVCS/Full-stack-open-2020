import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Alex', id: 1, number: '404-4949' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    }

    if (persons.name === newName) {
      alert(`${newName} is already added to phonebook`)
      persons.pop()
    } else {

    }

    setPersons([...persons, nameObject])
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      number: newNumber,
      id: persons.length + 1,
    }

    setNewNumber([...newNumber, numberObject])
    setNewNumber('')
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>filter shown with<input /></div>
        <h3>Add a new</h3>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange} />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.id}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}



export default App