import * as React from 'react';
import { Box, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

type Props = {
    selectRole : (e : SelectChangeEvent) => void;
}

const SelectRoleTextField: React.FC<Props> = (props) => {
    const [role, setRole] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        props.selectRole(event)
        setRole(event.target.value);
    }

    return (
        <Box>
            <FormControl fullWidth required>
                <InputLabel id="role-choosing-label">Role</InputLabel>
                <Select
                    labelId="role-choosing-label"
                    id="role-choosing"
                    value={role}
                    label="Role"
                    onChange={(e) => handleChange(e)}
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
