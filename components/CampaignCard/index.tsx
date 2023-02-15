import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Box, Grid } from '@mui/material'

import { CampaignStatus } from 'constants/campaign'
import { Campaign } from 'models/campaign'
import React from 'react'
import Image from 'next/image'

const styledmainbox = {
  padding: '10px',
  backgroundColor: '#EAF9FF',
  width: '100%',
}

const styledmainbody = {
  padding: '0px 20px',
}

const styledcontentbox = {
  display: 'flex',
  flexDirection: 'column',
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
  alignItems: 'center',
}

const styledinput = {
  fontSize: '15',
  fontWeight: '700',
}

const campaignStateColor = {
  [CampaignStatus.PUBLISHED]: '#16A64A',
  [CampaignStatus.DRAFT]: '#C7043D',
  [CampaignStatus.ARCHIVED]: '#641869',
}

interface Props {
  campaign: Campaign
}

const CampaignCard = ({ campaign }: Props) => {
  return (
    <Grid alignItems={'center'}>
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
            <h5 style={{ color: '#009DD7', fontWeight: '500' }}>
              {campaign?.name}
            </h5>
            <div>
              <EditOutlinedIcon
                sx={{
                  color: '#009DD7',
                  fontSize: '2.5rem',
                  margin: '0px 10px',
                }}
              />
              <ArchiveOutlinedIcon
                sx={{
                  color: '#009DD7',
                  fontSize: '2.5rem',
                  margin: '0px 10px',
                }}
              />
            </div>
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
            <p>{'details'}</p>
            <h6
              style={{
                color: campaignStateColor[campaign.state],
                marginLeft: 50,
              }}
            >
              {campaign?.state}
            </h6>
          </div>
        </Box>
        <Box sx={styledcontentbox}>
          <Box width="100%" height="200px" position="relative">
            <Image
              layout="fill"
              objectFit="contain"
              src={campaign.imageUrl}
              alt=""
            />
          </Box>
          <div>{campaign.details}</div>
        </Box>
        <Box sx={styledbottombox}>
          <div style={styledbottomitems}>
            <p>Donors:</p>&nbsp;
            <p style={styledinput}> {campaign.donors.toString()}</p>
          </div>
          <div style={styledbottomitems}>
            <p>Total Amount Received: </p>&nbsp;
            <p style={styledinput}>${campaign.amount.toString()}</p>
          </div>
          <div style={styledbottomitems}>
            <p>Country: </p>&nbsp;
            <p style={styledinput}>{campaign.country}</p>
          </div>
        </Box>
      </Box>
    </Grid>
  )
}

export default CampaignCard
