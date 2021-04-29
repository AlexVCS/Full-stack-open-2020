import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll= () => {
    return axios.get(baseUrl)
    // return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, name, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data, window.confirm(`${name} is already added to the phonebook, want to replace the old number with a new one?`))
}

const remove = (id, name) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data, window.confirm(`Delete ${name}`))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, remove, update }