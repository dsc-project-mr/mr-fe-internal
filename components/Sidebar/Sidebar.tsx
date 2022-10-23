import { Button, Drawer, List, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import HeaderTab from './HeaderTab'
import { sidebar_data } from './sidebar_data'
import LogoutIcon from '@mui/icons-material/Logout'

// Rename tabs
// Hover
// Select tabs ui feedback

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true)
  const [tabSelected, setTabSelected] = useState<string>('')

  const toggleDrawer = (open: boolean) => {
    setOpen(open)
  }

  return (
    <div>
      <Button onClick={() => toggleDrawer(!open)}>Toggle Sidebar</Button>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={() => toggleDrawer(false)}
        sx={{
          /* 
            This is to make sure the Log Out button remains at the bottom.
            Need to check whether this cascades    
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
              {'Mercy Relief Internal Portal'}
            </Typography>
          </ListItem>
          {sidebar_data.map((headerData, index) => (
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
    </div>
  )
}

export default Sidebar
