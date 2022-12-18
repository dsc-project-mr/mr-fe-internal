import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { SubheaderData } from 'constants/sidebarData'

import { Box } from '@mui/system'
import {
  SELECTED_FONT_COLOR,
  SELECTED_TAB_COLOR,
  UNSELECTED_FONT_COLOR,
  UNSELECTED_TAB_COLOR,
} from './HeaderTab'

const SubheaderTab = ({
  subheaderData,
  tabSelected,
  setTabSelected,
  parentRoute,
}: {
  subheaderData: SubheaderData
  tabSelected: string
  setTabSelected: Dispatch<SetStateAction<string>>
  parentRoute: string
}) => {
  const router = useRouter()

  const handleSelected = () => {
    router.push(parentRoute + subheaderData.route)
    setTabSelected(subheaderData.title)
  }

  return (
    <Box
      height={40}
      padding="10px"
      onClick={handleSelected}
      sx={{
        backgroundColor:
          tabSelected == subheaderData.title
            ? SELECTED_TAB_COLOR
            : UNSELECTED_TAB_COLOR,
      }}
    >
      <Typography
        sx={{
          color:
            tabSelected == subheaderData.title
              ? SELECTED_FONT_COLOR
              : UNSELECTED_FONT_COLOR,
          position: 'relative',
          left: '20px',
        }}
      >
        {subheaderData.title}
      </Typography>
    </Box>
  )
}

export default SubheaderTab
