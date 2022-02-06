import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8084',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {


    getTasks(headers) {
        return apiClient.get('/api/v2/test/getTasks',headers)
    },
    postTask(task, headers ){
        return apiClient.post('/api/v2/test/addPostWithToken',task , headers)
    }

    
}