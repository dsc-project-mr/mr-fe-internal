import { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ArticleRowData } from '../../models/article'
import { getComparator, Order } from './ComparatorFunctions'
import { ArticleTableHead } from './ArticleTableHead'
import { Fab, Typography } from '@mui/material'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined'
import Searchbar from 'components/Searchbar'
import DocumentListTabs from 'components/DocumentListTabs'
import { DocumentStatus } from 'constants/DocumentStatus'
import { contentFilters } from 'components/Searchbar/defaults'
import { DateRange } from '../Searchbar/DateRangeFilter'
import { ContentState, CONTENT_ARTICLE_URL } from 'constants/Content'
import { getAllArticles } from '../../apis/useGetContent'
import useSWR from 'swr'
import ArticleRow from './ArticleRow'

const isNotFiltered = (row: ArticleRowData, props: any) => {
  return (
    withinDateRange(row.createdAt, props.selectedCreatedDateRange) &&
    withinDateRange(row.updatedAt, props.selectedModifiedDateRange) &&
    isSelectedState(row.state, props.selectedStates)
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
  const { data, error } = useSWR<ArticleRowData[]>(
    process.env.NEXT_PUBLIC_API_URL + CONTENT_ARTICLE_URL,
    getAllArticles,
    { revalidateOnFocus: false }
  )

  // Sort states
  const [order, setOrder] = useState<Order>(Order.ASC)
  const [orderBy, setOrderBy] = useState<keyof ArticleRowData>('title')

  // Pagination states
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  // Searchbar states
  const [search, setSearch] = useState<string>('')
  const tags = ['food', 'clothes', 'mental-health', 'financial', 'training']
  const { props, filters } = contentFilters(tags)

  // DocumentListTab states
  const [status, setStatus] = useState(DocumentStatus.All)

  const displayRows = useMemo(() => {
    console.log('Memo called')

    return (data === undefined ? [] : data)
      .filter((row) => isNotFiltered(row, props))
      .filter((row) => {
        return row.title.toLowerCase().includes(search.toLowerCase())
      })
  }, [props, data, search])

  // const displayRows = (data === undefined ? [] : data)
  //   .filter((row) => isNotFiltered(row, props))
  //   .filter((row) => {
  //     return row.title.toLowerCase().includes(search.toLowerCase())
  //   })

  useEffect(() => {
    console.log('Length changed')

    // Need to reset to the first page before any change in number of rows displayed
    setPage(0)
  }, [displayRows.length])

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

  return error ? (
    <div>Error</div>
  ) : !data || data === undefined ? (
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
                          title={row.title}
                          createdAt={row.createdAt}
                          updatedAt={row.updatedAt}
                          state={row.state}
                          id={row.id}
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
