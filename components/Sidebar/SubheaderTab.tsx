import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { SubheaderData } from 'constants/sidebarData'

import { Box } from '@mui/system'

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

  return (
    <Box
      height={40}
      padding="10px"
      onClick={() => router.push(parentRoute + subheaderData.route)}
    >
      <Typography
        sx={{
          color: 'text.primary',
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
