import Box from '@mui/material/Box'
import Searchbar from 'components/Searchbar'
import { donationFilters } from 'components/Searchbar/defaults'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const tags = ['food', 'clothes', 'mental-health', 'financial', 'training']

  const [search, setSearch] = useState<string>('')

  const { props, filters } = donationFilters(tags)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Searchbar search={search} setSearch={setSearch} filters={filters} />
      <div>Search: {search}</div>
      <div>Urgency: {'[ ' + props.selectedUrgencies.join(', ') + ' ]'}</div>
      <div>Regions: {'[ ' + props.selectedRegions.join(', ') + ' ]'}</div>
      <div>
        DateRange:
        {props.selectedDateRange?.start + ' to ' + props.selectedDateRange?.end}
      </div>
      <div>Tags: {'[ ' + props.selectedTags.join(', ') + ' ]'}</div>
    </Box>
  )
}

export default Home
