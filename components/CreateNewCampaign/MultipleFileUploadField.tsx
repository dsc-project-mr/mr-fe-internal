import { Grid, Avatar, Box } from '@mui/material'
import { useField } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
import { FileError, FileRejection, useDropzone } from 'react-dropzone'
import SingleFileUploadWithProgress from './SingleFileUploadWithProgress'
import { UploadError } from './UploadError'
import UploadFileIcon from '@mui/icons-material/UploadFile'
let currentId = 0

function getNewId() {
  return ++currentId
}

export interface UploadableFile {
  id: number
  file: File
  errors: FileError[]
  url?: string
}

const MultipleFileUploadField = ({ name }: { name: string }) => {
  const [, , helpers] = useField(name)
  const [files, setFiles] = useState<UploadableFile[]>([])
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({
      file,
      errors: [],
      id: getNewId(),
    }))
    const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }))
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej])
  }, [])

  useEffect(() => {
    helpers.setValue(files)
  }, [files, helpers])

  function onUpload(file: File, url: string) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url }
        }
        return fw
      })
    )
  }

  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file))
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.svg'],
    },
    maxSize: 3000 * 1024, // 3MB
  })

  return (
    <>
      <Grid item>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Box sx={styledContainer}>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Avatar sx={{ bgcolor: '#bbdefb' }}>
                <UploadFileIcon
                  sx={{
                    color: '#1976D2',
                  }}
                />
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <p style={{ justifyContent: 'center' }}>
                <span
                  style={{
                    textDecoration: 'underline',
                    color: '#1976D2',
                  }}
                >
                  Click To Upload
                </span>
                &nbsp;or Drag and Drop
              </p>
              <p style={{ color: '#9e9e9e' }}>
                SVG, PNG, JPG or GIF (max. 3MB)
              </p>
            </Grid>
          </Box>
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
    </>
  )
}

const styledContainer = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: '3px dashed #F2F2F2',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0px',
  padding: '20px 0',
}

export default MultipleFileUploadField
