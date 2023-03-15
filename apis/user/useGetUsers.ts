import useSWR from 'swr'
import { GetUsersResponse, userFetcher } from './userFetcher'

const getUsers = async () => {
  const response = (await userFetcher()) as GetUsersResponse
  return response.users
}

const useGetUsers = () => {
  const { data, error } = useSWR('getAllUsers', getUsers, {
    revalidateOnFocus: false,
  })

  return {
    data,
    error,
  }
}

export default useGetUsers
