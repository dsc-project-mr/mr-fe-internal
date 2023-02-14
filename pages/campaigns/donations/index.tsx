import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'
import DocumentListTabs from 'components/DocumentListTabs'
import Searchbar from 'components/Searchbar'
import { donationFilters } from 'components/Searchbar/defaults'
import { DocumentStatus } from 'constants/DocumentStatus'
import type { NextPage } from 'next'
import { useState } from 'react'
import { Campaign, campaignColumns } from 'models/campaign'
import { useRouter } from 'next/router'
import useGetCampaigns from 'apis/campaign/useGetCampaigns'

// const testData: Campaign[] = [
//   {
//     id: '63ca0a0acbb59fb5e90a541e',
//     name: 'Impact Fund',
//     details: 'Details of Impact Fund go here',
//     donors: 15,
//     amount: 15,
//     country: 'Singapore',
//     state: CampaignStatus.PUBLISHED,
//   },
//   {
//     id: '63ca0a0acbb59fb5e90a5424',
//     name: 'Impact Fund v2',
//     details: 'Details of Impact Fund v2 go here',
//     donors: 10,
//     amount: 200,
//     country: 'Singapore',
//     state: CampaignStatus.ARCHIVED,
//   },
//   {
//     id: '63ca0a0acbb59fb5e90a5427',
//     name: 'Impact Fund v3',
//     details: 'Details of Impact Fund v3 go here',
//     donors: 19,
//     amount: 50000,
//     country: 'Singapore',
//     state: CampaignStatus.DRAFT,
//   },
// ]

const CampaignList: NextPage = () => {
  // TODO get this from a API call
  const tags = ['food', 'clothes', 'mental-health', 'financial', 'training']

  // TODO: we might need to have 4 diff data storing, otherwise we will have to keep
  // recalling the APIs when we switch tabs

  const { data: campaigns, error } = useGetCampaigns()

  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<DocumentStatus>(DocumentStatus.All)
  const { filters } = donationFilters(tags)

  const router = useRouter()

  const handleView = (row: Campaign) => {
    console.log(row.id)
    router.push(`/campaigns/donations/${row.name}_${row.id}`)
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (campaigns === undefined) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Loading Campaigns...
      </div>
    )
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
            rowsPerPageOptions={[10]}
          />
        </DocumentListTabs>
      </Box>
    </Box>
  )
}

export default CampaignList
