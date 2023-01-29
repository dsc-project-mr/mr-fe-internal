import { CONTENT_ARTICLE_URL } from 'constants/Content'
import { putFetcher } from 'fetchers'

export const putContent = async (id: string, body: any) => {
  console.log(id)
  const response = await putFetcher(
    process.env.NEXT_PUBLIC_API_URL + CONTENT_ARTICLE_URL + id,
    body
  )
  console.log({ response })
  return response
}
