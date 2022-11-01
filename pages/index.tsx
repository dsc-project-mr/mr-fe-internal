import { Button } from '@mui/material'
import FeedbackPopup from 'components/FeedbackPopup'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <FeedbackPopup
        open={open}
        setOpen={setOpen}
        title="Title"
        desc="Description"
        severity="info"
      />
      <h1>Mercy Relief Internal Portal</h1>
      <Button onClick={() => setOpen(!open)}>Popup</Button>
    </div>
  )
}

export default Home
