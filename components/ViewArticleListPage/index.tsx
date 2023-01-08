import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ArticleRowData, ARTICLE_ROWS } from '../../models/article'
import { getComparator, Order, stableSort } from './ComparatorFunctions'
import { ArticleTableHead } from './ArticleTableHead'
import { Fab, Typography } from '@mui/material'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined'
import { useRouter } from 'next/router'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { donationFilters } from 'components/Searchbar/defaults'
import Searchbar from 'components/Searchbar'
import DocumentListTabs from 'components/DocumentListTabs'
import { DocumentStatus } from 'constants/DocumentStatus'

export default function EnhancedTable() {
  const router = useRouter()
  const [order, setOrder] = useState<Order>(Order.ASC)
  const [orderBy, setOrderBy] = useState<keyof ArticleRowData>('name')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [rows, setRows] = useState<ArticleRowData[]>(ARTICLE_ROWS)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  // Searchbar variables
  const tags = ['food', 'clothes', 'mental-health', 'financial', 'training']
  const [search, setSearch] = useState<string>('')
  const { filters } = donationFilters(tags)

  // DocumentListTab variables
  const [status, setStatus] = useState(DocumentStatus.All)

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
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.sort(getComparator(order, orderBy)).slice() */}
                  {stableSort(rows, getComparator(order, orderBy))
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
                            sx={{
                              // Check how to calculate this dyanmically
                              maxWidth: '150px',
                            }}
                          >
                            <Typography noWrap>{row.name}</Typography>
                          </TableCell>
                          <TableCell align="left">{row.date_created}</TableCell>
                          <TableCell align="left">
                            {row.last_modified}
                          </TableCell>
                          <TableCell align="left">{row.status}</TableCell>
                          <TableCell
                            align="left"
                            onClick={() =>
                              router.push('/content/articles/dsadsa')
                            }
                            padding="none"
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
                    <TableRow
                      style={{
                        // TODO: Figure out how to get this value dynamically
                        height: 57.3 * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
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
