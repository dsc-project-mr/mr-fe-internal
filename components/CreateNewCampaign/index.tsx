import * as React from 'react';
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useState } from "react";

const CreateNewCampaign = () => {
    // const[value, setValue] = useState<DateRange<Date>>([null, null]);
    const[startDate, setStartDate] = useState(null);
    const[endDate, setEndDate] = useState(null);

    return (
        <Box sx={styledMainBox}>
            <Typography variant="h3" gutterBottom sx={styledCreateNewCampaign}>Create New Campaign</Typography>
            <Typography variant="h4" gutterBottom sx={styledNameOfCampaign}>Name of campaign</Typography>
            <TextField id="outlined-basic"  variant="outlined" placeholder="Enter name" />
            <Typography variant="h4" gutterBottom sx={styledh4}>Message</Typography>
            <TextField id="outlined-basic" variant="outlined" placeholder="Enter message" multiline rows={10}/>
            <Typography variant="h4" gutterBottom sx={styledh4}>Duration</Typography>
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
                    setStartDate(newValue);
                    }}
                />
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="End date"
                    disablePast
                    value={endDate}
                    onChange={(newValue) => {
                    setEndDate(newValue);
                    }}
                />
            </Box>
            <Typography variant="h4" gutterBottom sx={styledh4}>Upload Media</Typography>
            </LocalizationProvider>          
        </Box>
    )
}
export default CreateNewCampaign;

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
    lineHeight: '40px',
}

const styledNameOfCampaign = {
    fontWeight: '700',
    fontSize: '21px',
    lineHeight: '40px',
}


const styledh4 = {
    fontWeight: '700',
    fontSize: '21px',
    lineHeight: '40px',
    marginTop: '1rem'
}

const styledDateBox = {
    display: 'flex',
    gap: '30px',
}

