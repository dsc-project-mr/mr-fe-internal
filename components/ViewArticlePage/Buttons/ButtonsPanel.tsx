import { Box } from '@mui/system'
import { ContentState } from 'constants/Content'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import PublishButton from './PublishButton'

const ButtonsPanel = ({
  articleState,
  article_id,
}: {
  articleState: ContentState
  article_id: string
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
          <PublishButton article_id={article_id} />
        )}
      </Box>
    </>
  )
}

export default ButtonsPanel
