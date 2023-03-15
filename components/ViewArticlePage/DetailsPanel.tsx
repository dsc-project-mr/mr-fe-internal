import { Paper, Typography } from '@mui/material'
import { ContentState } from 'constants/Content'

const DetailSegment = ({
  header,
  desc,
}: {
  header: string
  desc: string | number
}) => {
  return (
    <>
      <Typography fontSize="12px" fontWeight={300}>
        {header}
      </Typography>
      <Typography fontSize="16px" fontWeight={400} marginBottom="2px">
        {desc}
      </Typography>
    </>
  )
}

const DetailsPanel = ({
  title,
  state,
  createdAt,
  updatedAt,
  author,
  updatedBy,
  version,
}: {
  title: string
  author: string
  updatedBy: string
  state: ContentState
  createdAt: Date
  updatedAt: Date
  version: number
}) => {
  return (
    <Paper
      elevation={2}
      sx={{
        height: 410,
        borderRadius: 3,
        marginBottom: '20px',
        padding: '24px',
      }}
    >
      <Typography fontSize="21px" fontWeight={700} marginBottom="10px">
        Details
      </Typography>

      <DetailSegment header="Article Name:" desc={title} />
      <DetailSegment header="Status:" desc={state} />
      <DetailSegment
        header="Date of Creation: "
        desc={createdAt.toDateString()}
      />
      <DetailSegment header="Author: " desc={author} />
      <DetailSegment
        header="Last Modified On: "
        desc={updatedAt.toDateString()}
      />
      <DetailSegment header="Last Modified By: " desc={updatedBy} />
      <DetailSegment header="Version: " desc={version} />
    </Paper>
  )
}

export default DetailsPanel
