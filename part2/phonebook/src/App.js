import React, { useState, useEffect } from 'react'
import personService from './services/person'
import DisplayPeople from './components/DisplayPeople'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import createUUID from './services/uuid'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('some error happened...')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: createUUID(),
    }

    personService
      .create(personObject)
      .then(response => {
        console.log(response);
      })
    }

  function addPerson( personObject ) {
    personService
      .create(personObject)
      .then(response => {
        console.log(response);
      })
      setPersons([...persons, personObject])
  }

  function updatePerson(id, personObject) {
    personService
      .update(id, personObject)
      .then(response => {
        setPersons(persons.map((newPhone => newPhone.id !== id ? newPhone : response.data)))
    }
  }

  function handleNameSubmit(event) {
    const person = persons.find( person => person.name === newName)
      if( person ) {
      person = { personObject: person, number: newNumber }
      updatePerson(person.id, person);
      } else {
      person = { name: newName, number: newNumber, id: createUUID() }
      addPerson(person)
      }
      setNewName('')
      setNewNumber('')
  }

  const removePerson = async (id, name) => {
    await personService
      .remove(id, name)
    const removeById = persons.filter((person) => {
      return person.id !== id
    })
    setPersons(removeById);
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
        <Notification message={errorMessage} />
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