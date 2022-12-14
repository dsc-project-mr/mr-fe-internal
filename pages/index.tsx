import CampaignListItem from 'components/CampaignListItem'
import { Campaign, CampaignStatus } from 'constants/campaign'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const CampaignList: Campaign[] = [
    {
      name: 'Impact Fund A',
      content:
        'Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. By to admire vanity county an mutual as roused. Of an thrown am warmly merely result depart supply. Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted she listening mrs extensive admitting far.',
      donors: 2,
      amount: 210,
      country: 'Singapore',
      status: CampaignStatus.PUBLISHED,
    },
    {
      name: 'Impact Fund B',
      content:
        'Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.',
      donors: 40,
      amount: 561,
      country: 'Vietnam',
      status: CampaignStatus.PUBLISHED,
    },
    {
      name: 'Impact Fund C',
      content:
        'Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated. On no applauded exquisite my additions. Pronounce add boy estimable nay suspected. You sudden nay elinor thirty esteem temper. Quiet leave shy you gay off asked large style',
      donors: 161,
      amount: 4578,
      country: 'Malaysia',
      status: CampaignStatus.ARCHIVED,
    },
    {
      name: 'Disaster A',
      content:
        'Improve him believe opinion offered met and end cheered forbade. Friendly as stronger speedily by recurred. Son interest wandered sir addition end say. Manners beloved affixed picture men ask. Explain few led parties attacks picture company. On sure fine kept walk am in it. Resolved to in believed desirous unpacked weddings together. Nor off for enjoyed cousins herself. Little our played lively she adieus far sussex. Do theirs others merely at temper it nearer.',
      donors: 1,
      amount: 72,
      country: 'Indonesia',
      status: CampaignStatus.DRAFT,
    },
  ]
  return (
    <div>
      <h2>Mercy Relief Internal Portal</h2>
      {CampaignList.map((c, id) => (
        <div key={id}>
          <CampaignListItem
            id={id + 1}
            campaignName={c.name}
            campaignDetails={c.content}
            donors={c.donors}
            amount={c.amount}
            country={c.country}
            campaignStatus={c.status}
            viewAll={false}
          ></CampaignListItem>
        </div>
      ))}
    </div>
  )
}

export default Home
