import { DONATION_CAMPAIGN_URL } from 'constants/campaign'
import { getFetcher } from 'fetchers'
import { BackendCampaign } from 'models/campaign'

type CampaignResponse = BackendCampaign | BackendCampaign[]

// TODO: error handling
export const campaignFetcher = async (url = '') => {
  console.log('FETCH CAMPAIGNS')
  console.log(
    `${process.env.NEXT_PUBLIC_API_URL}${DONATION_CAMPAIGN_URL}${url}`
  )
  const response: CampaignResponse = await getFetcher(
    `${process.env.NEXT_PUBLIC_API_URL}${DONATION_CAMPAIGN_URL}${url}`
  )
  return response
}
