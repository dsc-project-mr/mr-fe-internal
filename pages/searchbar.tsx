import Box from '@mui/material/Box'
import Searchbar, { Filter, useFilter } from 'components/Searchbar'
import { DateRange, DateRangeFilter } from 'components/Searchbar/DateRangeFilter'
import { DynamicMultiSelectFilter } from 'components/Searchbar/DynamicMultiSelectFilter'
import { MultiSelectFilter } from 'components/Searchbar/MultiSelectFilter'
import { Region } from 'constants/Donation'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const tags = ['food', 'clothes', 'mental-health', 'financial', 'training'];

  // perhaps we need to invest in deepEquals
  const arrayEquals = <T,>(v: T[], dv: T[]) => {
    return v.length === dv.length && v.every((e, i) => e === dv[i]);
  };

  const dateRangeEquals = (v?: DateRange, dv?: DateRange) => {
    return v === dv || (
        v?.start?.getTime() === dv?.start?.getTime() &&
        v?.end?.getTime() === dv?.end?.getTime()
    );
  }

  const [search, setSearch] = useState<string>('');

  const selectedRegions = useFilter<Region[]>("Country/Region", [], 
    f => <MultiSelectFilter valueSet={Object.values(Region)} values={f.value} setValues={f.setValue} />,
    arrayEquals
  );
  const selectedDateRange = useFilter<DateRange|undefined>("Date", undefined, 
    f => <DateRangeFilter value={f.value} setValue={f.setValue} />,
    dateRangeEquals
  );
  const selectedTags = useFilter<string[]>("Tags", [], 
    f => <DynamicMultiSelectFilter valueSet={tags} values={f.value} setValues={f.setValue} />,
    arrayEquals
  );

  const searchbarFilterProps = {
    search, setSearch,
    filters: [selectedRegions, selectedDateRange, selectedTags] as Filter<unknown>[]
  };[]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Searchbar {...searchbarFilterProps} />
        <div>Search: {search}</div>
        <div>Regions: {"[ " + selectedRegions.value.join(", ") + " ]"}</div>
        <div>DateRange: {selectedDateRange.value?.start + " to " + selectedDateRange.value?.end}</div>
        <div>Tags: {"[ " + selectedTags.value.join(", ") + " ]"}</div>
    </Box>
  )
}

export default Home
