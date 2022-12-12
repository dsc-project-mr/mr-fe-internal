import CampaignListItem from 'components/CampaignListItem'
import { CampaignStatus } from 'constants/campaign'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Mercy Relief Internal Portal</h1>
      <CampaignListItem
        campaignName="Some Fund"
        campaignDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat malesuada orci ut finibus. Sed quis ullamcorper lectus. Aenean semper quam at lectus semper, in dignissim nunc rhoncus."
        donors={5}
        amount={500}
        country="Singapore"
        campaignStatus={CampaignStatus.ARCHIVED}
        viewAll={true}
      />
    </div>
  )
}

export default Home
