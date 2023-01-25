import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { SubheaderData } from 'constants/sidebarData'

import { Box } from '@mui/system'
import {
  SELECTED_FONT_COLOR,
  SELECTED_ICON_COLOR,
  SELECTED_TAB_COLOR,
  UNSELECTED_FONT_COLOR,
  UNSELECTED_ICON_COLOR,
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
        cursor: 'pointer',
        backgroundColor:
          tabSelected === subheaderData.title
            ? SELECTED_TAB_COLOR
            : UNSELECTED_TAB_COLOR,
        display: 'flex',
        '&:hover': {
          filter: 'brightness(93%)',
        },
      }}
    >
      <div
        style={{
          width: '18px',
          height: '18px',
          background:
            tabSelected === subheaderData.title
              ? SELECTED_ICON_COLOR
              : UNSELECTED_ICON_COLOR,

          marginLeft: '10px',
          marginRight: '15px',
          WebkitMask:
            'url(/images/sidebar/' + subheaderData.imgSrc + ') center/contain',
          mask:
            'url(/images/sidebar/' + subheaderData.imgSrc + ') center/contain',
        }}
      ></div>
      <Typography
        sx={{
          color:
            tabSelected === subheaderData.title
              ? SELECTED_FONT_COLOR
              : UNSELECTED_FONT_COLOR,
        }}
        textTransform="uppercase"
        fontSize="13px"
      >
        {subheaderData.title}
      </Typography>
    </Box>
  )
}

export default SubheaderTab
