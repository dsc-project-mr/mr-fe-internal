import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'
import { GridColDef } from '@mui/x-data-grid/models'
import DocumentListTabs from 'components/DocumentListTabs'
import Searchbar from 'components/Searchbar'
import { donationFilters } from 'components/Searchbar/defaults'
import { DocumentStatus } from 'constants/DocumentStatus'
import { CampaignStatus } from 'constants/Donation'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

// TODO move this to /models
interface Campaign {
  id: number
  name: string
  details: string
  donors: number
  amount: number
  country: string
  status: CampaignStatus
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', minWidth: 200, flex: 1 },
  { field: 'country', headerName: 'Country', minWidth: 150, flex: 1 },
  { field: 'donors', headerName: 'Total Donors', minWidth: 100, flex: 1 },
  { field: 'status', headerName: 'Status', minWidth: 100, flex: 1 },
];

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
  }, [_props, status, search])



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
            columns={columns}
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
