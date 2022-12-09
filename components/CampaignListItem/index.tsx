import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import { Box} from '@mui/material'

const styledmainbox = {
  display: 'flex',
  flexDirection: 'column',
  width: '1070px',
  height: '100%',
  padding: '10px',
  backgroundColor: '#EAF9FF',
}

const styledmainbody = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0px 20px 0px 20px',
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

type Props = {
  CampaignName: String
  CampaignDetails: String
  Donors: Number
  Amount: Number
  Country: String
  Published: Boolean
}

const CampaignListItem = ({
  CampaignName,
  CampaignDetails,
  Donors,
  Amount,
  Country,
  Published,
}: Props) => {
  return (
    <Box sx={styledmainbox}>
      <Box sx={styledmainbody} className="main-body">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <h3 style={{ color: '#009DD7' }}>{CampaignName}</h3>
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
          }}
        >
          <p>{CampaignDetails}</p>
          <h4
            style={{
              color: Published ? '#16A64A' : '#C7043D',
            }}
          >
            {Published ? 'Published' : 'Draft'}
          </h4>
        </div>
      </Box>
      <Box sx={styledbottombox}>
        <div style={styledbottomitems}>
          <p>Donors:</p>&nbsp;
          <p style={styledinput}> {Donors.toString()}</p>
        </div>
        <div style={styledbottomitems}>
          <p>Total Amount Received: </p>&nbsp;
          <p style={styledinput}>S${Amount.toString()}</p>
        </div>
        <div style={styledbottomitems}>
          <p>Country: </p>&nbsp;
          <p style={styledinput}>{Country}</p>
        </div>
      </Box>
    </Box>
  )
}

export default CampaignListItem
