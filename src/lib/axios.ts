import Axios from 'axios'

export const axios = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://fakestoreapi.com/'
      : 'https://fakestoreapi.com/'
})

axios.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    return Promise.reject(error)
  }
)

const apiInstance = axios
export default apiInstance
