import Axios from 'axios'

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_LINK
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
