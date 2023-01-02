import * as React from 'react';
import { Typography, Box, TextField, Stack, Button } from "@mui/material";
import SelectRoleTextField from "./SelectRoleTextField";
import UploadProfileImage from "./UploadProfileImage";
import CreateButton from "./CreateButton";


const CreateNewUserAccount = () => {

    const usernameRef = React.useRef();

    return (
        <Box>
            <Typography variant="h4" sx={styledTitle}>Create New User Account</Typography>
            <Stack spacing={10} sx={styledStack}>
                <UploadProfileImage />
                <TextField id="outlined-basic" label="Name of User" variant="outlined" required inputRef={usernameRef}/>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" required/>
                <SelectRoleTextField />

                <Stack direction="row" spacing={6}>
                    <Button variant="contained">BACK</Button>
                    <CreateButton />
                    <Typography>{usernameRef.current.value}</Typography>
                </Stack>
            </Stack>


        </Box>

    )
}

export default CreateNewUserAccount;

const styledTitle = {
    color: 'rgba(0, 0, 0, 0.6)',
}

const styledStack = {
    marginTop: 10
}
