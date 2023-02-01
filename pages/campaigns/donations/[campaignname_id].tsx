import { Button, Typography } from '@mui/material'
import CampaignCard from 'components/CampaignCard'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useRouter } from 'next/router'
import useGetCampaign from 'apis/campaign/useGetCampaign'
import { Campaign } from 'models/campaign'
import { CampaignStatus } from 'constants/Donation'

const renderCampaign: Campaign = {
  _id: '0',
  id: '0',
  name: 'Title',
  details: 'Details of campaign',
  donors: 0,
  amount: 0,
  country: 'Loading...',
  state: CampaignStatus.DRAFT,
  tags: [],
  category: '63ca0a0acbb59fb5e90a5426',
  createdAt: '2023-01-20T03:27:06.422Z',
  updatedAt: '2023-01-20T03:27:06.422Z',
  isTaxDeductible: true,
  __v: 0,
}

export default function ViewCampaign() {
  const router = useRouter()
  const { campaignname_id } = router.query

  const { data, error } = useGetCampaign(
    router.isReady,
    campaignname_id as string
  )

  if (error) {
    return <div>Error: {error}</div>
  }

  if (data === undefined) {
    return <div>Loading...</div>
  }

  // I did this to force the type to be Campaign
  const campaign = { ...renderCampaign, ...data }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Button onClick={() => router.back()}>
          <ArrowBackIosNewIcon style={{ margin: 20 }} />
        </Button>
        <Typography variant="h4">Donations</Typography>
      </div>
      <CampaignCard campaign={campaign} />
    </>
  )
}
