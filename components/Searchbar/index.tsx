import { useState, ReactNode, Dispatch, SetStateAction } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import Tune from "@mui/icons-material/Tune";
import ExpandMore from "@mui/icons-material/ExpandMore";
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import Accordion from "@mui/material/Accordion";
import Checkbox from "@mui/material/Checkbox";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CampaignStatus, Region } from "constants/Donation";

import { DateRange, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Cancel from "@mui/icons-material/Cancel";

type DynamicMultiSelectFilterProps<T> = {
    values: T[],
    setValues: Dispatch<SetStateAction<T[]>>
    valueSet: T[],
    renderValue?: (v: T) => ReactNode
} & Omit<AutocompleteProps<T, true, false, false>, 'options' | 'renderInput'>;

function DynamicMultiSelectFilter<T>({ values, setValues, valueSet, renderValue, ...props }: DynamicMultiSelectFilterProps<T>) {
    const _renderValue = renderValue || ((v: T) => v + "");
    const chips = values.map((v, i) => {
        return (
            <Chip key={i} label={_renderValue(v)}
                deleteIcon={<Cancel/>} sx={{ marginRight: 1, marginTop: 1 }}
                onDelete={() => setValues(val => val.filter(ov => ov !== v))}/>
        );
    });
    return (
        <Box sx={{ marginBottom: 2, display: 'flex', flexDirection: 'column' }}>
            <Autocomplete<T, true, false, false>
                {...props}
                multiple
                renderInput={(params) => <TextField {...params}  />}
                options={valueSet}
                value={values}
                renderTags={() => ''} // disable rendering of tags into the textfield
                onChange={(_, nv) => setValues(nv)} />
            {/* Cool css trick to force overflow */}
            <Box sx={{ width: 0, minWidth: '100%' }}>
                {chips}
            </Box>
        </Box>
    );
}

interface MultiSelectFilterProps<T> {
    values: T[],
    setValues: Dispatch<SetStateAction<T[]>>
    valueSet: T[],
    renderValue?: (v: T) => ReactNode
}

function MultiSelectFilter<T>({ values, setValues, valueSet, renderValue }: MultiSelectFilterProps<T>) {
    const addOrRmv = (val: T, checked: boolean) => {
        if (checked) {
            setValues(vs => [...vs, val]);
        } else {
            setValues(vs => vs.filter(v => v !== val));
        }
    };
    const _renderValue = renderValue || ((v: T) => v + "");

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {valueSet.map((v, i) => {
                return <FormControlLabel
                    control={<Checkbox checked={values.find((ov) => v === ov) !== undefined}
                    onChange={(_, c) => addOrRmv(v, c)} />}
                    label={_renderValue(v)} key={i}/>
            })}
        </Box>
    );
}

interface FilterContainer {
    title: string,
    children: ReactNode
}

const FilterContainer = ({title, children}: FilterContainer) => {
    return (
        <Accordion disableGutters elevation={0} sx={{
            borderTop: `1px solid rgba(0, 0, 0, 0.12)`,
            '&:before': { backgroundColor: 'unset' } // remove another border
        }}>
            <AccordionSummary
                expandIcon={<ExpandMore/>}>
                {title}
            </AccordionSummary>
            <AccordionDetails sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 0, paddingBottom: 0 }}>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}

type SearchbarProps = TextFieldProps;

const Searchbar = ({ ...props }: SearchbarProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [regions, setRegions] = useState<Region[]>([]);
    const [campaignStatuses, setCampaignStatuses] = useState<CampaignStatus[]>([]);
    const [dateRange, setDateRange] = useState<Range>({
        // TODO stop DateRange from scrolling to this initial range
        // startDate: new Date(2000, 0), // hardcoded initial startDate, otherwise DateRange shows too much
        // endDate: new Date(),
        startDate: undefined,
        endDate: undefined,
        key: 'selection'
    });
    // TODO use actual category type
    const [categories, setCategories] = useState<string[]>([]);

    return (
        <div>
            <TextField
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
                                <Tune/>
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
                        <Button>Clear All</Button>
                    </Box>
                    <FilterContainer title="Campaign Status">
                        <MultiSelectFilter valueSet={Object.values(CampaignStatus)} values={campaignStatuses} setValues={setCampaignStatuses} />
                    </FilterContainer>
                    <FilterContainer title="Country/Region">
                        <MultiSelectFilter valueSet={Object.values(Region)} values={regions} setValues={setRegions} />
                    </FilterContainer>
                    <FilterContainer title="Date">
                        <DateRange editableDateInputs={true} onChange={nr => setDateRange(nr.selection || {})} ranges={[dateRange]} moveRangeOnFirstSelection={true} />
                    </FilterContainer>
                    <FilterContainer title="Category">
                        <DynamicMultiSelectFilter valueSet={['imalongpiece', 'soamilmao', 'adsfasdf', 'asdfasdfasd', 'e', 'f', 'g']} values={categories} setValues={setCategories} />
                    </FilterContainer>
                </Box>
            </Popover>
        </div>
    );
};

export default Searchbar;