import { DONATION_CAMPAIGN_URL } from 'constants/campaign'
import { getFetcher } from 'fetchers'
import { BackendCampaign } from 'models/campaign'

type CampaignResponse = BackendCampaign | BackendCampaign[]

// TODO: error handling
export const campaignFetcher = async (url = '') => {
  const response: CampaignResponse = await getFetcher(
    `http://localhost:8000/api${DONATION_CAMPAIGN_URL}${url}`
  )
  return response
}
