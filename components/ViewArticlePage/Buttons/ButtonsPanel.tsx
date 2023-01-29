import { Box } from '@mui/system'
import { ContentState } from 'constants/Content'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import PublishButton from './PublishButton'

const ButtonsPanel = ({
  article_id,
  articleState,
  article_title,
}: {
  article_id: string
  articleState: ContentState
  article_title: string
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
          <ArchiveButton article_id={article_id} />
        ) : (
          <PublishButton
            article_id={article_id}
            article_title={article_title}
          />
        )}
      </Box>
    </>
  )
}

export default ButtonsPanel
