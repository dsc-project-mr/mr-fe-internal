import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import { Box, Typography } from '@mui/material'
import { DRAWER_WIDTH } from 'components/Sidebar'

import { CampaignStatus } from 'constants/Campaign'
import { Campaign } from 'models/campaign'
import React from 'react'

const styledmainbox = {
  padding: '10px',
  backgroundColor: '#EAF9FF',
}

const styledmainbody = {
  padding: '0px 20px',
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
  const { name, details, donors, amount, country, status } = campaign
  return (
    <Box sx={styledmainbox}>
      <Box sx={styledmainbody}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            height: '60px',
            margin: '15x 0px 15px 0px',
          }}
        >
          <Typography variant="h5" color="#009DD7">
            {name}
          </Typography>
          <ArchiveOutlinedIcon
            sx={{
              color: '#009DD7',
              fontSize: '2.5rem',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            height: '60px',
          }}
        >
          <Box
            sx={{
              width: `calc(100vw - ${DRAWER_WIDTH}px - 18px - 48px - 20px - 40px - 80px)`,
            }}
          >
            <Typography noWrap>{details}</Typography>
          </Box>

          <Typography color={campaignStateColor[status]} variant="h6">
            {status}
          </Typography>
        </Box>
      </Box>
      <Box sx={styledcontentbox}>{details}</Box>
      <Box sx={styledbottombox}>
        <Box style={styledbottomitems}>
          <Typography>Donors:&nbsp;</Typography>
          <Typography sx={styledinput}>{donors.toString()}</Typography>
        </Box>
        <Box style={styledbottomitems}>
          <Typography>Total Amount Received:&nbsp;</Typography>
          <Typography sx={styledinput}>${amount.toString()}</Typography>
        </Box>
        <Box style={styledbottomitems}>
          <Typography>Country:&nbsp;</Typography>
          <Typography sx={styledinput}>{country}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CampaignCard
