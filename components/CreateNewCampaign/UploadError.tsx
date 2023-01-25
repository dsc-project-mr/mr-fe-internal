import {
    LinearProgress,
    Typography,
  } from '@mui/material';
  import React from 'react';
  import { FileError } from 'react-dropzone';
  import { FileHeader } from './FileHeader';
  
  export interface UploadErrorProps {
    file: File;
    onDelete: (file: File) => void;
    errors: FileError[];
  }
  
  export function UploadError({ file, onDelete, errors }: UploadErrorProps) {
    return (
      <React.Fragment>
        <FileHeader file={file} onDelete={onDelete} />
        <LinearProgress variant="buffer" value={100} color="error" />
        {errors.map((error) => (
          <div key={error.code}>
            <Typography color="error">{error.message}</Typography>
          </div>
        ))}
      </React.Fragment>
    );
  }