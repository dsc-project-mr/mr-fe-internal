import {
  Avatar,
  Button,
  Grid,
  TextField,
} from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import router from 'next/router'
import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDropzone } from 'react-dropzone'
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

const AlertDialog = ({
  message,
  open,
  handleClose,
}: {
  message: string
  open: boolean
  handleClose: any
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{'Information'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

const CreateArticle = () => {
  const [open, setOpen] = React.useState(false)
  const [openSave, setOpenSave] = React.useState(false)
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<any[]>([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })
  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(event.target.value)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleSaveOpen = () => {
    setOpenSave(true)
  }

  const handleSaveClose = () => {
    setOpenSave(false)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <AlertDialog
        message="Article Published Successfully!"
        open={open}
        handleClose={handleClose}
      />
      <AlertDialog
        message="Article Saved Successfully!"
        open={openSave}
        handleClose={handleSaveClose}
      />
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
            <h6 style={styledtitle}>
              Title of Article<span style={{ color: 'red' }}>*</span>
            </h6>
            <div>
              <Button
                sx={{ m: 5 }}
                variant="contained"
                color="success"
                onClick={handleOpen}
                disabled={file.length === 0 || title.length === 0}
              >
                Publish
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSaveOpen}
              >
                Save
              </Button>
            </div>
          </div>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="Title of article"
            variant="filled"
            onChange={(event) => handleTextChange(event)}
            fullWidth
            required
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <div>
          <h6 style={styledtitle}>
            Cover Photo<span style={{ color: 'red' }}>*</span>
          </h6>
        </div>
        {
          <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <Grid
                sx={styleduploadbox}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                columns={12}
              >
                {file.length !== 0 ? (
                  <img
                    src={URL.createObjectURL(file[0])}
                    height="250px"
                    onLoad={() => {
                      URL.revokeObjectURL(URL.createObjectURL(file[0]))
                    }}
                  />
                ) : (
                  <div>
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
                  </div>
                )}
              </Grid>
            </div>
          </section>
        }
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
