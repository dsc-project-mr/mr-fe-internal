import { USER_URL } from 'constants/user'
import { postFetcher } from 'fetchers'
import { User } from 'models/user'

type UserBody = Partial<User> & { password: string; passwordConfirm: string }

export const postUser = async (body: UserBody) => {
  const response = await postFetcher(
    `${process.env.NEXT_PUBLIC_API_URL}${USER_URL}`,
    body
  )
  return response
}
