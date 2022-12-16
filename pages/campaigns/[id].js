import { Button } from '@mui/material'
import CampaignListItem from 'components/CampaignListItem'
import { CampaignStatus } from 'constants/campaign'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  const res = await fetch(
    'https://my-json-server.typicode.com/firwer/testrepo/campaigns/'
  )
  const data = await res.json()
  const paths = data.map((c) => ({
    params: {
      id: c.id.toString(),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(
    'https://my-json-server.typicode.com/firwer/testrepo/campaigns/' + id
  )
  const data = await res.json()

  return {
    props: { campaignData: data },
  }
}

export default function ViewCampaign({ campaignData }) {
  const router = useRouter()
  return (
    <div>
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
        <h2 style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: 28 }}>
          Donations
        </h2>
      </div>
      <CampaignListItem
        campaignName={campaignData.name.toString()}
        campaignDetails={campaignData.content}
        donors={campaignData.donors.toString()}
        amount={campaignData.amount}
        country={campaignData.country}
        campaignStatus={CampaignStatus.PUBLISHED}
        viewAll={true}
      ></CampaignListItem>
    </div>
  )
}
