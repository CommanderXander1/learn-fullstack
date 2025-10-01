import axios from 'axios'
const url = "/api/persons"

const get = () => {
    const request = axios.get(url).catch(error => {console.log(error)})
    return request.then(response => response.data)
}

const add = (numberObject) => {
    const request = axios.post(url, numberObject).catch(error => {console.log(error)})
    return request.then(response => response.data)
}

const deleteNumber = (id) => {
    const request = axios.delete(`${url}/${id}`).catch(error => {console.log(error)})
    return request.then(response => response.data)
}

const update = (id, obj) => {
    const request = axios.put(`${url}/${id}`, obj).catch(error => {console.log(error)})
    return request.then(response => response.data)
}

export default { get, add, deleteNumber, update }