import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ArticleRowData, ARTICLE_ROWS } from 'models/article'
import { getComparator, Order } from './ComparatorFunctions'
import { ArticleTableHead } from './ArticleTableHead'
import { Fab, Typography } from '@mui/material'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined'
import { useRouter } from 'next/router'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Searchbar from 'components/Searchbar'
import DocumentListTabs from 'components/DocumentListTabs'
import { DocumentStatus } from 'constants/DocumentStatus'
import {
  contentFilters,
  ContentFiltersProps,
} from 'components/Searchbar/defaults'
import { DateRange } from 'components/Searchbar/DateRangeFilter'
import { ContentState } from 'constants/Content'

const isNotFiltered = (row: ArticleRowData, props: ContentFiltersProps) => {
  return (
    withinDateRange(row.date_created, props.selectedCreatedDateRange) &&
    withinDateRange(row.last_modified, props.selectedModifiedDateRange) &&
    isSelectedState(row.status, props.selectedStates)
  )
}

const isSelectedState = (
  state: ContentState,
  selectedStates: ContentState[]
): boolean => selectedStates.length === 0 || selectedStates.includes(state)

const withinDateRange = (date: Date, range: DateRange | undefined): boolean => {
  if (
    range === undefined ||
    range.start === undefined ||
    range.end === undefined
  ) {
    return true
  }

  const { start, end } = range
  return start <= date && date <= end
}

export default function EnhancedTable() {
  const router = useRouter()
  const [order, setOrder] = useState<Order>(Order.ASC)
  const [orderBy, setOrderBy] = useState<keyof ArticleRowData>('name')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [rows, setRows] = useState<ArticleRowData[]>(ARTICLE_ROWS)

  // Searchbar variables
  const [search, setSearch] = useState<string>('')
  const tags = ['food', 'clothes', 'mental-health', 'financial', 'training']
  const { props, filters } = contentFilters(tags)

  // DocumentListTab variables
  const [status, setStatus] = useState(DocumentStatus.All)

  const displayRows = rows.filter((row) => isNotFiltered(row, props))

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - displayRows.length) : 0

  const handleRequestSort = (
    event: React.MouseEvent<HTMLButtonElement>,
    property: keyof ArticleRowData
  ) => {
    const isAsc = orderBy === property && order === Order.ASC
    setOrder(isAsc ? Order.DESC : Order.ASC)
    setOrderBy(property)
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const requestSearch = (searchedVal: string) => {
    const filteredRows = ARTICLE_ROWS.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase())
    })
    setRows(filteredRows)
  }

  useEffect(() => {
    // Need to reset to the first page before filtering through search name
    setPage(0)
    requestSearch(search)
  }, [search])

  useEffect(() => {
    // Need to reset to the first page before any change in number of rows displayed
    setPage(0)

    // console.log('called')
  }, [displayRows.length])

  return (
    <>
      <Typography variant="h3" marginTop="25px">
        Manage Articles
      </Typography>

      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        marginY="25px"
      >
        <Fab
          sx={{
            backgroundColor: '#FAB800',
          }}
        >
          <NoteAddOutlinedIcon htmlColor="#666666" />
        </Fab>
        <Searchbar search={search} setSearch={setSearch} filters={filters} />
      </Box>

      <DocumentListTabs status={status} setStatus={setStatus}>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size="medium"
              >
                <ArticleTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {displayRows
                    .sort(getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`

                      return (
                        <TableRow
                          hover
                          role="row"
                          tabIndex={-1}
                          key={row.name}
                          sx={{
                            '&:hover': {
                              backgroundColor: '#1976D214 !important',
                            },
                          }}
                        >
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            style={{
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis',
                              maxWidth: '200px',
                              overflow: 'hidden',
                            }}
                          >
                            {row.name}
                          </TableCell>
                          <TableCell align="left">
                            {row.date_created.toLocaleDateString()}
                          </TableCell>
                          <TableCell align="left">
                            {row.last_modified.toLocaleDateString()}
                          </TableCell>
                          <TableCell align="left">{row.status}</TableCell>
                          <TableCell
                            align="left"
                            onClick={() =>
                              router.push('/content/articles/dsadsa')
                            }
                          >
                            <KeyboardArrowRightIcon
                              sx={{
                                cursor: 'pointer',
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  {emptyRows > 0 && (
                    <TableRow sx={{ padding: '16px' }}>
                      <TableCell colSpan={6} sx={{ height: 62 * emptyRows }} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={displayRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </DocumentListTabs>
    </>
  )
}
