import { Button, Drawer, List } from '@mui/material'
import React, { useState } from 'react'
import HeaderTab from './HeaderTab'

// Move data
// Update if null list
// Style
// Add top and bottom
// Close subheaders when close header
// Pointer

const data: SidebarData[] = [
  {
    title: 'Campaigns',
    subheaders: [
      { title: 'Donations', tabs: [] },
      { title: 'Email', tabs: [] },
    ],
  },
  {
    title: 'Content',
    subheaders: [
      { title: 'Article', tabs: ['View Article', 'Edit Article'] },
      { title: 'Website Home Page', tabs: [] },
    ],
  },
  {
    title: "Customer's Database",
    subheaders: [],
  },
  {
    title: 'Social Media Analytics',
    subheaders: [],
  },
  {
    title: 'User Accounts (Internal Portal)',
    subheaders: [],
  },
  {
    title: 'Settings',
    subheaders: [],
  },
]

export type SidebarData = {
  title: string
  subheaders: SubheaderData[]
}

export type SubheaderData = {
  title: string
  tabs: string[]
}

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
          {data.map((headerData, index) => (
            <HeaderTab key={index} headerData={headerData} />
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default Sidebar
