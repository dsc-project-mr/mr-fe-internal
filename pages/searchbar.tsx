import Box from '@mui/material/Box'
import Searchbar from 'components/Searchbar'
import { DateRange } from 'components/Searchbar/DateRangeFilter'
import { Region } from 'constants/Donation'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const defaultSelectedRegions: Region[] = [];
  const defaultSelectedDateRange: DateRange | undefined = undefined;
  const defaultSelectedTags: string[] = [];

  const [search, setSearch] = useState<string>('');
  const [selectedRegions, setSelectedRegions] = useState<Region[]>(defaultSelectedRegions);
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>(defaultSelectedDateRange);
  const [selectedTags, setSelectedTags] = useState<string[]>(defaultSelectedTags);

  const searchbarFilterProps = {
    search, setSearch,
    selectedRegions, setSelectedRegions, defaultSelectedRegions,
    selectedDateRange, setSelectedDateRange, defaultSelectedDateRange,
    selectedTags, setSelectedTags, defaultSelectedTags,
  };

  const tags = ['food', 'clothes', 'mental-health', 'financial', 'training'];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Searchbar {...searchbarFilterProps} tags={tags}/>
        <div>Search: {search}</div>
        <div>Regions: {"[ " + selectedRegions.join(", ") + " ]"}</div>
        <div>DateRange: {selectedDateRange?.start + " to " + selectedDateRange?.end}</div>
        <div>Tags: {"[ " + selectedTags.join(", ") + " ]"}</div>
    </Box>
  )
}

export default Home