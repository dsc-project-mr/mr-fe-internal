import { Button, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

const ViewArticlePage = () => {
  return (
    <Grid
      container
      sx={{
        height: '100vh',
        width: '100%',
      }}
    >
      <Grid container item height={'80px'} alignItems={'center'}>
        <Typography
          fontSize={28}
          letterSpacing={0}
          fontWeight={550}
          color="#00000099"
        >
          View Article
        </Typography>
      </Grid>
      <Typography
        fontSize={21}
        letterSpacing={0}
        fontWeight={700}
        height={'50px'}
        alignItems={'center'}
      >
        Preview of Article
      </Typography>
      <Grid container item>
        <Grid>
          <Box
            sx={{
              backgroundColor: '#F3F4F6',
              width: 665,
              height: 770,
              borderRadius: 2,
            }}
          ></Box>
        </Grid>
        <Grid width="24px" />
        <Grid spacing={2}>
          <Paper
            elevation={2}
            sx={{
              width: 370,
              height: 360,
              borderRadius: 3,
              marginBottom: '20px',
              padding: '24px',
            }}
          >
            <Typography fontSize={'21px'} fontWeight={700}>
              Details
            </Typography>
            <Typography fontSize={'12px'} fontWeight={300}>
              Article Name:
            </Typography>
            <Typography fontSize={'16px'} fontWeight={400}>
              What we have done for the past two years?
            </Typography>
          </Paper>
          <Paper
            elevation={2}
            sx={{
              width: 370,
              height: 160,
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
          <Paper
            elevation={2}
            sx={{
              width: 370,
              height: 160,
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
              100
            </Typography>
            <Typography
              textAlign={'right'}
              color="#009DD7"
              sx={{ textDecoration: 'underline' }}
            >
              View Visitor&apos;s History
            </Typography>
          </Paper>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Button variant="outlined">DELETE</Button>
            <Button variant="contained">ARCHIVED</Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ViewArticlePage
