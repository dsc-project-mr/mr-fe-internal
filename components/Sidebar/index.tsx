import { Box, Button, Drawer, List, ListItem, Typography } from '@mui/material'
import { useState } from 'react'
import HeaderTab from './HeaderTab'
import { sidebarData } from 'constants/sidebarData'
import LogoutIcon from '@mui/icons-material/Logout'

// Rename tabs
// Hover
// Select tabs ui feedback

const DRAWER_WIDTH = 320
export const SELECTED_TAB_COLOR = '#FFFFFF'
export const UNSELECTED_TAB_COLOR = '#EAF9FF'

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
            backgroundColor: '#EAF9FF',
          },

          '& .MuiAccordionDetails-root': {
            backgroundColor: '#EAF9FF',
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
              src="mercy_relief_logo.png"
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
            width: '260px',
            backgroundColor: '#1976D2',
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
