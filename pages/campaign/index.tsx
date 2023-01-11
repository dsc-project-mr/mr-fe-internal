import * as React from 'react';
import { TextField, Typography, Box, Grid, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useState } from "react";
import UploadMedia from '../../components/CreateNewCampaign/UploadMedia';

const CreateNewCampaign = () => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
  
    return (
      <Box sx={styledMainBox}>
        <Typography variant="h4" gutterBottom sx={styledCreateNewCampaign}>
          Create New Campaign
        </Typography>
        <Typography variant="h6" gutterBottom sx={styledNameOfCampaign}>
          Name of campaign
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter name"
        />
        <Typography variant="h6" gutterBottom sx={styledh4}>
          Message
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter message"
          multiline
          rows={7}
        />
        <Typography variant="h6" gutterBottom sx={styledh4}>
          Duration
        </Typography>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          localeText={{ start: 'Start date', end: 'End date' }}
        >
          <Box sx={styledDateBox}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Start date"
              disablePast
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue)
              }}
            />
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="End date"
              disablePast
              value={endDate}
              onChange={(newValue) => {
                setEndDate(newValue)
              }}
            />
          </Box>
          <Typography variant="h6" gutterBottom sx={styledh4}>
            Upload Media
          </Typography>
        </LocalizationProvider>
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
              Submit
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
  }
  
  const styledh4 = {
    fontWeight: '700',
    marginTop: '1rem',
  }
  
  const styledDateBox = {
    display: 'flex',
    gap: '30px',
  }

  const styledButton = {
    marginTop: '20px',
    marginLeft: '10px',
  }
  