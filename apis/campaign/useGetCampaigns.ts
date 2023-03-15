import { Campaign } from 'models/campaign'
import useSWR from 'swr'
import { campaignFetcher } from './campaignFetcher'

const getCampaigns = async () => {
  const response = (await campaignFetcher()) as Campaign[]
  return response
}

const useGetCampaigns = () => {
  const { data, error } = useSWR('getAllCampaigns', getCampaigns, {
    revalidateOnFocus: false,
  })
  return {
    data,
    error,
  }
}

export default useGetCampaigns
