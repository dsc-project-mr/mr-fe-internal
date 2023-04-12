import { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ArticleRowData } from 'models/article'
import { getComparator, Order } from './ComparatorFunctions'
import { ArticleTableHead } from './ArticleTableHead'
import { Fab, Typography } from '@mui/material'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined'
import Searchbar from 'components/Searchbar'
import DocumentListTabs from 'components/DocumentListTabs'
import { DocumentStatus } from 'constants/DocumentStatus'
import {
  contentFilters,
  ContentFiltersProps,
} from 'components/Searchbar/defaults'
import { DateRange } from 'components/Searchbar/DateRangeFilter'
import { ContentState } from 'constants/Content'
import ArticleRow from './ArticleRow'
import useGetAllArticles from 'apis/content/useGetAllArticles'

const isNotFiltered = (
  row: ArticleRowData,
  props: ContentFiltersProps,
  search: string,
  status: DocumentStatus
) => {
  return (
    withinDateRange(row.createdAt, props.selectedCreatedDateRange) &&
    withinDateRange(row.updatedAt, props.selectedModifiedDateRange) &&
    isSelectedState(row.state, props.selectedStates) &&
    row.title.toLowerCase().includes(search.toLowerCase()) &&
    (status === DocumentStatus.All || row.state === DocumentStatus[status])
  )
}

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

const isSelectedState = (
  state: ContentState,
  selectedStates: ContentState[]
): boolean => selectedStates.length === 0 || selectedStates.includes(state)

export default function EnhancedTable() {
  const { data, error } = useGetAllArticles()

  const articleTags: string[] = useMemo(() => {
    if (data === undefined) return []
    const tags = new Set<string>()
    data.forEach((article: ArticleRowData) => {
      article.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags)
  }, [data])

  // Sort states
  const [order, setOrder] = useState<Order>(Order.ASC)
  const [orderBy, setOrderBy] = useState<keyof ArticleRowData>('title')

  // Pagination states
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  // Searchbar states
  const [search, setSearch] = useState<string>('')
  const { props, filters } = contentFilters(articleTags)

  // DocumentListTab states
  const [status, setStatus] = useState(DocumentStatus.All)

  const displayRows = useMemo(() => {
    console.log('Memo called')
    return (data === undefined ? [] : data).filter((row) =>
      isNotFiltered(row, props, search, status)
    )
  }, [props, data, search, status])

  useEffect(() => {
    console.log('Length changed')

    // Need to reset to the first page before any change in number of rows displayed
    setPage(0)
  }, [displayRows.length])

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - displayRows.length) : 0

  const handleRequestSort = (
    _event: React.MouseEvent<HTMLButtonElement>,
    property: keyof ArticleRowData
  ) => {
    const isAsc = orderBy === property && order === Order.ASC
    setOrder(isAsc ? Order.DESC : Order.ASC)
    setOrderBy(property)
  }

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
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

  return error ? (
    <div>Error : {error.message}</div>
  ) : data === undefined ? (
    <div>Loading...</div>
  ) : (
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
                        <ArticleRow
                          key={index}
                          labelId={labelId}
                          article={row}
                        />
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
