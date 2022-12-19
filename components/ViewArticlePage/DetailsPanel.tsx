import { Paper, Typography } from '@mui/material'

const DetailSegment = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      <Typography fontSize="12px" fontWeight={300}>
        {title}
      </Typography>
      <Typography fontSize="16px" fontWeight={400} marginBottom="2px">
        {desc}
      </Typography>
    </>
  )
}

const DetailsPanel = () => {
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

      <DetailSegment
        title="Article Name:"
        desc="What we have done for the past two years?"
      />
      <DetailSegment title="Status:" desc="Published" />
      <DetailSegment title="Date of Creation: " desc="10 Sep 2022 09:00" />
      <DetailSegment title="Author: " desc="Jane Doe (Article Editor)" />
      <DetailSegment title="Last Modified On: " desc="12 Sep 2022 13:00" />
      <DetailSegment title="Last Modified By: " desc="John Doe (Super Admin)" />
      <DetailSegment title="Version: " desc="9.0.0" />
    </Paper>
  )
}

export default DetailsPanel
