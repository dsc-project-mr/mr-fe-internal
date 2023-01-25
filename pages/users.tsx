import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Add from '@mui/icons-material/Add'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import IconButton from '@mui/material/IconButton'
import { MR_GRAY_1, MR_YELLOW } from 'styles/theme'

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', minWidth: 250, flex: 1 },
  { field: 'email', headerName: 'Email Address', minWidth: 300, flex: 1 },
  { field: 'role', headerName: 'Role', minWidth: 200, flex: 1 },
]

// TODO: get this from api
const rows = [
  { id: 1, name: 'Alice Tan', email: 'alice@gmail.com', role: 'Super Admin' },
  {
    id: 2,
    name: 'Benedict Yeo',
    email: 'benedict@gmail.com',
    role: 'Donation Campaign Editor',
  },
  {
    id: 3,
    name: 'Candice Ng',
    email: 'candice@gmail.com',
    role: 'Donation Campaign Editor',
  },
  {
    id: 4,
    name: 'Dominic Lee',
    email: 'dominic@gmail.com',
    role: 'Donation Campaign Editor',
  },
  {
    id: 5,
    name: 'Edwin Loh',
    email: 'edwin@gmail.com',
    role: 'Article Editor',
  },
  {
    id: 6,
    name: 'Fiona Lam',
    email: 'fiona@gmail.com',
    role: 'Article Editor',
  },
  {
    id: 7,
    name: 'Georgia Gan',
    email: 'georgia@gmail.com',
    role: 'Internal User',
  },
  {
    id: 8,
    name: 'Hillary Mok',
    email: 'hillary@gmail.com',
    role: 'Internal User',
  },
]

const Settings: NextPage = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: 20 }}
    >
      <IconButton
        sx={{
          background: MR_YELLOW,
          color: MR_GRAY_1,
          borderRadius: 2,
          alignSelf: 'end',
        }}
      >
        <Add></Add>
      </IconButton>
      <DataGrid
        sx={{ marginTop: 2, marginBottom: 2 }}
        pageSize={10}
        rowsPerPageOptions={[10, 50, 100]}
        autoHeight
        rows={rows}
        columns={columns}
      />
    </Box>
  )
}

export default Settings
