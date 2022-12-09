import CampaignListItem from 'components/CampaignListItem'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Mercy Relief Internal Portal</h1>
      <CampaignListItem
        CampaignName="Some Fund"
        CampaignDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat malesuada orci ut finibus. Sed quis ullamcorper lectus. Aenean semper quam at lectus semper, in dignissim nunc rhoncus."
        Donors={5}
        Amount={500}
        Country="Singapore"
        Published={true}
        ViewAll={true}
      />
    </div>
  )
}

export default Home
