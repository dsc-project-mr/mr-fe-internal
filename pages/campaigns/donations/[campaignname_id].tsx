import { Button, Typography } from '@mui/material'
import CampaignCard from 'components/CampaignCard'
import { CampaignStatus } from 'constants/Donation'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useRouter } from 'next/router'

const TEST_DATA = {
  id: 123,
  name: 'Impact Fund A',
  details:
    'Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. By to admire vanity county an mutual as roused. Of an thrown am warmly merely result depart supply. Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted she listening mrs extensive admitting far.',
  donors: 100,
  amount: 2000,
  country: 'Singapore',
  status: CampaignStatus.PUBLISHED,
}

export default function ViewCampaign() {
  const router = useRouter()
  //const { campaignname_id } = router.query
  //const campaignid = (campaignname_id as string)?.split('-')?.at(-1) as string

  // TODO: call api to get campaign
  // const { data, isLoading, error } = useGetCampaign(campaignid)

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
      {/* {isLoading ? (
        <CircularProgress />
      ) : ( */}
      <CampaignCard campaign={TEST_DATA} />
      {/* )} */}
    </>
  )
}
