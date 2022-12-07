import type {NextPage} from "next";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Typography from "@mui/material/Typography";

// TODO: make these into properties pulled from the current user
const name = "John";
const role = "Super Admin";

const Dashboard: NextPage = () => {
    return (
        /* TODO: This minHeight should be unnecessary when the layout is flex */
        <Box sx={{ minHeight: '100vh', display: 'flex' }}>
            <Sidebar/>
            <Box>
                <Typography sx={{ marginTop: 2 }} variant="h6">{`Welcome, ${name}!`}</Typography>
                <Typography sx={{ marginTop: 1 }} variant="subtitle2">{`Role: ${role}`}</Typography>
            </Box>
        </Box>
    )
}

export default Dashboard;
