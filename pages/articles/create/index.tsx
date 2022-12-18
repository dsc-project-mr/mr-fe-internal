import { Avatar, Button, Grid, TextField } from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'
import router from 'next/router'
import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { FileUploader } from 'react-drag-drop-files'
import UploadFileIcon from '@mui/icons-material/UploadFile'

const styleduploadbox = {
  borderWidth: 'thin',
  borderStyle: 'dashed',
  borderColor: '#9e9e9e',
  padding: '20px 0 20px 0',
}
const styledtitle = {
  fontFamily: 'Roboto',
  fontWeight: 700,
  margin: '20px 0 20px 0',
}

const styledtopbar = {
  display: 'flex',
  flexDirection: 'row' as const,
  justifyContent: 'space-between',
}

const fileTypes = ['JPG', 'PNG']

const CreateArticle = () => {
  // const editorRef = useRef(null)
  const [uploadedFile, setFile] = useState()
  const handleChange = (uploadedFile: React.SetStateAction<undefined>) => {
    setFile(uploadedFile)
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '10px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button onClick={() => router.back()}>
            <ArrowBackIosNewIcon style={{ margin: 20 }} />
          </Button>
          <h4 style={styledtitle}>Create Article</h4>
        </div>
        <div>
          <div style={styledtopbar}>
            <h6 style={styledtitle}>Title of Article</h6>
            <div>
              <Button sx={{ m: 5 }} variant="contained" color="success">
                Publish
              </Button>
              <Button variant="contained" color="secondary">
                Save
              </Button>
            </div>
          </div>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="Title of article"
            variant="filled"
            fullWidth
            required
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <div>
          <h6 style={styledtitle}>Cover Photo</h6>
        </div>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
          <Grid
            sx={styleduploadbox}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            columns={12}
          >
            <Grid item xs={12}>
              <Avatar sx={{ bgcolor: '#bbdefb' }}>
                <UploadFileIcon sx={{ color: '#1976D2' }} />
              </Avatar>
            </Grid>
            <Grid item xs={8}>
              <p>
                <span style={{ textDecoration: 'underline', color: '#1976D2' }}>
                  Click To Upload
                </span>{' '}
                or Drag and Drop
              </p>
              <p style={{ color: '#9e9e9e' }}>
                SVG, PNG, JPG or GIF (max. 3MB)
              </p>
            </Grid>
          </Grid>
        </FileUploader>
        <div>
          <h6 style={styledtitle}>Content</h6>
          <Editor
            apiKey="qkp2e0rjd9e286x3xoazfsvtniq91z7qm6j6iu65ad0g2o5s"
            initialValue="<p></p>"
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'highlight',
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'insertdatetime',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
              ],
              toolbar:
                'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </div>
      </div>
    </>
  )
}

export default CreateArticle
