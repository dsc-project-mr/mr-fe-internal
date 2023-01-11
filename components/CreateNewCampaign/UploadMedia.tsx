import { Card, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { array, object, string } from 'yup';
import MultipleFileUploadField from './MultipleFileUploadField';

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
      onSubmit={(values) => {
        console.log('values', values)
        return new Promise((res) => setTimeout(res, 2000))
      }}
    >
      {() => (
        <Form>
          <Card style={styledCard}>
            <Grid container spacing={2} direction="column">
              <MultipleFileUploadField name="files" />
            </Grid>
          </Card>
        </Form>
      )}
    </Formik>
  )
}

const styledCard = {
  minHeight: '140px',
  overflow: 'scroll',
}

export default UploadMedia
