import * as React from 'react';
import { Typography, Box, TextField, Stack, Button } from "@mui/material";
import SelectRoleTextField from "../../components/CreateNewUserAccount/SelectRoleTextField";
import UploadProfileImage from "../../components/CreateNewUserAccount/UploadProfileImage";
import CreateButton from "../../components/CreateNewUserAccount/CreateButton";

const CreateNewUserAccount = () => {
    const [name, setName] = React.useState('');

    // the submitName handler is for POST 
    const submitName = async () => {
        const response = await fetch('process.env.NEXT_PUBLIC_API_URL/user', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json();
        console.log(data);
    }

    return (
        <Box>
            <Typography variant="h4" sx={styledTitle}>Create New User Account</Typography>
            <Stack spacing={10} sx={styledStack}>
                <UploadProfileImage />
                <TextField id="outlined-basic" label="Name of User" variant="outlined" required onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" required/>
                <SelectRoleTextField />

                <Stack direction="row" spacing={6}>
                    <Button variant="contained">BACK</Button>
                    <CreateButton />
                </Stack>
            </Stack>
        </Box>

    )
}

export default CreateNewUserAccount;

const styledTitle = {
    color: 'rgba(0, 0, 0, 0.6)',
    paddingTop: 8
}

const styledStack = {
    marginTop: 5
}

