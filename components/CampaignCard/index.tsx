import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import { Box, Grid } from '@mui/material'

import { CampaignStatus } from 'constants/campaign'
import { Campaign } from 'models/campaign'
import Link from 'next/link'
import React from 'react'

const styledmainbox = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  backgroundColor: '#EAF9FF',
  width: '100%',
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
  campaign: Campaign
}

const CampaignCard = ({ campaign }: Props) => {
  const { id, name, details, donors, amount, country, status } = campaign
  return (
    <Grid>
      <Link href={'/campaigns/' + id} passHref legacyBehavior>
        <Box sx={styledmainbox}>
          <Box sx={styledmainbody}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                height: '60px',
                margin: '15x 0px 15px 0px',
              }}
            >
              <h5 style={{ color: '#009DD7', fontWeight: '500' }}>{name}</h5>
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
                height: '60px',
                margin: '15x 0px 15px 0px',
              }}
            >
              <p style={styledoverview}>{details}</p>
              <h6
                style={{
                  color: campaignStateColor[status],
                  marginLeft: 50,
                }}
              >
                {status}
              </h6>
            </div>
          </Box>
          <Box sx={styledcontentbox}>{details}</Box>
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
    </Grid>
  )
}

export default CampaignCard
