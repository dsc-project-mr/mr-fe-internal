import Box from "@mui/system/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ReactNode, Dispatch, SetStateAction } from "react";


export interface MultiSelectFilterProps<T> {
    values: T[];
    setValues: Dispatch<SetStateAction<T[]>>;
    valueSet: T[];
    renderValue?: (v: T) => ReactNode;
}

export function MultiSelectFilter<T>({ values, setValues, valueSet, renderValue }: MultiSelectFilterProps<T>) {
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
                    label={_renderValue(v)} key={i} />;
            })}
        </Box>
    );
}
