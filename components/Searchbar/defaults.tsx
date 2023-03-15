import { DateRange } from './DateRangeFilter'
import { useFilter as createFilter } from '.'
import { DonationFilters, Region, Urgency } from 'constants/Donation'
import { ArticleType, ContentFilters, ContentState } from 'constants/Content'

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

export interface ContentFiltersProps {
  selectedStates: ContentState[]
  selectedTypes: ArticleType[]
  selectedCreatedDateRange: DateRange | undefined
  selectedModifiedDateRange: DateRange | undefined
  selectedTags: string[]
}

export const contentFilters = (tags: string[]) => {
  const stateFilter = createFilter<ContentState[]>(
    ContentFilters.STATE,
    [],
    Object.values(ContentState)
  )
  const typeFilter = createFilter<ArticleType[]>(
    ContentFilters.TYPE,
    [],
    Object.values(ArticleType)
  )
  const createdDateFilter = createFilter<DateRange | undefined>(
    ContentFilters.DATE_OF_CREATION,
    undefined
  )
  const modifiedDateFilter = createFilter<DateRange | undefined>(
    ContentFilters.DATE_LAST_MODIFIED,
    undefined
  )
  const tagsFilter = createFilter<string[]>(ContentFilters.TAGS, [], tags)
  return {
    props: {
      selectedStates: stateFilter.value,
      selectedTypes: typeFilter.value,
      selectedCreatedDateRange: createdDateFilter.value,
      selectedModifiedDateRange: modifiedDateFilter.value,
      selectedTags: tagsFilter.value,
    } as ContentFiltersProps,
    filters: [
      stateFilter,
      typeFilter,
      createdDateFilter,
      modifiedDateFilter,
      tagsFilter,
    ],
  }
}
