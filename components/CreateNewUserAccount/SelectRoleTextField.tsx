import * as React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const role = [
    {
        value: 'role1',
        label: 'Article Editor',
    },

    {
        value: 'role2',
        label: 'Donation Campaign Editor',
    },

    {
        value: 'role3',
        label: 'Internal Users'
    }
]

const SelectRoleTextField = () => {
    return (
        <Box>
            <TextField select label="Role" required helperText="Please select your role." sx={styledSelectRole}>
                {role.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    )
}

export default SelectRoleTextField;

const styledSelectRole = {
    width: '100%'
}