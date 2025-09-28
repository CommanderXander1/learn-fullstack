import { useState } from 'react'
import axios from 'axios'
import numberService from '../services/numbers'

const AddNumberForm = ({persons, setPersons, setNotification, setNotiColor}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addNumber = (event) => {
    event.preventDefault()
    const nameList = persons.map((person) => person.name)
    if(nameList.includes(newName)) {
            // alert(`${newName} already in use! Updating old number`)
            setNotiColor('green')
            setNotification(`Updated ${newName}`)
            setTimeout(() => {setNotification(null)}, 5000)

            const newObj = {...persons.find((obj) => obj.name === newName), number: newNumber}
            numberService.update(persons.find((obj) => obj.name === newName).id, newObj).catch(error => {
                setNotiColor('red')
                setNotification("Information for " + newName + " has already been removed from the server")
                setTimeout(() => {setNotification(null)}, 5000)
            })
            const newPersonList = [...persons.filter((person) => person.name !== newName), newObj]
            setPersons(newPersonList)
        } else {
            numberService.add({name: newName, number: newNumber}).then(
                (data) => {
                    const newPersonList = [...persons, data]
                    setPersons(newPersonList)
                    setNotiColor('green')
                    setNotification(`Added ${newName}`)
                    setTimeout(() => {setNotification(null)}, 5000)
                }
            )
        }
    }

    return (
        <form onSubmit={addNumber}>
            <div>
            name: <input value={newName} onChange={(event) => {setNewName(event.target.value)}}/>
            </div>
            <div>
            number: <input value={newNumber} onChange={(event) => {setNewNumber(event.target.value)}}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddNumberForm