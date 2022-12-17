import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ArticlePanel from './ArticlePanel'
import DetailsPanel from './DetailsPanel'
import RevisionsPanel from './RevisionsPanel'
import ViewsPanel from './ViewsPanel'

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
      <Grid container item wrap="nowrap">
        <Grid>
          <ArticlePanel />
        </Grid>
        <Grid width="24px" />
        <Grid width={370}>
          <DetailsPanel />
          <RevisionsPanel />
          <ViewsPanel />
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
