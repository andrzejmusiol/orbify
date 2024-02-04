import axios, { AxiosInstance, AxiosResponse } from 'axios'

const axiosInstance = axios.create() as unknown as AxiosInstance

const post = async <T = never, D = object>(url: string, data?: D): Promise<AxiosResponse<T>> =>
  axiosInstance.post<T, AxiosResponse<T>, D>(url, data)

export default post
