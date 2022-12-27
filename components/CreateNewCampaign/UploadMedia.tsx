import { Button, Card, CardContent, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { array, object, string } from 'yup';
import MultipleFileUploadField from './MultipleFileUploadField';

const UploadMedia = () => {
  return (
    <Card>
      <CardContent>
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
            console.log('values', values);
            return new Promise((res) => setTimeout(res, 2000));
          }}
        >
          {({isValid, isSubmitting }) => (
            <Form>
              <Grid container spacing={2} direction="column" sx={{height: '100%'}}>
                <MultipleFileUploadField name="files" />

                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!isValid || isSubmitting}
                    type="submit"
                    sx={{marginTop: '10px'}}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}

export default UploadMedia;

