import { TableCell, TableRow } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useRouter } from 'next/router'
import { ContentState } from 'constants/Content'

const ArticleRow = ({
  labelId,
  title,
  createdAt,
  updatedAt,
  state,
  id,
}: {
  labelId: string
  title: string
  createdAt: Date
  updatedAt: Date
  state: ContentState
  id: string
}) => {
  const router = useRouter()
  return (
    <TableRow
      hover
      role="row"
      tabIndex={-1}
      key={title}
      sx={{
        '&:hover': {
          backgroundColor: '#1976D214 !important',
        },
      }}
    >
      <TableCell
        component="th"
        id={labelId}
        scope="row"
        style={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          maxWidth: '200px',
          overflow: 'hidden',
        }}
      >
        {title}
      </TableCell>
      <TableCell align="left">{createdAt.toLocaleDateString()}</TableCell>
      <TableCell align="left">{updatedAt.toLocaleDateString()}</TableCell>
      <TableCell align="left">{state}</TableCell>
      <TableCell
        align="left"
        onClick={() => router.push(`/content/articles/${title}_${id}`)}
      >
        <KeyboardArrowRightIcon
          sx={{
            cursor: 'pointer',
          }}
        />
      </TableCell>
    </TableRow>
  )
}

export default ArticleRow
