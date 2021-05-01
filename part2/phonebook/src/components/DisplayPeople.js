import createUUID from "../services/uuid"

const DisplayPeople = ({ people, removePerson }) => {
    return (
        <div>
            <ul>
                {people.map(person =>
                <li key={person.id}>{person.name} {person.number} <button onClick={() => removePerson(person.id, person.name)}>delete</button></li>)}
            </ul> 
        </div>
    )
}

export default DisplayPeople
