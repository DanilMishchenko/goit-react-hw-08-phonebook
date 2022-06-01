import { Formik, Form } from 'formik';
import { TextField, Container, Button, Stack } from '@mui/material';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(30, 'The name is too long, please enter another name.')
      .required('Required'),
    email: yup.string().email('Incorrect E-Mail Address').required('Required'),
    password: yup
      .string()
      .min(6, 'Minimum 6 characters required')
      .required('Required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Required'),
  });

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={initialValues}
        onSubmit={(value, actions) => {
          const { name, email, password } = value;
          actions.resetForm();
          dispatch(authOperations.register({ name, email, password }));
          navigate('/login');
        }}
        validateOnBlur
        validationSchema={validationSchema}
        validateOnMount
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Name"
                type="name"
                name="name"
                error={errors.name && touched.name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && <p>{errors.name}</p>}

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

              <TextField
                label="Re-enter password"
                type="password"
                name="confirmPassword"
                error={errors.confirmPassword && touched.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p>{errors.confirmPassword}</p>
              )}

              <Button variant="contained" disabled={!isValid} type="submit">
                Continue
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
