import * as React from 'react';
import { Typography, Box, TextField, Stack, Button } from "@mui/material";
import SelectRoleTextField from "../../components/CreateNewUserAccount/SelectRoleTextField";
import UploadProfileImage from "../../components/CreateNewUserAccount/UploadProfileImage";
import CreateButton from "../../components/CreateNewUserAccount/CreateButton";


const CreateNewUserAccount = () => {

    const [inputValue, setInputValue] = React.useState(null);

    //const usernameRef = React.useRef<HTMLInputElement>(null);

    // const handleChange = (e) => {
    //     console.log(`Typed : ${e.target.value}`);
    //     setInputValue(e.target.value);
    // }

    return (
        <Box>
            <Typography variant="h4" sx={styledTitle}>Create New User Account</Typography>
            <Stack spacing={10} sx={styledStack}>
                <UploadProfileImage />
                <TextField id="outlined-basic" label="Name of User" variant="outlined" required value={inputValue}/>
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

