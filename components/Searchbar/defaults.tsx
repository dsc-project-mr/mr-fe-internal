import { DateRange } from './DateRangeFilter'
import { useFilter as createFilter } from '.'
import { DonationFilters, Region, Urgency } from 'constants/Donation'

// TODO one for content

export const donationFilters = (tags: string[]) => {
  const urgencyFilter = createFilter<Urgency[]>(
    DonationFilters.URGENCY,
    [],
    Object.values(Urgency)
  )
  const countryFilter = createFilter<Region[]>(
    DonationFilters.COUNTRY,
    [],
    Object.values(Region)
  )
  const dateFilter = createFilter<DateRange | undefined>(
    DonationFilters.DATE,
    undefined
  )
  const tagsFilter = createFilter<string[]>(DonationFilters.TAGS, [], tags)
  return {
    props: {
      selectedUrgencies: urgencyFilter.value,
      selectedRegions: countryFilter.value,
      selectedDateRange: dateFilter.value,
      selectedTags: tagsFilter.value,
    },
    filters: [urgencyFilter, countryFilter, dateFilter, tagsFilter],
  }
}
