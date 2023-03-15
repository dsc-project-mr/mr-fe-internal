import { Campaign } from 'models/campaign'
import useSWR from 'swr'
import { campaignFetcher } from './campaignFetcher'

const getCampaign = async (id: string) => {
  const response = (await campaignFetcher(id)) as Campaign
  return response
}

const useGetCampaign = (shouldFetch: boolean, campaignname_id: string) => {
  const id = campaignname_id?.split('_')?.at(-1)
  const { data, error } = useSWR(shouldFetch ? id : null, getCampaign, {
    revalidateOnFocus: false,
  })

  return {
    data,
    error,
  }
}

export default useGetCampaign
