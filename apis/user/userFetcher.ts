import { USER_URL } from 'constants/User'
import { getFetcher } from 'fetchers'
import { User } from 'models/user'

interface UserResponse {
  status: string
  message: string
  data: GetUserResponse | GetUsersResponse
}

export interface GetUserResponse {
  user: User
}

export interface GetUsersResponse {
  users: User[]
}

// TODO: error handling
export const userFetcher = async (url = '') => {
  const response: UserResponse = await getFetcher(
    `${process.env.NEXT_PUBLIC_API_URL}${USER_URL}${url}`
  )
  return response.data
}
