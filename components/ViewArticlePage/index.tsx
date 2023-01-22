import { Grid, Typography } from '@mui/material'
import { useState } from 'react'
import ArticlePanel from './ArticlePanel'
import ButtonsPanel from './Buttons/ButtonsPanel'
import DetailsPanel from './DetailsPanel'
import ArticleCountPanel, { CountType } from './ArticleCountPanel'
import { useRouter } from 'next/router'
import { ArticleRowData, ARTICLE_ROWS } from 'models/article'
import { ContentState } from 'constants/Content'

const ViewArticlePage = () => {
  // Some code to ping backend for article data

  const router = useRouter()
  const { articlename_id } = router.query
  const [article, setArticle] = useState<ArticleRowData>(ARTICLE_ROWS[0]!)

  return (
    <>
      <Grid
        container
        sx={{
          height: '100%',
          width: '100%',
        }}
      >
        <Grid container item height="90px" alignItems="center">
          <Typography
            fontSize={28}
            letterSpacing={0}
            fontWeight={550}
            color="#00000099"
          >
            View Article
          </Typography>
        </Grid>
        <Grid container item height="50px">
          <Typography fontSize={21} letterSpacing={0} fontWeight={700}>
            Preview of Article
          </Typography>
        </Grid>
        <Grid container item wrap="nowrap">
          <Grid>
            <ArticlePanel
              imageUrl={article.imageUrl}
              contentUrl={article.contentUrl}
            />
          </Grid>
          <Grid width="24px" />
          <Grid width={370}>
            <DetailsPanel
              title={article.title}
              state={article.state}
              createdAt={article.createdAt}
              updatedAt={article.updatedAt}
              author={article.author}
              updatedBy={article.updatedBy}
              version={article.__v}
            />
            <ArticleCountPanel count={13} countType={CountType.REVISION} />
            {article.state !== ContentState.DRAFT && (
              <ArticleCountPanel count={100} countType={CountType.VIEWS} />
            )}
            <ButtonsPanel articleState={article.state} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ViewArticlePage
