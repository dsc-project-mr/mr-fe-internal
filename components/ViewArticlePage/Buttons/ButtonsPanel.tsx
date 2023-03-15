import { Box } from '@mui/system'
import { ContentState } from 'constants/content'
import { Article } from 'models/article'
import { KeyedMutator } from 'swr'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import PublishButton from './PublishButton'

const ButtonsPanel = ({
  article_id,
  articleState,
  article_title,
  refetchArticle,
}: {
  article_id: string
  articleState: ContentState
  article_title: string
  refetchArticle: KeyedMutator<Article>
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <DeleteButton article_id={article_id} />
        {articleState === ContentState.PUBLISHED ? (
          <ArchiveButton
            article_id={article_id}
            refetchArticle={refetchArticle}
          />
        ) : (
          <PublishButton
            article_id={article_id}
            article_title={article_title}
            refetchArticle={refetchArticle}
          />
        )}
      </Box>
    </>
  )
}

export default ButtonsPanel
