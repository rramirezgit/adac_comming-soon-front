import { Box, Button, TextField } from '@mui/material'
import { Formik, Form, FormikHelpers, ErrorMessage, Field } from 'formik'
import Styles from './formEmail.module.css'
import * as yup from 'yup'

interface Values {
  email: string
}

const FormEmail = (): JSX.Element => {
  const validationSchema = yup.object({
    email: yup.string().email('Correo no válido').required('Ingrese un email')
  })

  const MyInput = ({ field, form, ...props }: any): JSX.Element => {
    return <TextField {...props} variant="standard" />
  }

  return (
    <>
      <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={(values: Values, { setErrors }: FormikHelpers<Values>) => {
          console.log(values)
          setErrors({ email: 'Se ha enviado exitosamente!' })
        }}
        validationSchema={validationSchema}
      >
        {({ errors }) => (
          <Form>
            <Box
              className={Styles.form}
              sx={{
                flexDirection: {
                  xs: 'column',
                  md: 'row'
                },
                gap: {
                  xs: '23px',
                  md: '14px'
                }
              }}
            >
              <Box className={Styles.content}>
                <Field
                  name="email"
                  placeholder="Doe@email.com"
                  label="Email"
                  className={Styles.input}
                  as={MyInput}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={
                    errors?.email === 'Se ha enviado exitosamente!'
                      ? Styles.errorActive
                      : Styles.error
                  }
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                classes={{
                  root: Styles.button
                }}
              >
                JOIN
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default FormEmail
