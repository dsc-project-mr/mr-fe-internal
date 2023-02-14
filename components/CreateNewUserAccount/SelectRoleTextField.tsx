import * as React from 'react';
import { Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const SelectRoleTextField = () => {
    const [chosenRole, setChosenRole] = React.useState('');

    return (
        <Box>
            <FormControl fullWidth required>
                <InputLabel id="role-choosing-label">Role</InputLabel>
                <Select
                    labelId="role-choosing-label"
                    id="role-choosing"
                    value={chosenRole}
                    label="Role"
                    onChange={e => setChosenRole(e.target.value)}
                >
                    <MenuItem value={'Article Editor'}>Article Editor</MenuItem>
                    <MenuItem value={'Donation Campaign Editor'}>Donation Campaign Editor</MenuItem>
                    <MenuItem value={'Internal User'}>Internal User</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectRoleTextField;
