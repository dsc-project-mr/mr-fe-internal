import { DateRange, DateRangeFilter } from './DateRangeFilter'
import { Filter, useFilter as createFilter } from '.'
import { Region, Urgency } from 'constants/Donation'
import { DynamicMultiSelectFilter } from './DynamicMultiSelectFilter'
import { MultiSelectFilter } from './MultiSelectFilter'

// perhaps we need to invest in deepEquals
const arrayEquals = <T,>(v: T[], dv: T[]) => {
  return v.length === dv.length && v.every((e, i) => e === dv[i])
}

const dateRangeEquals = (v?: DateRange, dv?: DateRange) => {
  return (
    v === dv ||
    (v?.start?.getTime() === dv?.start?.getTime() &&
      v?.end?.getTime() === dv?.end?.getTime())
  )
}

// TODO one for content

export const donationFilters = (tags: string[]) => {
  const selectedUrgencies = createFilter<Urgency[]>(
    'Urgency',
    [],
    (f) => (
      <MultiSelectFilter
        valueSet={Object.values(Urgency)}
        values={f.value}
        setValues={f.setValue}
      />
    ),
    arrayEquals
  )
  const selectedRegions = createFilter<Region[]>(
    'Country/Region',
    [],
    (f) => (
      <MultiSelectFilter
        valueSet={Object.values(Region)}
        values={f.value}
        setValues={f.setValue}
      />
    ),
    arrayEquals
  )
  const selectedDateRange = createFilter<DateRange | undefined>(
    'Date',
    undefined,
    (f) => <DateRangeFilter value={f.value} setValue={f.setValue} />,
    dateRangeEquals
  )
  const selectedTags = createFilter<string[]>(
    'Tags',
    [],
    (f) => (
      <DynamicMultiSelectFilter
        valueSet={tags}
        values={f.value}
        setValues={f.setValue}
      />
    ),
    arrayEquals
  )
  return {
    props: {
      selectedUrgencies: selectedUrgencies.value,
      selectedRegions: selectedRegions.value,
      selectedDateRange: selectedDateRange.value,
      selectedTags: selectedTags.value,
    },
    filters: [
      selectedUrgencies,
      selectedRegions,
      selectedDateRange,
      selectedTags,
    ] as Filter<unknown>[],
  }
}
