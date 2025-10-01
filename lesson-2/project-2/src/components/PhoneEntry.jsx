const PhoneEntry = ({persons, deleteNumber, filter}) => {
    persons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))


    for(let i = 0; i < persons.length; i++) {
        console.log(persons[i].id)
    }


    return persons.map((person) => 
        <>
            <p key={person.id}>{person.name} {person.number}</p>
            <button onClick={() => {deleteNumber(person.id)}}>delete</button>
        </>
    )
}

export default PhoneEntry