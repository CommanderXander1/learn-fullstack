import { useState, useEffect } from 'react'
import PhoneEntry from './components/PhoneEntry'
import AddNumberForm from './components/AddNumberForm'
import Filter from './components/Filter'
import axios from 'axios'
import numberService from './services/numbers'
import './index.css'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [notification, setNotification] = useState(null)
  const [notiColor, setNotiColor] = useState('green')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    numberService.get().then(data => {
      setPersons(data)
    })
  }, [])
  
  const delNum = (id) => {
    if(window.confirm("Delete " + persons.find((obj) => obj.id === id).name + " ?")) {
      numberService.deleteNumber(id).then((data) => {console.log(data)}).then(() => {
          // updates frontend variables that display elements
          numberService.get().then(data => {
            setPersons(data)
        })
      }).catch(error => {
        setNotification("Information for " + persons.find((obj) => obj.id === id).name + " has already been removed from the server")
        setNotiColor('red')
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} color={notiColor}/>
      <Filter filterValue={filterValue} setFilterValue={setFilterValue}/>
      <h1>Add a new contact</h1>
      <AddNumberForm persons={persons} setPersons={setPersons} setNotification={setNotification} setNotiColor={setNotiColor}/>
      <h2>Numbers</h2>
      <PhoneEntry persons={persons} deleteNumber={delNum} filter={filterValue}/>
    </div>
  )
}

export default App