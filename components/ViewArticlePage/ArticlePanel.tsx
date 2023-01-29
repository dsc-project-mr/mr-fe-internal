import { Box } from '@mui/system'
import EditIcon from 'public/images/articles/edit_icon.png'
const ArticlePanel = ({
  imageUrl,
  contentUrl,
}: {
  imageUrl: string
  contentUrl: string
}) => {
  const openInNewTab = (url: string) => {
    if (url === null || url === undefined) {
      return
    }
    window.open(url, '_blank', 'noreferrer')
  }

  return (
    <Box
      sx={{
        backgroundColor: '#F3F4F6',
        width: 665,
        height: 835,
        borderRadius: 2,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        width="44px"
        height="44px"
        sx={{
          backgroundColor: '#023F84',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: '15px',
          right: '15px',
          boxShadow:
            '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);',
          cursor: 'pointer',
        }}
      >
        <Box
          component="img"
          src={EditIcon.src}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: 32,
          }}
        />
      </Box>
      <Box
        component="img"
        src={imageUrl}
        width="100%"
        onClick={() => openInNewTab(contentUrl)}
        sx={{
          cursor: contentUrl ? 'pointer' : 'default',
        }}
      />
    </Box>
  )
}

export default ArticlePanel
