import ExpandMore from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ReactNode } from 'react'

export interface FilterContainerProps {
  title: string
  children: ReactNode
}

export function FilterContainer({ title, children }: FilterContainerProps) {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        borderTop: `1px solid rgba(0, 0, 0, 0.12)`,
        '&:before': { backgroundColor: 'unset' }, // remove another border
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>{title}</AccordionSummary>
      <AccordionDetails
        sx={{
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  )
}
