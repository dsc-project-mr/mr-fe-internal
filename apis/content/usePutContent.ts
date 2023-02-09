import { CONTENT_ARTICLE_URL } from 'constants/content'
import { putFetcher } from 'fetchers'
import { Article } from 'models/article'

export const putContent = async (id: string, body: Partial<Article>) => {
  console.log(id)
  const response = await putFetcher(
    `${process.env.NEXT_PUBLIC_API_URL}${CONTENT_ARTICLE_URL}${id}`,
    body
  )
  console.log({ response })
  return response
}
