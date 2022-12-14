import TextField from '@mui/material/TextField'
import Box from '@mui/system/Box'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import Chip from '@mui/material/Chip'
import Cancel from '@mui/icons-material/Cancel'
import { ReactNode, Dispatch, SetStateAction } from 'react'

export type DynamicMultiSelectFilterProps<T> = {
  values: T[]
  setValues: Dispatch<SetStateAction<T[]>>
  valueSet: T[]
  renderValue?: (v: T) => ReactNode
} & Omit<AutocompleteProps<T, true, false, false>, 'options' | 'renderInput'>

export function DynamicMultiSelectFilter<T>({
  values,
  setValues,
  valueSet,
  renderValue,
  ...props
}: DynamicMultiSelectFilterProps<T>) {
  const _renderValue = renderValue || ((v: T) => v + '')
  const chips = values.map((v, i) => {
    return (
      <Chip
        key={i}
        label={_renderValue(v)}
        deleteIcon={<Cancel />}
        sx={{ marginRight: 1, marginTop: 1 }}
        onDelete={() => setValues((val) => val.filter((ov) => ov !== v))}
      />
    )
  })
  return (
    <Box sx={{ marginBottom: 2, display: 'flex', flexDirection: 'column' }}>
      <Autocomplete<T, true, false, false>
        {...props}
        multiple
        renderInput={(params) => <TextField {...params} />}
        options={valueSet}
        value={values}
        renderTags={() => ''} // disable rendering of tags into the textfield
        onChange={(_, nv) => setValues(nv)}
      />
      {/* Cool css trick to force overflow */}
      <Box sx={{ width: 0, minWidth: '100%' }}>{chips}</Box>
    </Box>
  )
}
