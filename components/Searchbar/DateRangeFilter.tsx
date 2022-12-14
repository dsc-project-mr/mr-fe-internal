import { Dispatch, SetStateAction, useMemo } from 'react'
import { DateRange as DateRangeComponent, Range } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

export interface DateRange {
  start?: Date
  end?: Date
}

export interface DateRangeFilterProps {
  value: DateRange | undefined
  setValue: Dispatch<SetStateAction<DateRange | undefined>>
}

export const DateRangeFilter = ({ value, setValue }: DateRangeFilterProps) => {
  const range = useMemo<Range[]>(() => {
    // ref: https://github.com/hypeserver/react-date-range/issues/330#issuecomment-802601417
    return value === undefined
      ? [
          {
            startDate: undefined,
            endDate: new Date(''),
            key: 'selection',
          },
        ]
      : [
          {
            startDate: value.start,
            endDate: value.end,
            key: 'selection',
          },
        ]
  }, [value])

  return (
    <DateRangeComponent
      editableDateInputs={true}
      onChange={(nr) =>
        setValue({ start: nr.selection?.startDate, end: nr.selection?.endDate })
      }
      ranges={range}
      moveRangeOnFirstSelection={true}
    />
  )
}
