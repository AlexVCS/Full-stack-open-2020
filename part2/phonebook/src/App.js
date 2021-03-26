import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personsService from './services/persons'
import DisplayPeople from './components/DisplayPeople'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
        console.log(response);
      })

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