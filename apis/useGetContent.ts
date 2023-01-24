/*
    {
        "_id": "63bd53b3a9e78b04587d913b",
        "title": "new article aft update",
        "author": "639f299c5b0af3b82a92c2b2",
        "updatedBy": "639f299c5b0af3b82a92c2b2",
        "latestEditorEmail": "johndoe@gg.com",
        "state": "Draft",
        "tags": [],
        "type": "External",
        "imageUrl": "",
        "contentUrl": "",
        "createdAt": "2023-01-10T12:01:55.277Z",
        "updatedAt": "2023-01-10T12:01:55.277Z",
        "__v": 0,
        "id": "63bd53b3a9e78b04587d913b"
    }


    {
      "status": "success",
      "message": "User is retrieved successfully",
      "data": {
          "user": {
              "_id": "639f299c5b0af3b82a92c2b2",
              "name": "John Doe",
              "email": "johndoe@gg.com",
              "role": "super admin",
              "active": true,
              "createdAt": "2022-12-18T14:54:20.615Z",
              "updatedAt": "2022-12-18T14:54:20.615Z",
              "__v": 0,
              "id": "639f299c5b0af3b82a92c2b2"
          }
      }
    }
*/

import { getFetcher } from 'fetchers'
import {
  mapGetAllResponseToArticleRowData,
  mapResponseToArticleRowData,
} from 'models/article'

export interface ContentResponse {
  _id: string
  title: string
  author: string
  updatedBy: string
  latestEditorEmail: string
  state: string
  tags: string[]
  type: string
  imageUrl: string
  contentUrl: string
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}

export const contentFetcher = async (url: string, body: { id: string }) => {
  console.log(url, body)
  const response = await getFetcher(url)
  console.log({ response })
  return response
}

export const getArticle = async (url: string) => {
  const response: ContentResponse = await contentFetcher(url, {
    id: '',
  })
  const articles = mapResponseToArticleRowData(response)
  return articles
}

export const getAllArticles = async (url: string) => {
  const response: ContentResponse[] = await contentFetcher(url, {
    id: '',
  })
  const articles = mapGetAllResponseToArticleRowData(response)
  return articles
}
