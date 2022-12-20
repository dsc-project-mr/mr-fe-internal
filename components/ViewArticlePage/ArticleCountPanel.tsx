import { Paper, Typography } from '@mui/material'

export enum CountType {
  REVISION = 'Revisions',
  VIEWS = 'Views',
}

const ArticleCountPanel = ({
  count,
  countType,
}: {
  count: number
  countType: CountType
}) => {
  return (
    <Paper
      elevation={2}
      sx={{
        height: 165,
        borderRadius: 3,
        marginBottom: '20px',
        padding: '12px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <Typography fontSize="21px" fontWeight={700}>
        Number of {countType}:
      </Typography>
      <Typography textAlign="center" fontSize="28px" fontWeight={400}>
        {count}
      </Typography>
      <Typography
        textAlign="right"
        color="#009DD7"
        sx={{ textDecoration: 'underline' }}
      >
        View {countType === CountType.REVISION ? 'Revision ' : "Visitor's "}
        History
      </Typography>
    </Paper>
  )
}

export default ArticleCountPanel
