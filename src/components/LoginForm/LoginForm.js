import { Formik, Form } from 'formik';
import { TextField, Container, Button, Stack } from '@mui/material';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validationsSchema = yup.object().shape({
    email: yup.string().email('Incorrect E-Mail Address').required('Required'),
    password: yup.string().required('Required'),
  });

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(value, actions) => {
          const { email, password } = value;
          dispatch(authOperations.logIn({ email, password }));
          actions.resetForm();
        }}
        validateOnBlur
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Email"
                type="email"
                name="email"
                error={errors.email && touched.email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && <p>{errors.email}</p>}

              <TextField
                label="Password"
                type="password"
                name="password"
                error={errors.password && touched.password}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && <p>{errors.password}</p>}
              <Button variant="contained" type="submit">
                Continue
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
