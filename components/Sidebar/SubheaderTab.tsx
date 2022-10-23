import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  List,
  ListItemButton,
} from '@mui/material'
import React, { Fragment, useState } from 'react'
import { SubheaderData } from './sidebar_data'

const SubheaderTab = ({
  subheaderData,
  tabSelected,
  setTabSelected,
}: {
  subheaderData: SubheaderData
  tabSelected: string
  setTabSelected: Function
}) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const hasTabs: boolean = subheaderData.tabs.length > 0

  return (
    <Fragment>
      <Accordion
        expanded={expanded}
        onChange={() => {
          if (!expanded && tabSelected != subheaderData.title) {
            setTabSelected(subheaderData.title)
          }

          if (hasTabs) {
            setExpanded(!expanded)
          }
        }}
        sx={{
          width: '320px',
          boxShadow: 'none',
          borderRadius: 0,
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={hasTabs && <ChevronRightIcon />}
          sx={{
            flexDirection: 'row-reverse',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(90deg)',
            },
            backgroundColor:
              tabSelected == subheaderData.title ? '#E8EAEC' : 'white',
          }}
        >
          <Typography
            sx={{
              color: 'text.primary',
              position: 'relative',
              left: '30px',
            }}
          >
            {subheaderData.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {subheaderData.tabs.map((tab, index) => {
              return <ListItemButton key={index}>{tab}</ListItemButton>
            })}
          </List>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  )
}

export default SubheaderTab