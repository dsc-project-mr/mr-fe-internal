import { Typography, Box, TextField, Stack } from "@mui/material";
import SelectRoleTextField from "./SelectRoleTextField";

const CreateNewUserAccount = () => {
    return (
        <Box>
            <Typography variant="h4" sx={styledTitle}>Create New User Account</Typography>
            <Stack spacing={10} sx={styledStack}>
                <TextField id="outlined-basic" label="Name of User" variant="outlined" required/>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" required/>
                <SelectRoleTextField />
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
