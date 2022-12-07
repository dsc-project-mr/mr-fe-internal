import type { NextPage } from 'next'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Link from "next/link";
// import Image from "next/image";

// TODO: temp, until we get the MR logo into assets folder
const MR_LOGO = 'https://www.mercyrelief.org/site/wp-content/uploads/logo-mercyrelief@2x.png';

const Login: NextPage = () => {
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
              <Typography sx={{ marginTop: 3 }} variant="subtitle1" fontWeight="bold">Login</Typography>
              <TextField sx={{ marginTop: 3 }} id="email" label="Email address"/>
              <TextField sx={{ marginTop: 2, marginBottom: 1 }} id="password" label="Password" type="password" />
              <Link href="/ForgotPassword">Forget Password?</Link>
              <Button sx={{ marginTop: 2 }} variant="contained">SIGN IN</Button>
              <Alert sx={{ marginTop: 2 }} severity="error">
                  <Typography variant="subtitle2" fontWeight="bold">Login Failed!</Typography>
                  <Typography variant="body2">Email address/password not found</Typography>
              </Alert>
          </Box>
      </Box>
  )
}

export default Login
