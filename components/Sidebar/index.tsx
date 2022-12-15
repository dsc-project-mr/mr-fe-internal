import { Box, Button, Drawer, List, ListItem } from '@mui/material'
import { useState } from 'react'
import HeaderTab from './HeaderTab'
import { sidebarData } from 'constants/sidebarData'
import LogoutIcon from '@mui/icons-material/Logout'
import { MR_DARK_BLUE } from 'styles/theme'

export const DRAWER_WIDTH = 240

const Sidebar = () => {
  const [tabSelected, setTabSelected] = useState<string>('')

  return (
    <>
      <Drawer
        anchor="left"
        open={true}
        variant="persistent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },

          /* 
            This is to make sure the Log Out button remains at the bottom.
          */
          '& .MuiPaper-root.MuiDrawer-paper': {
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        }}
      >
        <List>
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src="images/sidebar/mercy_relief_logo.png"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                height: 80,
              }}
            />
          </ListItem>
          {sidebarData.map((headerData, index) => (
            <HeaderTab
              key={index}
              headerData={headerData}
              tabSelected={tabSelected}
              setTabSelected={setTabSelected}
            />
          ))}
        </List>
        <Button
          variant="contained"
          sx={{
            width: '200px',
            backgroundColor: MR_DARK_BLUE,
            marginBottom: '20px',
          }}
        >
          <LogoutIcon />
          LOG OUT
        </Button>
      </Drawer>
    </>
  )
}

export default Sidebar
