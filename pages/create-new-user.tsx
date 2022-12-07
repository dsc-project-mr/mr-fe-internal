import type {NextPage} from "next";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CreateNewUser: NextPage = () => {
    return (
        /* TODO: This minHeight should be unnecessary when the layout is flex */
        <Box sx={{ minHeight: '100vh', display: 'flex' }}>
            <Sidebar/>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ marginTop: 2, marginBottom: 2 }} variant="h5">{'Create New User'}</Typography>
                <TextField sx={{ marginTop: 2 }} id="name" label="Name of User"/>
                <TextField sx={{ marginTop: 2 }} id="email" label="Email Address"/>
                {/* Access Level control, as soon as we decide how it works */}
                <Button variant="contained">Confirm</Button>
            </Box>
        </Box>
    );
};

export default CreateNewUser;
