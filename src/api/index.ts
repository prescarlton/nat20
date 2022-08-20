import axios, { AxiosRequestConfig } from "axios"

// base Axios instance
const baseInstance = axios.create()
const DNDUrl = "https://www.dnd5eapi.co/api"

export const CreateDNDService = ({ baseURL }: { baseURL: string }) => {
  const buildURL = (url: string) => `${DNDUrl}${baseURL}${url}`
  return {
    get: (url: string, config?: AxiosRequestConfig) =>
      baseInstance.get(buildURL(url), config),
    put: (url: string, data?: unknown, config?: AxiosRequestConfig) =>
      baseInstance.put(buildURL(url), data, config),
    post: (url: string, data?: unknown, config?: AxiosRequestConfig) =>
      baseInstance.post(buildURL(url), data, config),
  }
}
