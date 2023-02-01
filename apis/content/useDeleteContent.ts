import { CONTENT_ARTICLE_URL } from 'constants/Content'
import { deleteFetcher } from 'fetchers'

export const deleteContent = async (id: string) => {
  console.log(id)
  const response = await deleteFetcher(
    `${process.env.NEXT_PUBLIC_API_URL}${CONTENT_ARTICLE_URL}${id}`
  )
  console.log({ response })
  return response
}
