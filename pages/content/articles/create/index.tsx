import { Avatar, Button, Grid, TextField } from '@mui/material'
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
import { Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import CloseIcon from '@mui/icons-material/Close'
import parse from 'html-react-parser'
import Image from 'next/image'

const styleduploadbox = {
  borderWidth: 'thin',
  borderStyle: 'dashed',
  borderColor: '#9e9e9e',
  padding: '20px 0 20px 0',
}
const styledtitle = {
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
  handleClose: () => void
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Information</DialogTitle>
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
  const [open, setOpen] = useState(false)
  const [openSave, setOpenSave] = useState(false)
  const [openPreview, setOpenPreview] = useState(false)
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File[]>([])
  const [content, setContent] = useState('')
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
    submitArticle()
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
  const handlePreviewOpen = () => {
    setOpenPreview(true)
  }
  const handlePreviewClose = () => {
    setOpenPreview(false)
  }

  const submitArticle = async () => {
    // const response = await fetch('/api/content/article', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: title,
    //     content: 'content',
    //     latestEditorEmail: 'NA',
    //     type: ArticleType.EXTERNAL,
    //     imageUrl: file[0],
    //     contentUrl: content,
    //   }),
    // })
  }

  const isButtonDisabled =
    file.length === 0 || title.length === 0 || content.length === 0

  return (
    <>
      <Dialog open={openPreview} fullWidth maxWidth="md">
        <DialogTitle id="alert-dialog-title">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5">Article Preview</Typography>
            <Button onClick={handlePreviewClose}>
              <CloseIcon />
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h5" style={styledtitle}>
            {title}
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
              padding: '15px',
            }}
          >
            {file.length !== 0 && (
              <div
                style={{
                  height: '250px',
                  width: '100%',
                  position: 'relative',
                }}
              >
                <Image
                  src={URL.createObjectURL(file[0] as Blob)}
                  layout="fill"
                  objectFit="contain"
                  onLoad={() => {
                    URL.revokeObjectURL(URL.createObjectURL(file[0] as Blob))
                  }}
                  alt="article image"
                />
              </div>
            )}
            {parse(content)}
          </div>
        </DialogContent>
      </Dialog>
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => router.back()}
              variant="contained"
              style={{ marginRight: '10px' }}
            >
              <ArrowBackIosNewIcon />
            </Button>
            <Typography variant="h4" style={styledtitle}>
              Create Article
            </Typography>
          </div>
          <Button
            variant="contained"
            style={{ width: '40px', height: '40px' }}
            color="warning"
            onClick={handlePreviewOpen}
            disabled={isButtonDisabled}
          >
            <RemoveRedEyeIcon fontSize="small" />
          </Button>
        </div>
        <div>
          <div style={styledtopbar}>
            <Typography variant="h6" style={styledtitle}>
              Title of Article<span style={{ color: 'red' }}>*</span>
            </Typography>

            <div>
              <Button
                sx={{ m: 5 }}
                variant="contained"
                color="success"
                onClick={handleOpen}
                disabled={isButtonDisabled}
              >
                Publish
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSaveOpen}
                disabled={isButtonDisabled}
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
          <Typography variant="h6" style={styledtitle}>
            Cover Photo<span style={{ color: 'red' }}>*</span>
          </Typography>
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
                  <div
                    style={{
                      height: '250px',
                      width: '100%',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src={URL.createObjectURL(file[0] as Blob)}
                      layout="fill"
                      objectFit="contain"
                      onLoad={() => {
                        URL.revokeObjectURL(
                          URL.createObjectURL(file[0] as Blob)
                        )
                      }}
                      alt="article image"
                    />
                  </div>
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
          <Typography variant="h6" style={styledtitle}>
            Content
          </Typography>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            initialValue="<p></p>"
            onEditorChange={(c) => setContent(c)}
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
