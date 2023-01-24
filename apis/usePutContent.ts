import { putFetcher } from 'fetchers'

export const putContent = async (id: string, body: any) => {
  console.log(id)
  const response = await putFetcher(
    'http://localhost:8000/api/content/article/' + id,
    body
  )
  console.log({ response })
  return response
}
