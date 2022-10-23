import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItem,
  Typography,
} from '@mui/material'
import React, { Fragment, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SubheaderTab from './SubheaderTab'
import { SidebarData } from './sidebar_data'

const HeaderTab = ({
  headerData,
  tabSelected,
  setTabSelected,
}: {
  headerData: SidebarData
  tabSelected: string
  setTabSelected: Function
}) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const hasSubheaders: boolean = headerData.subheaders.length > 0

  // Being re-rendered twice, even on opening and closing, not sure why
  // console.log('Rendered')

  return (
    <Fragment>
      <ListItem key={headerData.title} disablePadding>
        <Accordion
          expanded={expanded}
          onChange={() => {
            if (!expanded && tabSelected != headerData.title) {
              setTabSelected(headerData.title)
            }

            if (hasSubheaders) {
              setExpanded(!expanded)
            }
          }}
          sx={{
            width: '320px',
            boxShadow: 'none',
            borderRadius: 0,
          }}
        >
          <AccordionSummary
            expandIcon={hasSubheaders && <ArrowDropDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              '&.MuiButtonBase-root.MuiAccordionSummary-root': {
                cursor: hasSubheaders ? 'pointer' : 'default',
              },
              '&.MuiButtonBase-root.MuiAccordionSummary-root:hover': {
                cursor: hasSubheaders ? 'pointer' : 'default',
              },
              backgroundColor:
                tabSelected == headerData.title ? '#E8EAEC' : 'white',
            }}
          >
            <Typography
              sx={{
                color: 'text.primary',
              }}
            >
              {headerData.title}
            </Typography>
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
                />
              )
            })}
          </AccordionDetails>
        </Accordion>
      </ListItem>
    </Fragment>
  )
}

export default HeaderTab
