import { Grid, Typography } from '@mui/material'
import { useState } from 'react'
import ArticlePanel from './ArticlePanel'
import ButtonsPanel from './Buttons/ButtonsPanel'
import DetailsPanel from './DetailsPanel'
import ArticleCountPanel, { CountType } from './ArticleCountPanel'
import { CampaignStatus } from 'constants/campaign'

const ViewArticlePage = () => {
  // Some code to ping backend for article data

  const [articleType, setArticleType] = useState<CampaignStatus>(
    CampaignStatus.DRAFT
  )

  return (
    <>
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
            <ArticleCountPanel count={13} countType={CountType.REVISION} />
            {!(articleType == CampaignStatus.DRAFT) && (
              <ArticleCountPanel count={100} countType={CountType.VIEWS} />
            )}
            <ButtonsPanel articleType={articleType} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ViewArticlePage
