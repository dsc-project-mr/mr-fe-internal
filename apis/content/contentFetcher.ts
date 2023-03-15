import { CONTENT_ARTICLE_URL } from 'constants/content'
import { getFetcher } from 'fetchers'
import { Article } from 'models/article'

interface ContentResponse {
  status: string
  message: string
  data: Article | Article[]
}

// TODO: error handling
export const contentFetcher = async (url = '') => {
  const response: ContentResponse = await getFetcher(
    `${process.env.NEXT_PUBLIC_API_URL}${CONTENT_ARTICLE_URL}${url}`
  )
  return response.data
}
