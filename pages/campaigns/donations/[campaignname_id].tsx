import { Button, Typography } from '@mui/material'
import CampaignCard from 'components/CampaignCard'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useRouter } from 'next/router'

export default function ViewCampaign() {
  const router = useRouter()
  const { campaignname_id } = router.query

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
      <CampaignCard campaignID={campaignname_id?.toString() ?? ''} />
    </>
  )
}
