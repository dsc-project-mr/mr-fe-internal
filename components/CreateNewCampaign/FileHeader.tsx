import { Button, Grid } from '@mui/material';
import React from 'react';

export interface FileHeaderProps {
  file: File;
  onDelete: (file: File) => void;
}

export function FileHeader({ file, onDelete }: FileHeaderProps) {
  return (
    <Grid container sx={styledGrid}>
      <Grid item>{file.name}</Grid>
      <Grid item>
        <Button size="small" onClick={() => onDelete(file)}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

const styledGrid = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}