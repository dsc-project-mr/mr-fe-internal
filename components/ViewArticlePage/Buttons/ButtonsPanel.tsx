import { Box } from '@mui/system'
import { CampaignStatus } from 'constants/campaign'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import PublishButton from './PublishButton'

const ButtonsPanel = ({ articleType }: { articleType: CampaignStatus }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <DeleteButton />
        {articleType === CampaignStatus.PUBLISHED ? (
          <ArchiveButton />
        ) : (
          <PublishButton />
        )}
      </Box>
    </>
  )
}

export default ButtonsPanel
