import { Button, Drawer, List, ListItem, Typography } from '@mui/material'
import { useState } from 'react'
import HeaderTab from './HeaderTab'
import { sidebarData } from 'constants/sidebarData'
import LogoutIcon from '@mui/icons-material/Logout'

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
          <ListItem>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Mercy Relief Internal Portal
            </Typography>
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
