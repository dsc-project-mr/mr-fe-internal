import { deleteFetcher } from 'fetchers'

export const deleteContent = async (id: string) => {
  console.log(id)
  const response = await deleteFetcher(
    'http://localhost:8000/api/content/article/' + id
  )
  console.log({ response })
  return response
}
