import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'
import DocumentListTabs from 'components/DocumentListTabs'
import Searchbar from 'components/Searchbar'
import { donationFilters } from 'components/Searchbar/defaults'
import { DocumentStatus } from 'constants/DocumentStatus'
import { CampaignStatus } from 'constants/Donation'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Campaign, campaignColumns } from 'models/campaign';

const testData: Campaign[] = [
  {
    id: 1,
    name: 'Impact Fund',
    details: 'Details of Impact Fund go here',
    donors: 15,
    amount: 15,
    country: 'Singapore',
    status: CampaignStatus.PUBLISHED,
  },
  {
    id: 2,
    name: 'Impact Fund v2',
    details: 'Details of Impact Fund v2 go here',
    donors: 10,
    amount: 200,
    country: 'Singapore',
    status: CampaignStatus.ARCHIVED,
  },
  {
    id: 3,
    name: 'Impact Fund v3',
    details: 'Details of Impact Fund v3 go here',
    donors: 19,
    amount: 50000,
    country: 'Singapore',
    status: CampaignStatus.DRAFT,
  },
]

const CampaignList: NextPage = () => {
  // TODO get this from a API call
  const tags = ['food', 'clothes', 'mental-health', 'financial', 'training']

  const [campaigns, setCampaigns] = useState<Campaign[]>(testData);
  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<DocumentStatus>(DocumentStatus.All)
  const { props: _props, filters } = donationFilters(tags)

  useEffect(() => {
    const props = { ..._props, status };
    // setCampaigns(someApi(search, props))
  }, [_props, status, search]);

  const handleView = (row: Campaign) => {
    // route(`/donation/view/${row.id}`, row)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ marginTop: 2, marginBottom: 2 }} variant="h4">
        Donations
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="secondary" variant="contained">
          Create New Campaign
        </Button>
        <Searchbar search={search} setSearch={setSearch} filters={filters} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <DocumentListTabs status={status} setStatus={setStatus}>
          <DataGrid
            columns={campaignColumns(handleView)}
            rows={campaigns}
            autoHeight
            pageSize={10}
          ></DataGrid>
        </DocumentListTabs>
      </Box>
    </Box>
  )
}

export default CampaignList
