import { Box, Button, Stack, Typography } from '@mui/material'
import CampaignCard from 'components/CampaignCard'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useRouter } from 'next/router'
import useGetCampaign from 'apis/campaign/useGetCampaign'

export default function ViewCampaign() {
  const router = useRouter()
  const { campaignname_id } = router.query

  const { data: campaign, error } = useGetCampaign(
    router.isReady,
    campaignname_id as string
  )

  if (error) {
    return <div>Error: {error}</div>
  }

  if (campaign === undefined) {
    return <div>Loading...</div>
  }

  return (
    <Box>
      <Stack alignItems="center" justifyContent="start" direction="row">
        <Button onClick={() => router.back()}>
          <ArrowBackIosNewIcon style={{ margin: 20 }} />
        </Button>
        <Typography variant="h4">Donations</Typography>
      </Stack>
      <CampaignCard campaign={campaign} />
    </Box>
  )
}
