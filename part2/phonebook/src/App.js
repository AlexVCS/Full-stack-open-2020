import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Alex', id: 1, number: '404-4949' },
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    if (persons.every((aPerson) => aPerson.name !== newName)) {
      setPersons([...persons, nameObject])
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    } 
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // const searchByName = () => {
  //   ? persons.filter(person => {

  //   })
  // }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with<input /></div>
      <form onSubmit={addName}>
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
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App