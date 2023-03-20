import * as React from 'react'
import {
  TextField,
  Typography,
  Box,
  Grid,
  Button,
  IconButton,
  Stack,
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers'
import { useState } from 'react'
import UploadMedia from '../../../components/CreateNewCampaign/UploadMedia'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'

const CreateNewCampaign = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [isEndless, setIsEndless] = useState(false)

  return (
    <Box sx={styledMainBox}>
      <Box sx={styledTitleBox}>
        <Typography variant="h4" gutterBottom sx={styledCreateNewCampaign}>
          {' '}
          Edit Campaign{' '}
        </Typography>
        <Box sx={styledPreviewBox}>
          <Stack direction="row" sx={styledStack}>
            <IconButton>
              {' '}
              <VisibilityIcon />{' '}
            </IconButton>
            <Typography sx={styledText} gutterBottom>
              {' '}
              PREVIEW
            </Typography>
          </Stack>
          <Stack direction="row" sx={styledStack}>
            <IconButton>
              {' '}
              <EditIcon />{' '}
            </IconButton>
            <Typography sx={styledText} gutterBottom>
              {' '}
              SAVE DRAFT
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom sx={styledNameOfCampaign}>
        {' '}
        Name of campaign{' '}
      </Typography>
      <TextField
        id="outlined-required"
        variant="outlined"
        placeholder="Campaign name"
        required
        label="Enter name"
      />
      <Typography variant="h6" gutterBottom sx={styledh4}>
        {' '}
        Message{' '}
      </Typography>
      <TextField
        id="outlined-required"
        variant="outlined"
        placeholder="Your message"
        required
        label="Enter message"
        multiline
        rows={7}
      />
      <Typography variant="h6" gutterBottom sx={styledh4}>
        {' '}
        Duration{' '}
      </Typography>
      <FormControlLabel
        sx={styledCheckbox}
        control={
          <Checkbox
            onChange={(e) => {
              setIsEndless(e.target.checked)
              if (e.target.checked) {
                setEndDate(null)
              }
            }}
          />
        }
        label="No End Date"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={styledDateBox}>
          <DatePicker
            label="Start Date"
            value={startDate}
            disablePast
            onChange={(newValue) => {
              setStartDate(newValue)
            }}
            renderInput={(params) => (
              <TextField sx={styledDateTextBox} {...params} required />
            )}
          />
          {!isEndless && (
            <DatePicker
              label="End Date"
              value={endDate}
              disablePast
              onChange={(newValue) => {
                setEndDate(newValue)
              }}
              renderInput={(params) => (
                <TextField sx={styledDateTextBox} {...params} required />
              )}
            />
          )}
        </Box>
      </LocalizationProvider>

      <Typography variant="h6" gutterBottom sx={styledh4}>
        {' '}
        Upload Media{' '}
      </Typography>
      <UploadMedia />
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            sx={styledButton}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={styledButton}
          >
            Publish
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CreateNewCampaign

const styledMainBox = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '10px',
  backgroundColor: '',
}

const styledTitleBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const styledPreviewBox = {
  display: 'flex',
  gap: '20px',
  paddingTop: '8px',
}

const styledText = {
  fontSize: '14px',
  fontWeight: '500',
}

const styledStack = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const styledCreateNewCampaign = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  fontWeight: '700',
  fontSize: '28px',
  paddingTop: '10px',
}

const styledNameOfCampaign = {
  fontWeight: '700',
  fontSize: '21px',
}

const styledh4 = {
  fontWeight: '700',
  fontSize: '21px',
  marginTop: '1rem',
}

const styledDateBox = {
  width: '100%',
  display: 'flex',
  gap: '30px',
}

const styledButton = {
  marginTop: '20px',
  marginLeft: '10px',
}

const styledDateTextBox = {
  width: '100%',
}

const styledCheckbox = {
  margin: '10px 0px',
}
