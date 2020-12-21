import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', id: 1 }]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    }

    setPersons([...persons, nameObject])
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  console.log(persons);
  console.log(newName);

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
          number: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.id}>{person.name}</li>
        )}
        
      </ul>
    </div>
  )
}

// alert(`${newName} is already added to phonebook`)

export default App