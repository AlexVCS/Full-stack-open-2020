const PersonForm = ({ addName, newName, handleNameChange, handleNameSubmit, newNumber, handleNumberChange}) => {
    return (
        <div>
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
                    onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
