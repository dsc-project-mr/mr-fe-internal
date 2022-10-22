import { ExpandMore } from '@mui/icons-material'
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

const SubheaderTab = ({ subheaderData }: { subheaderData: SubheaderData }) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <Fragment>
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        sx={{
          width: '320px',
          boxShadow: 'none',
          borderRadius: 0,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ flexDirection: 'row-reverse' }}
        >
          <Typography sx={{ color: 'text.secondary' }}>
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
