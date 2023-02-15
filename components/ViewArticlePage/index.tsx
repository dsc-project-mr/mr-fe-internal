import { Grid, Typography } from '@mui/material'
import ArticlePanel from './ArticlePanel'
import ButtonsPanel from './Buttons/ButtonsPanel'
import DetailsPanel from './DetailsPanel'
import ArticleCountPanel, { CountType } from './ArticleCountPanel'
import { useRouter } from 'next/router'
import { ContentState } from 'constants/content'
import useGetArticle from 'apis/content/useGetArticle'
import useGetUser from 'apis/user/useGetUser'

const ViewArticlePage = () => {
  const router = useRouter()
  const { articlename_id } = router.query

  const {
    data: article,
    error: getArticleError,
    mutate: refetchArticle,
  } = useGetArticle(router.isReady, articlename_id as string)

  const { data: author, error: getAuthorError } = useGetUser(
    article !== undefined,
    article?.author as string
  )

  const { data: updatedByUser, error: getUpdatedByError } = useGetUser(
    article !== undefined,
    article?.updatedBy as string
  )

  return (
    <>
      {getArticleError ? (
        <div>Error: {getArticleError.message}</div>
      ) : article === undefined ? (
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
                author={getAuthorError ? 'NOT FOUND' : (author?.name as string)}
                updatedBy={
                  getUpdatedByError
                    ? 'NOT FOUND'
                    : (updatedByUser?.name as string)
                }
                version={article.__v}
              />
              <ArticleCountPanel count={13} countType={CountType.REVISION} />
              {article.state !== ContentState.DRAFT && (
                <ArticleCountPanel count={100} countType={CountType.VIEWS} />
              )}
              <ButtonsPanel
                article_id={article.id}
                articleState={article.state}
                article_title={article.title}
                refetchArticle={refetchArticle}
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ViewArticlePage
