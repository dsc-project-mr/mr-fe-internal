import { useState, Dispatch, SetStateAction, useMemo, useCallback } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import Search from '@mui/icons-material/Search'
import Tune from '@mui/icons-material/Tune'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'

import Badge from '@mui/material/Badge'
import Settings from '@mui/icons-material/Settings'
import { FilterContainer } from './FilterContainer'
import { MultiSelectFilter } from './MultiSelectFilter'
import { DynamicMultiSelectFilter } from './DynamicMultiSelectFilter'
import { DateRange, DateRangeFilter } from './DateRangeFilter'
import isEqual from 'lodash/isEqual'
import { DonationFilters, Region, Urgency } from 'constants/Donation'
import { ArticleType, ContentFilters, ContentState } from 'constants/Content'

export interface Filter<T> {
  name: string
  value: T
  setValue: Dispatch<SetStateAction<T>>
  defaultValue: T
  resetValue: () => void
  valueSet?: T
}

export function useFilter<T>(
  name: string,
  defaultValue: T,
  valueSet?: T
): Filter<T> {
  const [value, setValue] = useState<T>(defaultValue)
  return {
    name,
    value,
    setValue,
    defaultValue,
    resetValue: () => setValue(defaultValue),
    valueSet,
  }
}

type SearchbarProps = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>

  filters: (
    | Filter<ContentState[]>
    | Filter<ArticleType[]>
    | Filter<Urgency[]>
    | Filter<Region[]>
    | Filter<DateRange | undefined>
    | Filter<string[]>
  )[]
} & TextFieldProps
/**
 * Searchbar component with filters. To see how to configure filters, see `defaults.tsx`
 *
 * @example
 * ```ts
 * const Example = () => {
 *   const tags = ['food', 'clothes', 'mental-health', 'financial', 'training']
 *   const [search, setSearch] = useState<string>('')
 *   const { props, filters } = donationFilters(tags)
 *   const [status, setStatus] = useState(DocumentStatus.All);
 *   return (
 *     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
 *       <Searchbar search={search} setSearch={setSearch} filters={filters} />
 *       <div>Search: {search}</div>
 *       <div>Urgency: {'[ ' + props.selectedUrgencies.join(', ') + ' ]'}</div>
 *       <div>Regions: {'[ ' + props.selectedRegions.join(', ') + ' ]'}</div>
 *       <div>
 *         DateRange:
 *         {props.selectedDateRange?.start + ' to ' + props.selectedDateRange?.end}
 *       </div>
 *       <div>Tags: {'[ ' + props.selectedTags.join(', ') + ' ]'}</div>
 *     </Box>
 *   )
 * }
 * ```
 */
const Searchbar = ({
  search,
  setSearch,
  filters,
  ...props
}: SearchbarProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const isDirty = useMemo<boolean>(() => {
    return !filters.every((f) => isEqual(f.value, f.defaultValue))
  }, [filters])

  const clearState = useCallback(() => {
    for (const f of filters) {
      f.resetValue()
    }
  }, [filters])

  const FilterComponent = useCallback((f: Filter<any>) => {
    switch (f.name) {
      case ContentFilters.STATE:
        return (
          <MultiSelectFilter
            valueSet={f.valueSet}
            values={f.value}
            setValues={f.setValue}
          />
        )

      case ContentFilters.TYPE:
        return (
          <MultiSelectFilter
            valueSet={f.valueSet}
            values={f.value}
            setValues={f.setValue}
          />
        )

      case ContentFilters.DATE_OF_CREATION:
        return <DateRangeFilter value={f.value} setValue={f.setValue} />

      case ContentFilters.DATE_LAST_MODIFIED:
        return <DateRangeFilter value={f.value} setValue={f.setValue} />

      case ContentFilters.TAGS:
        return (
          <DynamicMultiSelectFilter
            valueSet={f.valueSet}
            values={f.value}
            setValues={f.setValue}
          />
        )

      case DonationFilters.URGENCY:
      case DonationFilters.COUNTRY:
        return (
          <MultiSelectFilter
            valueSet={f.valueSet}
            values={f.value}
            setValues={f.setValue}
          />
        )

      case DonationFilters.DATE:
        return <DateRangeFilter value={f.value} setValue={f.setValue} />

      case DonationFilters.TAGS:
        return (
          <DynamicMultiSelectFilter
            valueSet={f.valueSet}
            values={f.value}
            setValues={f.setValue}
          />
        )

      default:
        return (
          <DynamicMultiSelectFilter
            valueSet={f.valueSet}
            values={f.value}
            setValues={f.setValue}
          />
        )
    }
  }, [])

  return (
    <div>
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          '& .MuiInputBase-root': { borderRadius: 4 },
          '& .MuiInputBase-input': { padding: '0.7rem 0.0rem' }, // reduce padding inside input
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <Badge
                  badgeContent={
                    <Settings
                      sx={{ width: '1.25rem', height: '1.25rem' }}
                      color="primary"
                    />
                  }
                  invisible={!isDirty}
                >
                  <Tune />
                </Badge>
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...props}
      />
      <Popover
        open={anchorEl !== null}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              padding: 2,
              display: 'inline-flex',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontSize="1.2rem">
              Filters
            </Typography>
            <Button onClick={() => clearState()}>Clear All</Button>
          </Box>
          {filters.map((f) => {
            return (
              <FilterContainer key={f.name} title={f.name}>
                {FilterComponent(f)}
              </FilterContainer>
            )
          })}
        </Box>
      </Popover>
    </div>
  )
}

export default Searchbar
