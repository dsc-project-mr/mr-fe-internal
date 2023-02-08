import { CampaignStatus } from 'constants/Donation'
import ChevronRight from '@mui/icons-material/ChevronRight'
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from '@mui/x-data-grid'

// GridActionsCellItem seems to be badly defined, I can't set the
// properties described here: https://mui.com/x/react-data-grid/column-definition/#special-properties
// So I've created this monstrosity. Forgive me.
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const UntypesafeBox = (props: any) => {
  return <GridActionsCellItem {...props} />
}

export interface Campaign {
  id: number
  name: string
  details: string
  donors: number
  amount: number
  country: string
  status: CampaignStatus
}

export const campaignColumns = (
  handleView: (c: Campaign) => void
): GridColDef[] => {
  const navAction = {
    field: 'actions',
    type: 'actions',
    width: 50,
    getActions: (params: GridRowParams) => [
      <UntypesafeBox
        key={0}
        icon={<ChevronRight />}
        label="View"
        onClick={() => handleView(params.row)}
      />,
    ],
  }
  return [
    { field: 'name', headerName: 'Name', minWidth: 200, flex: 1 },
    { field: 'country', headerName: 'Country', minWidth: 150, flex: 1 },
    { field: 'donors', headerName: 'Total Donors', minWidth: 100, flex: 1 },
    { field: 'status', headerName: 'Status', minWidth: 100, flex: 1 },
    navAction,
  ]
}
