import { Box } from '@mui/system'
import { ContentState } from 'constants/Content'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import PublishButton from './PublishButton'

const ButtonsPanel = ({ articleState }: { articleState: ContentState }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <DeleteButton />
        {articleState === ContentState.PUBLISHED ? (
          <ArchiveButton />
        ) : (
          <PublishButton />
        )}
      </Box>
    </>
  )
}

export default ButtonsPanel
