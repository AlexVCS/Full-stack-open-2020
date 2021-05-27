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

const update = (id, personObject) => {
    const request = axios.put(`${baseUrl}/${id}`, personObject)
    return request.then(response => {
        return response.data
    })
    .catch(error => {
        console.log('fail');
    })
}

const remove = (id, name) => {
        const request = axios.delete(`${baseUrl}/${id}`)
        return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, remove, update }