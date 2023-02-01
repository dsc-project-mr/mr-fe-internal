import { Article, mapResponseToArticleRowData } from 'models/article'
import useSWR from 'swr'
import { contentFetcher } from './contentFetcher'

const getArticle = async (id: string) => {
  const response = (await contentFetcher(id)) as Article
  return response
}

const useGetArticle = (shouldFetch: boolean, articlename_id: string) => {
  const id = articlename_id?.split('_')?.at(-1)
  const { data, error } = useSWR(shouldFetch ? id : null, getArticle, {
    revalidateOnFocus: false,
  })

  return {
    data: data && mapResponseToArticleRowData(data),
    error,
  }
}

export default useGetArticle
