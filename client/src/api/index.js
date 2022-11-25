import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
})

export default instance
