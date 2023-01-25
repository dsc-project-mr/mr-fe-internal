import {
  Box,
  Button,
  CSSObject,
  Drawer,
  List,
  ListItem,
  styled,
  Theme,
} from '@mui/material'
import { useState } from 'react'
import HeaderTab from './HeaderTab'
import { sidebarData } from 'constants/sidebarData'
import LogoutIcon from '@mui/icons-material/Logout'
import mr_logo from 'public/images/sidebar/mercy_relief_logo.png'
import mr_compact_logo from 'public/images/sidebar/mercy_relief_compact_logo.png'
import toggle_button from 'public/images/sidebar/toggle_button.png'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { MR_DARK_BLUE } from 'styles/theme'

export const DRAWER_WIDTH = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: '80px',
})

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

const Sidebar = () => {
  const [tabSelected, setTabSelected] = useState<string>('')

  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledDrawer
        anchor="left"
        open={open}
        variant="permanent"
        sx={{
          // This is to make sure the Log Out button remains at the bottom.

          '& .MuiPaper-root.MuiDrawer-paper': {
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        }}
      >
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '8px 0px',
            }}
          >
            <Box
              component="img"
              src={open ? mr_logo.src : mr_compact_logo.src}
              sx={{
                height: 80,
              }}
            />
          </ListItem>

          {sidebarData.map((headerData, index) => (
            <HeaderTab
              key={index}
              isSidebarOpen={open}
              headerData={headerData}
              tabSelected={tabSelected}
              setTabSelected={setTabSelected}
            />
          ))}
        </List>

        <Box marginBottom="20px">
          {open ? (
            <Button
              variant="contained"
              sx={{
                width: '200px',
                backgroundColor: MR_DARK_BLUE,
              }}
            >
              <LogoutIcon />
              LOG OUT
            </Button>
          ) : (
            <LogoutIcon />
          )}
        </Box>
      </StyledDrawer>
      <div>
        <Box
          onClick={() => setOpen(!open)}
          sx={{
            cursor: 'pointer',
            backgroundImage: `url(${toggle_button.src})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '95px',
            width: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </Box>
      </div>
    </>
  )
}

export default Sidebar
