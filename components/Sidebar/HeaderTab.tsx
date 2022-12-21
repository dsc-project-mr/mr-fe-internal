import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItem,
  Typography,
} from '@mui/material'
import { Dispatch, SetStateAction, memo, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { SidebarData } from 'constants/sidebarData'
import { useRouter } from 'next/router'

import { DRAWER_WIDTH } from '.'
import SubheaderTab from './SubheaderTab'

const SELECTED_TAB_COLOR = '#FAB800'
const UNSELECTED_TAB_COLOR = 'white'
const SELECTED_FONT_COLOR = 'white'
const UNSELECTED_FONT_COLOR = 'black'
const SELECTED_ICON_COLOR = 'white'
const UNSELECTED_ICON_COLOR = '#009DD7'

const HeaderTab = ({
  isSidebarOpen,
  headerData,
  tabSelected,
  setTabSelected,
}: {
  isSidebarOpen: boolean
  headerData: SidebarData
  tabSelected: string
  setTabSelected: Dispatch<SetStateAction<string>>
}) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const hasSubheaders: boolean = headerData.subheaders.length > 0
  const router = useRouter()

  return (
    <>
      <ListItem key={headerData.title} disablePadding>
        <Accordion
          expanded={expanded}
          // Disable routing if header has subheaders
          onClick={() => !hasSubheaders && router.push(headerData.route)}
          onChange={() => {
            if (!expanded && tabSelected !== headerData.title) {
              setTabSelected(headerData.title)
            }

            if (hasSubheaders) {
              setExpanded(!expanded)
            }
          }}
          sx={{
            width: DRAWER_WIDTH,
            boxShadow: 'none',
          }}
        >
          <AccordionSummary
            expandIcon={isSidebarOpen && hasSubheaders && <ArrowDropDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              '& .MuiAccordionSummary-content': {
                justifyContent: isSidebarOpen ? 'normal' : 'center',
              },
              backgroundColor:
                tabSelected == headerData.title
                  ? SELECTED_TAB_COLOR
                  : UNSELECTED_TAB_COLOR,
              width: DRAWER_WIDTH,
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',

                background:
                  tabSelected == headerData.title
                    ? SELECTED_ICON_COLOR
                    : UNSELECTED_ICON_COLOR,

                margin: '0px 10px',
                WebkitMask:
                  'url(/images/sidebar/' +
                  headerData.imgSrc +
                  ') center/contain',
                mask:
                  'url(/images/sidebar/' +
                  headerData.imgSrc +
                  ') center/contain',
              }}
            ></div>

            {isSidebarOpen && (
              <Typography
                fontWeight={700}
                fontSize={14}
                color={
                  tabSelected == headerData.title
                    ? SELECTED_FONT_COLOR
                    : UNSELECTED_FONT_COLOR
                }
                whiteSpace="normal"
              >
                {headerData.title}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              paddingLeft: '0px',
            }}
          >
            {headerData.subheaders.map((subheaderData, index) => {
              return (
                <SubheaderTab
                  key={index}
                  subheaderData={subheaderData}
                  tabSelected={tabSelected}
                  setTabSelected={setTabSelected}
                  parentRoute={headerData.route}
                />
              )
            })}
          </AccordionDetails>
        </Accordion>
      </ListItem>
    </>
  )
}

export {
  SELECTED_TAB_COLOR,
  UNSELECTED_TAB_COLOR,
  SELECTED_FONT_COLOR,
  UNSELECTED_FONT_COLOR,
  SELECTED_ICON_COLOR,
  UNSELECTED_ICON_COLOR,
}
export default memo(HeaderTab)
