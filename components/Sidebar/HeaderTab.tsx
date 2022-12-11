import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItem,
  Typography,
} from '@mui/material'
import { Dispatch, SetStateAction, memo, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SubheaderTab from './SubheaderTab'
import { SidebarData } from 'constants/sidebarData'
import { useRouter } from 'next/router'
import { SELECTED_TAB_COLOR, UNSELECTED_TAB_COLOR } from '.'

const HeaderTab = ({
  headerData,
  tabSelected,
  setTabSelected,
}: {
  headerData: SidebarData
  tabSelected: string
  setTabSelected: Dispatch<SetStateAction<string>>
}) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const hasSubheaders: boolean = headerData.subheaders.length > 0
  const router = useRouter()
  // Being re-rendered twice, even on opening and closing, not sure why
  // console.log('Rendered')

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
                tabSelected == headerData.title
                  ? SELECTED_TAB_COLOR
                  : UNSELECTED_TAB_COLOR,
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

export default memo(HeaderTab)
