import type { NextPage } from 'next'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Image from "next/image";

// TODO: temp, until we get the MR logo into assets folder
const MR_LOGO = 'https://www.mercyrelief.org/site/wp-content/uploads/logo-mercyrelief@2x.png';

const ForgotPassword: NextPage = () => {
    return (
        /* TODO This minHeight should be unnecessary when the layout is flex*/
        <Box sx={{ minHeight: '100vh', display: 'flex' }}>
            <Box sx={{
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                minWidth: '200px',
                width: '40%',
                maxWidth: '600px'
            }}>
                <Box sx={{ alignSelf: "center", marginBottom: 5 }}>
                    {/* TODO: temp, until we get the MR logo into assets folder */}
                    {/*<Image src={MR_LOGO} layout="fill"/>*/}
                    <img src={MR_LOGO} height={100}/>
                </Box>
                <Typography sx={{ marginTop: 3, marginBottom: 1 }} variant="subtitle1" fontWeight="bold">Request for Password Reset</Typography>
                <TextField sx={{ marginTop: 2 }} id="email" label="Email address"/>
                <Button sx={{ marginTop: 2 }} variant="contained">Send Reset Link</Button>
            </Box>
        </Box>
    )
}

export default ForgotPassword
