import { useState, Dispatch, SetStateAction, useMemo } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import Tune from "@mui/icons-material/Tune";
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import { Region } from "constants/Donation";

import Badge from "@mui/material/Badge";
import Settings from "@mui/icons-material/Settings";
import { DynamicMultiSelectFilter } from "./DynamicMultiSelectFilter";
import { MultiSelectFilter } from "./MultiSelectFilter";
import { DateRangeFilter, DateRange } from "./DateRangeFilter";
import { FilterContainer } from "./FilterContainer";

type SearchbarProps = {
    tags: string[],

    search: string,
    setSearch: Dispatch<SetStateAction<string>>,

    selectedRegions: Region[],
    setSelectedRegions: Dispatch<SetStateAction<Region[]>>,
    defaultSelectedRegions: Region[],

    selectedDateRange: DateRange | undefined,
    setSelectedDateRange: Dispatch<SetStateAction<DateRange | undefined>>,
    defaultSelectedDateRange: DateRange | undefined,

    selectedTags: string[],
    setSelectedTags: Dispatch<SetStateAction<string[]>>,
    defaultSelectedTags: string[],
} & TextFieldProps;

const Searchbar = ({
        search, setSearch,
        selectedRegions, setSelectedRegions, defaultSelectedRegions,
        selectedDateRange, setSelectedDateRange, defaultSelectedDateRange,
        selectedTags, setSelectedTags, defaultSelectedTags,
        tags, ...props
    }: SearchbarProps) => {

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const state = useMemo(() => {
        return {
            selectedRegions,
            selectedDateRange,
            selectedTags
        }
    }, [selectedRegions, selectedDateRange, selectedTags]);

    const defaultState = useMemo(() => {
        return {
            selectedRegions: defaultSelectedRegions,
            selectedDateRange: defaultSelectedDateRange,
            selectedTags: defaultSelectedTags
        }
    }, [defaultSelectedRegions, defaultSelectedDateRange, defaultSelectedTags]);

    const isDirty = useMemo<boolean>(() => {
        // perhaps need to invest in deepEquals
        // return !deepEquals(state, defaultState);
        return state.selectedRegions.length !== defaultState.selectedRegions.length ||
            !state.selectedRegions.every((v, i) => v === defaultState.selectedRegions[i]) ||
            state.selectedDateRange?.start?.getTime() !== defaultState.selectedDateRange?.start?.getTime() ||
            state.selectedDateRange?.end?.getTime() !== defaultState.selectedDateRange?.end?.getTime() ||
            state.selectedTags.length !== defaultState.selectedTags.length ||
            !state.selectedTags.every((v, i) => v === defaultState.selectedTags[i]);
    }, [state, defaultState]);

    const clearState = () => {
        setSelectedRegions(defaultSelectedRegions);
        setSelectedDateRange(defaultSelectedDateRange);
        setSelectedTags(defaultSelectedTags);
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
                    {/* <FilterContainer title="Campaign Status">
                        <MultiSelectFilter valueSet={Object.values(CampaignStatus)} values={selectedCampaignStatuses} setValues={setSelectedCampaignStatuses} />
                    </FilterContainer> */}
                    <FilterContainer title="Country/Region">
                        <MultiSelectFilter valueSet={Object.values(Region)} values={selectedRegions} setValues={setSelectedRegions} />
                    </FilterContainer>
                    <FilterContainer title="Date">
                        <DateRangeFilter value={selectedDateRange} setValue={setSelectedDateRange} />
                    </FilterContainer>
                    <FilterContainer title="Tags">
                        <DynamicMultiSelectFilter valueSet={tags} values={selectedTags} setValues={setSelectedTags} />
                    </FilterContainer>
                </Box>
            </Popover>
        </div>
    );
};

export default Searchbar;