import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'
import DocumentListTabs from 'components/DocumentListTabs'
import Searchbar from 'components/Searchbar'
import { donationFilters } from 'components/Searchbar/defaults'
import { DocumentStatus } from 'constants/DocumentStatus'
import type { NextPage } from 'next'
import { useState, useMemo } from 'react'
import { Campaign, campaignColumns } from 'models/campaign'
import { useRouter } from 'next/router'
import useGetCampaigns from 'apis/campaign/useGetCampaigns'

const CampaignList: NextPage = () => {
  const { data: campaigns, error } = useGetCampaigns()

  const campaignTags: string[] = useMemo(() => {
    if (campaigns === undefined) return []
    const tags = new Set<string>()
    campaigns.forEach((campaign: Campaign) => {
      campaign.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags)
  }, [campaigns])

  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<DocumentStatus>(DocumentStatus.All)
  const { filters } = donationFilters(campaignTags)

  const router = useRouter()

  const handleView = (row: Campaign) => {
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
            rows={
              status === DocumentStatus.All
                ? campaigns
                : campaigns.filter(
                    (campaign) => campaign.state === DocumentStatus[status]
                  )
            }
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
