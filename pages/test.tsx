import { Button } from '@mui/material'
import type { NextPage } from 'next'
import { useSnackbar } from 'notistack'

const Test: NextPage = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleClick = () => {
    enqueueSnackbar(
      'Success Message Message Message Message Message Message ',
      {
        variant: 'success',
      }
    )
  }

  const handleErrorClick = () => {
    enqueueSnackbar('Error Message Message Message Message Message Message ', {
      variant: 'error',
    })
  }

  return (
    <div>
      <Button onClick={handleClick}>Display success snackbar</Button>
      <Button onClick={handleErrorClick}>Display error snackbar</Button>
      <h2>Mercy Relief Internal Portal</h2>
    </div>
  )
}

export default Test
