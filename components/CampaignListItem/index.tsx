import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import { Box } from '@mui/material'

import { CampaignStatus } from 'constants/campaign'
import Link from 'next/link'
import React from 'react'

const styledmainbox = {
  display: 'flex',
  flexDirection: 'column',
  width: '30%',
  height: '70%',
  padding: '10px',
  backgroundColor: '#EAF9FF',
  marginTop: 10,
}

const styledmainbody = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0px 20px 0px 20px',
}

const styledcontentbox = {
  display: 'flex',
  height: '300px',
  backgroundColor: '#D9D9D9',
  padding: '15px',
}

const styledbottombox = {
  display: 'flex',
  flex: 'auto',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '67px',
  backgroundColor: '#FFFFFF',
  padding: '0px 20px 0px 20px',
}

const styledbottomitems = {
  display: 'flex',
}

const styledinput = {
  fontSize: '15',
  fontWeight: '700',
}

const styledoverview = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
} as React.CSSProperties

const campaignStateColor = {
  [CampaignStatus.PUBLISHED]: '#16A64A',
  [CampaignStatus.DRAFT]: '#C7043D',
  [CampaignStatus.ARCHIVED]: '#641869',
}

interface Props {
  id: number
  campaignName: string
  campaignDetails: string
  donors: number
  amount: number
  country: string
  campaignStatus: CampaignStatus
  viewAll: boolean
}

const CampaignListItem = ({
  id,
  campaignName,
  campaignDetails,
  donors,
  amount,
  country,
  campaignStatus,
  viewAll,
}: Props) => {
  return (
    <Link href={'/campaigns/' + id} passHref legacyBehavior>
      <Box sx={styledmainbox}>
        <Box sx={styledmainbody}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <h3 style={{ color: '#009DD7' }}>{campaignName}</h3>
            <ArchiveOutlinedIcon
              sx={{
                color: '#009DD7',
                fontSize: '2.5rem',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <p style={styledoverview}>{campaignDetails}</p>
            <h4
              style={{
                color: campaignStateColor[campaignStatus],
                marginLeft: 50,
              }}
            >
              {campaignStatus}
            </h4>
          </div>
        </Box>
        {viewAll && <Box sx={styledcontentbox}>{campaignDetails}</Box>}
        <Box sx={styledbottombox}>
          <div style={styledbottomitems}>
            <p>Donors:</p>&nbsp;
            <p style={styledinput}> {donors.toString()}</p>
          </div>
          <div style={styledbottomitems}>
            <p>Total Amount Received: </p>&nbsp;
            <p style={styledinput}>${amount.toString()}</p>
          </div>
          <div style={styledbottomitems}>
            <p>Country: </p>&nbsp;
            <p style={styledinput}>{country}</p>
          </div>
        </Box>
      </Box>
    </Link>
  )
}

export default CampaignListItem
