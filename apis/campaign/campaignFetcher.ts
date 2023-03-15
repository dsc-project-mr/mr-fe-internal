import { DONATION_CAMPAIGN_URL } from 'constants/Campaign'
import { getFetcher } from 'fetchers'
import { Campaign } from 'models/campaign'

type CampaignResponse = Campaign | Campaign[]

// TODO: error handling
export const campaignFetcher = async (url = '') => {
  const response: CampaignResponse = await getFetcher(
    `${process.env.NEXT_PUBLIC_API_URL}${DONATION_CAMPAIGN_URL}${url}`
  )
  return response
}
