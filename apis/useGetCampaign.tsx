import useSwr from 'swr'
import { getFetcher } from 'fetchers'

interface GetCampaignResponse {
  campaignId: Campaign
}

interface Campaign {
  _id: string
  name: string
  tags: string[]
  category: string
  state: string
  createdAt: string
  updatedAt: string
  __v: number
}

// can consider having a global exampleFetcher for all example modules if the format returned is the same
const campaignFetcher = async (url: string, body: { id: string }) => {
  console.log(url, body)
  const response: GetCampaignResponse = await getFetcher(url)
  console.log({ response })
  return response.campaignId
}

// TODO: Work in progress
const useGetCampaign = (id: string) => {
  const { data, error } = useSwr<Campaign>(
    ['http://localhost:8000/api/donation/campaign/', { id }],
    campaignFetcher
  )

  return {
    data,
    isLoading: !error && !data,
    error,
  }
}

export default useGetCampaign
