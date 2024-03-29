import * as React from 'react'
import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import { visuallyHidden } from '@mui/utils'
import { ArticleRowData } from 'models/article'
import { Order } from './ComparatorFunctions'

interface HeadCell {
  disablePadding: boolean
  id: keyof ArticleRowData
  label: string
  numeric: boolean
}

const headCells: readonly HeadCell[] = [
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'createdAt',
    numeric: true,
    disablePadding: false,
    label: 'Date Of Creation',
  },
  {
    id: 'updatedAt',
    numeric: true,
    disablePadding: false,
    label: 'Last Modified',
  },
  {
    id: 'state',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
]

interface ArticleTableProps {
  onRequestSort: (
    event: React.MouseEvent<HTMLButtonElement>,
    property: keyof ArticleRowData
  ) => void
  order: Order
  orderBy: string
}

export const ArticleTableHead = (props: ArticleTableProps) => {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler =
    (property: keyof ArticleRowData) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : Order.ASC}
              onClick={createSortHandler(headCell.id)}
              sx={{
                fontWeight: 700,
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === Order.DESC
                    ? 'sorted descending'
                    : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}

        {/* Empty Table cell here to create a column for KeyboardArrowRightIcon */}
        <TableCell />
      </TableRow>
    </TableHead>
  )
}
