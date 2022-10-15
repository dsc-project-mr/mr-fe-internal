import axios from 'axios';

// API Methods
export const getFetcher = (url: string) => axios.get(url).then((res) => res.data);
export const postFetcher = (url: string, postdata: any) => axios.post(url, postdata).then((res) => res.data);
export const deleteFetcher = (url:string) => axios.delete(url).then((res) => res.data);
export const putFetcher = (url:string) => axios.put(url).then((res) => res.data);