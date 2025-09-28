const PhoneEntry = ({persons, deleteNumber, filter}) => {
    persons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    return persons.map((person) => 
        <>
            <p key={person.id}>{person.name} {person.number}</p>
            <button onClick={() => {deleteNumber(person.id)}}>delete</button>
        </>
    )
}

export default PhoneEntry