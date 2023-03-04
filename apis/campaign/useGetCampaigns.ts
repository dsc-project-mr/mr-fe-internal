import { BackendCampaign } from 'models/campaign'
import useSWR from 'swr'
import { campaignFetcher } from './campaignFetcher'

const getCampaigns = async () => {
  const response = (await campaignFetcher('all')) as BackendCampaign[]
  return response
}

const useGetCampaigns = () => {
  const { data, error } = useSWR('getAllCampaigns', getCampaigns, {
    revalidateOnFocus: false,
  })
  console.log('data', data)
  console.log('error', error)
  return {
    data,
    error,
  }
}

export default useGetCampaigns
