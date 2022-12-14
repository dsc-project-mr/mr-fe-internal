import CampaignListItem from 'components/CampaignListItem'
import { CampaignStatus } from 'constants/campaign'

export const getStaticPaths = async () => {
  const res = await fetch(
    'https://my-json-server.typicode.com/firwer/testrepo/campaigns/'
  )
  const data = await res.json()
  const paths = data.map((c) => ({
    params: { id: c.id.toString() },
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

export default function Campaign({ campaignData }) {
  return (
    <div>
      <h1>Donations</h1>
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
