import { Container, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { array, object, string } from 'yup'
import MultipleFileUploadField from './MultipleFileUploadField'

const UploadMedia = () => {
  return (
    <Formik
      initialValues={{ files: [] }}
      validationSchema={object({
        files: array(
          object({
            url: string().required(),
          })
        ),
      })}
      onSubmit={() => {
        return new Promise((res) => setTimeout(res, 2000))
      }}
    >
      {() => (
        <Form style={styledForm}>
          <Container style={styledCard}>
            <Grid container spacing={2} direction="column">
              <MultipleFileUploadField name="files" />
            </Grid>
          </Container>
        </Form>
      )}
    </Formik>
  )
}

const styledCard = {
  width: '100%',
  minHeight: '140px',
  overflow: 'auto',
}

const styledForm = {
  width: '100%',
}

export default UploadMedia
