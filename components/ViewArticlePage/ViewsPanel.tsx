import { Paper, Typography } from '@mui/material'

const ViewsPanel = ({ viewCount }: { viewCount: number }) => {
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
        Number of Views:
      </Typography>
      <Typography textAlign={'center'} fontSize={'28px'} fontWeight={400}>
        {viewCount}
      </Typography>
      <Typography
        textAlign={'right'}
        color="#009DD7"
        sx={{ textDecoration: 'underline' }}
      >
        View Visitor&apos;s History
      </Typography>
    </Paper>
  )
}

export default ViewsPanel
