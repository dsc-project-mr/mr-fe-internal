import type {NextPage} from "next";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {ReactNode, useState} from "react";
import Person from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Lock from "@mui/icons-material/Lock";

const Account = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src="unlinked"/>
            <TextField sx={{ marginTop: 2 }} label="Full Name"/>
            <TextField sx={{ marginTop: 2 }} label="Email Address"/>
            <Button sx={{ marginTop: 2, alignSelf: 'end' }} variant="contained">Save Changes</Button>
        </Box>
    );
};

const ChangePassword = () => {
    return (
        <Box>
            <Button sx={{ marginTop: 2 }} variant="contained">Request for password reset</Button>
            <Alert sx={{ marginTop: 2 }} severity="info">A reset link has been sent to your email!</Alert>
        </Box>
    );
};

interface IconTextProps {
    icon: ReactNode,
    text: string
}

const IconText = ({icon, text}: IconTextProps) => {
    return (<Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        {icon}
        <Box sx={{ marginLeft: 1 }}>{text}</Box>
    </Box>);
}

const Settings: NextPage = () => {
    const [value, setValue] = useState(0);
    return (
        /* TODO: This minHeight should be unnecessary when the layout is flex */
        <Box sx={{ minHeight: '100vh', display: 'flex' }}>
            <Sidebar/>
            <Box sx={{ flex: 1 }}>
                <Typography sx={{ marginTop: 2, marginBottom: 2 }} variant="h5">{`Settings`}</Typography>
                {/* TODO add icons to account and change password */}
                <Tabs value={value} onChange={(_, v) => setValue(v)}>
                    <Tab label={<IconText icon={<Person/>} text="Account"/>} />
                    <Tab label={<IconText icon={<Lock/>} text="Change Password"/>} />
                </Tabs>
                <Box hidden={value !== 0}><Account/></Box>
                <Box hidden={value !== 1}><ChangePassword/></Box>
            </Box>
        </Box>
    );
};

export default Settings;