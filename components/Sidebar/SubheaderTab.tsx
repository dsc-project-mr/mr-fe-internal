import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  List,
  ListItemButton,
} from '@mui/material'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useState } from 'react'
import { SubheaderData } from 'constants/sidebarData'
import { SELECTED_TAB_COLOR, UNSELECTED_TAB_COLOR } from '.'

const SubheaderTab = ({
  subheaderData,
  tabSelected,
  setTabSelected,
  parentRoute,
}: {
  subheaderData: SubheaderData
  tabSelected: string
  setTabSelected: Dispatch<SetStateAction<string>>
  parentRoute: string
}) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const hasTabs: boolean = subheaderData.tabs.length > 0
  const router = useRouter()

  return (
    <>
      <Accordion
        expanded={expanded}
        onChange={() => {
          if (!expanded && tabSelected !== subheaderData.title) {
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
          '&.MuiPaper-root.Mui-expanded': {
            margin: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={hasTabs && <ChevronRightIcon />}
          // Disable routing if subheader has tabs
          onClick={() =>
            !hasTabs && router.push(parentRoute + subheaderData.route)
          }
          sx={{
            flexDirection: 'row-reverse',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(90deg)',
            },
            backgroundColor:
              tabSelected == subheaderData.title
                ? SELECTED_TAB_COLOR
                : UNSELECTED_TAB_COLOR,
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
    </>
  )
}

export default SubheaderTab
