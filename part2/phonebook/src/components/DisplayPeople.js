const DisplayPeople = ({ people, removePerson }) => {
    return (
        <div>
            <ul>
                {people.map(person =>
                <li key={person.name}>{person.name} {person.number} <button onClick={removePerson}>delete</button></li>)}
            </ul> 
        </div>
    )
}

export default DisplayPeople
