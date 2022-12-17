import { Box } from '@mui/system'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import PublishButton from './PublishButton'

const ButtonsPanel = ({ articleType }: { articleType: string }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          textTransform: 'uppercase',
        }}
      >
        <DeleteButton />
        {articleType == 'Published' ? <ArchiveButton /> : <PublishButton />}
      </Box>
    </>
  )
}

export default ButtonsPanel
