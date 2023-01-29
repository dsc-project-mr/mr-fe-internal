import { Grid, Typography } from '@mui/material'
import ArticlePanel from './ArticlePanel'
import ButtonsPanel from './Buttons/ButtonsPanel'
import DetailsPanel from './DetailsPanel'
import ArticleCountPanel, { CountType } from './ArticleCountPanel'
import { useRouter } from 'next/router'
import { ArticleRowData } from 'models/article'
import { ContentState } from 'constants/Content'
import useSWR from 'swr'
import { getArticle } from 'apis/useGetContent'

const ViewArticlePage = () => {
  const router = useRouter()
  const { articlename_id } = router.query

  const { data, error } = useSWR<ArticleRowData>(
    'http://localhost:8000/api/content/article/' + articlename_id,
    getArticle,
    { revalidateOnFocus: false }
  )

  return (
    <>
      {error ? (
        <div>Error: {error}</div>
      ) : !data || data === undefined ? (
        <div>Loading...</div>
      ) : (
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
                imageUrl={data.imageUrl}
                contentUrl={data.contentUrl}
              />
            </Grid>
            <Grid width="24px" />
            <Grid width={370}>
              <DetailsPanel
                title={data.title}
                state={data.state}
                createdAt={data.createdAt}
                updatedAt={data.updatedAt}
                author={data.author}
                updatedBy={data.updatedBy}
                version={data.__v}
              />
              <ArticleCountPanel count={13} countType={CountType.REVISION} />
              {data.state !== ContentState.DRAFT && (
                <ArticleCountPanel count={100} countType={CountType.VIEWS} />
              )}
              <ButtonsPanel
                article_id={data.id}
                articleState={data.state}
                article_title={data.title}
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ViewArticlePage
