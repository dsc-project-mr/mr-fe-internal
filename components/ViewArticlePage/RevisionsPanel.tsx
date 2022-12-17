import { Paper, Typography } from '@mui/material'

const RevisionsPanel = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        height: 165,
        borderRadius: 3,
        marginBottom: '20px',
        padding: '12px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <Typography fontSize={'21px'} fontWeight={700}>
        Number of Revisions:
      </Typography>
      <Typography textAlign={'center'} fontSize={'28px'} fontWeight={400}>
        13
      </Typography>
      <Typography
        textAlign={'right'}
        color="#009DD7"
        sx={{ textDecoration: 'underline' }}
      >
        View Revision History
      </Typography>
    </Paper>
  )
}

export default RevisionsPanel
