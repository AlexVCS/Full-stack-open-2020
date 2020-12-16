import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas' }]) 
  const [ newName, setNewName ] = useState('')
  // const [ showAll, setShowAll ] = useState(true)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length + 1,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value)
  }

  // const namesToShow = showAll
  //   ? persons
  //   : persons.filter(person => person.important === true)

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
      <div>debug: {newName}</div>
      <ul>
        {persons.map(newName =>
          <p key={newName.id} person={newName} />
        )}
      </ul>
    </div>
  )
}

// alert(`${newName} is already added to phonebook`)

export default App