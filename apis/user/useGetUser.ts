import useSWR from 'swr'
import { GetUserResponse, userFetcher } from './userFetcher'

const getUser = async (id: string) => {
  const response = (await userFetcher(id)) as GetUserResponse
  return response.user
}

const useGetUser = (shouldFetch: boolean, id: string) => {
  const { data, error } = useSWR(shouldFetch ? id : null, getUser, {
    revalidateOnFocus: false,
  })

  return {
    data,
    error,
  }
}

export default useGetUser
