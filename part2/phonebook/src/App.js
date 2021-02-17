import React, { useState } from 'react'
import DisplayPeople from './components/DisplayPeople'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Alex', id: 1, number: '404-4949' },
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

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

  const people = persons.filter(person => {
    return person.name.toLowerCase().includes( search.toLowerCase() )
  })

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter setSearch={setSearch} />
          <PersonForm 
            newName={newName}
            addName={addName}
            handleNameChange={handleNameChange}
            newNumber={newNumber}
            handleNumberChange={handleNumberChange}
          />
      <h2>Numbers</h2>
        <DisplayPeople
          people={people}
        />
    </div>
  )
}

export default App