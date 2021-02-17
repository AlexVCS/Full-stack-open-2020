const DisplayPeople = ({ people }) => {
    return (
        <div>
            <ul>
                {people.map(person =>
                <li key={person.name}>{person.name} {person.number}</li>)}
            </ul> 
        </div>
    )
}

export default DisplayPeople
