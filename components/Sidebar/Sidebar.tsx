import { Button, Drawer, List } from '@mui/material'
import React, { useState } from 'react'
import HeaderTab from './HeaderTab'
import { sidebar_data } from './sidebar_data'

// Move data
// Update if null list
// Style
// Add top and bottom
// Close subheaders when close header
// Pointer

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true)

  const toggleDrawer = (open: boolean) => {
    setOpen(open)
  }

  return (
    <div>
      <Button onClick={() => toggleDrawer(!open)}>Toggle Sidebar</Button>
      <Drawer anchor={'left'} open={open} onClose={() => toggleDrawer(false)}>
        <List>
          {sidebar_data.map((headerData, index) => (
            <HeaderTab key={index} headerData={headerData} />
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default Sidebar
