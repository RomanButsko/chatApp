import axios from 'axios'

export const ApiURL = `http://localhost:3005/`

const headers = {
    'Content-Type': 'application/json',
}

export const axiosRequest = axios.create({
    baseURL: ApiURL,
    headers: headers,
})
