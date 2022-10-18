import axios from 'axios'

// API Methods
export const getFetcher = (url: string, param?: any) =>
  axios.get(url, param).then((res) => res.data)
export const postFetcher = (url: string, postdata: any) =>
  axios.post(url, postdata).then((res) => res.data)
export const deleteFetcher = (url: string, param?: any) =>
  axios.delete(url, param).then((res) => res.data)
export const putFetcher = (url: string, putdata: any) =>
  axios.put(url, putdata).then((res) => res.data)
