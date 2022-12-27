import { Grid, Typography } from '@mui/material';
import { useField } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';
import SingleFileUploadWithProgress from './SingleFileUploadWithProgress';
import { UploadError } from './UploadError';

// import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

let currentId = 0;

function getNewId() {
  return ++currentId;
}

export interface UploadableFile {
  id: number;
  file: File;
  errors: FileError[];
  url?: string;
}

const theme = createTheme();

// const useStyles = makeStyles((theme) => ({
//   dropzone: {
//     border: `2px dashed ${theme.palette.primary.main}`,
//     borderRadius: theme.shape.borderRadius,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: theme.palette.background.default,
//     height: theme.spacing(10),
//     outline: 'none',
//   },
// }));

const styledTypo = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}


const MultipleFileUploadField = ({ name }: { name: string }) => {
  const [_, __, helpers] = useField(name);
//   const classes = useStyles();

  const [files, setFiles] = useState<UploadableFile[]>([]);
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [], id: getNewId() }));
    const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
  }, []);

  useEffect(() => {
    helpers.setValue(files);
    // helpers.setTouched(true);
  }, [files]);

  function onUpload(file: File, url: string) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }

  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
        'image/*': ['.png','.gif', '.jpeg', '.jpg', '.svg']
    },
    maxSize: 3000 * 1024, // 3MB
  });

  return (
    <ThemeProvider theme={theme}>
        <React.Fragment>
        <Grid item>
            <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Typography sx={styledTypo}>Click to upload or drag and drop</Typography>
            <Typography sx={styledTypo}>PNG, GIF, JPEG, JPG or SVG files - max 3MB</Typography>
            </div>
        </Grid>

        {files.map((fileWrapper) => (
            <Grid item key={fileWrapper.id}>
            {fileWrapper.errors.length ? (
                <UploadError
                file={fileWrapper.file}
                errors={fileWrapper.errors}
                onDelete={onDelete}
                />
            ) : (
                <SingleFileUploadWithProgress
                onDelete={onDelete}
                onUpload={onUpload}
                file={fileWrapper.file}
                />
            )}
            </Grid>
        ))}
        </React.Fragment>
    </ThemeProvider>

  );
}


export default MultipleFileUploadField;