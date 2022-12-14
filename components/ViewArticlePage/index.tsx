import { Button, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

const ViewArticlePage = () => {
  return (
    <Grid
      container
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <Grid container item height={'90px'} alignItems={'center'}>
        <Typography
          fontSize={28}
          letterSpacing={0}
          fontWeight={550}
          color="#00000099"
        >
          View Article
        </Typography>
      </Grid>
      <Grid container item height={'50px'}>
        <Typography fontSize={21} letterSpacing={0} fontWeight={700}>
          Preview of Article
        </Typography>
      </Grid>
      <Grid container item>
        <Grid>
          <Box
            sx={{
              backgroundColor: '#F3F4F6',
              width: 665,
              height: 800,
              borderRadius: 2,
              position: 'relative',
            }}
          >
            <Box
              width={'44px'}
              height={'44px'}
              sx={{
                backgroundColor: '#023F84',
                color: 'white',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '15px',
                right: '15px',
                boxShadow:
                  '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);',
                cursor: 'pointer',
              }}
            >
              <Box
                component="img"
                src="images/edit_icon.png"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: 32,
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid width="24px" />
        <Grid width={370}>
          <Paper
            elevation={2}
            sx={{
              height: 400,
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
