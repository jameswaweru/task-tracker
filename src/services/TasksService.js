import axios from 'axios'

const apiClient = axios.create({
    baseURL:  'https://test.blink.co.ke', //'http://localhost:8084',
    withCredentials: false,
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