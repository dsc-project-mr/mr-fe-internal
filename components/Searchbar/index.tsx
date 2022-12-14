import { useState, Dispatch, SetStateAction, useMemo, ReactNode } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import Tune from "@mui/icons-material/Tune";
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";

import Badge from "@mui/material/Badge";
import Settings from "@mui/icons-material/Settings";
import { FilterContainer } from "./FilterContainer";

export interface Filter<T> {
    name: string,
    value: T,
    setValue: Dispatch<SetStateAction<T>>,
    defaultValue: T,
    render: (f: Filter<T>) => ReactNode,
    compare?: (v: T, dv: T) => boolean
}

export function useFilter<T>(name: string, defaultValue: T, render: (f: Filter<T>) => ReactNode, compare?: (v: T, dv: T) => boolean): Filter<T> {
    const [value, setValue] = useState<T>(defaultValue);
    return {
        name, value, setValue, defaultValue, render, compare
    };
}

type SearchbarProps = {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>,

    filters: Filter<unknown>[],
} & TextFieldProps;

const Searchbar = ({
        search, setSearch, filters,
        ...props
    }: SearchbarProps) => {

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const defaultCompare = <T,>(v: T, dv: T) => v === dv;

    const isDirty = useMemo<boolean>(() => {
        return !filters.every(f => (f.compare || defaultCompare)(f.value, f.defaultValue));
    }, [filters]);

    const clearState = () => {
        for (const f of filters) {
            f.setValue(f.defaultValue);
        }
    };

    return (
        <div>
            <TextField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                    '& .MuiInputBase-root': { borderRadius: 4 },
                    '& .MuiInputBase-input': { padding: '0.7rem 0.0rem' }, // reduce padding inside input
                }}
                InputProps={{
                    startAdornment:
                        <InputAdornment position="start">
                            <Search/>
                        </InputAdornment>,
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                                <Badge badgeContent={<Settings sx={{ width: '1.25rem', height: '1.25rem' }} color='primary' />} invisible={!isDirty}>
                                    <Tune/>
                                </Badge>
                            </IconButton>
                        </InputAdornment>
                }} {...props}>
            </TextField>
            <Popover
                open={anchorEl !== null}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ padding: 2, display: 'inline-flex', justifyContent: 'space-between', alignSelf: 'stretch' }}>
                        <Typography variant="h6" fontWeight={'bold'} fontSize={'1.2rem'}>Filters</Typography>
                        <Button onClick={() => clearState()}>Clear All</Button>
                    </Box>

                    {
                        filters.map((f, i) => {
                            return (
                                <FilterContainer key={i} title={f.name}>
                                    {f.render(f)}
                                </FilterContainer>
                            )
                        })
                    }
                </Box>
            </Popover>
        </div>
    );
};

export default Searchbar;