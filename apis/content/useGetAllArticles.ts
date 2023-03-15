import { Article, mapGetAllResponseToArticleRowData } from 'models/article'
import useSWR from 'swr'
import { contentFetcher } from './contentFetcher'

const getAllArticles = async () => {
  const response = (await contentFetcher()) as Article[]
  return response
}

const useGetAllArticles = () => {
  const { data, error } = useSWR('getAllArticles', getAllArticles, {
    revalidateOnFocus: false,
  })

  return {
    data: data && mapGetAllResponseToArticleRowData(data),
    error,
  }
}

export default useGetAllArticles
