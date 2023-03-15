import { TableCell, TableRow } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useRouter } from 'next/router'
import { ArticleRowData } from 'models/article'

const ArticleRow = ({
  labelId,
  article,
}: {
  labelId: string
  article: ArticleRowData
}) => {
  const router = useRouter()

  const { title, createdAt, updatedAt, state, id } = article

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
