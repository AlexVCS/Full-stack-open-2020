import React, { useState, useEffect } from 'react'
import personService from './services/person'
import DisplayPeople from './components/DisplayPeople'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    personService
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

    personService
      .create(nameObject)
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

  const removePerson = (person, name, id) => {
    personService
      .remove(person, name, id)
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
            removePerson={removePerson}
          />
    </div>
  )
}

export default App