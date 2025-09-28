import axios from 'axios'

const get = () => {
    const request = axios.get("http://localhost:3001/persons").catch(error => {console.log(error)})
    return request.then(response => response.data)
}

const add = (numberObject) => {
    const request = axios.post("http://localhost:3001/persons", numberObject).catch(error => {console.log(error)})
    return request.then(response => response.data)
}

const deleteNumber = (id) => {
    const request = axios.delete(`http://localhost:3001/persons/${id}`).catch(error => {console.log(error)})
    return request.then(response => response.data)
}

const update = (id, obj) => {
    const request = axios.put(`http://localhost:3001/persons/${id}`, obj).catch(error => {console.log(error)})
    return request.then(response => response.data)
}

export default { get, add, deleteNumber, update }