import { Box } from '@mui/system'
import EditIcon from 'public/images/edit_icon.png'
const ArticlePanel = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F3F4F6',
        width: 665,
        height: 835,
        borderRadius: 2,
        position: 'relative',
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
    </Box>
  )
}

export default ArticlePanel
