import React from 'react';
import { useContext } from 'react';
import { Formik, Form } from 'formik';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../context';
import api from '../../api';
import FormField from '../../components/FormField.tsx';
import styled from 'styled-components';
import Colors from '../../common/Colors';
import { Link } from 'react-router-dom';

const Container = styled.div`
  text-aling: center;
  width: 600px;
  margin: 0 auto;
  padding: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const TitleBar = styled.div`
  font-size: 24px;
  text-align: center;
  margin: 30px auto;
  color: ${Colors.PURPLE} !important;
`;
const Register = styled.span`
  font-size: 20px;
  margin: 0 auto;
  font-weight: 600;
  color: ${Colors.YELLOW} !important;
`;

const IMG = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

const Actions = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
`;
const Header = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  color: ${Colors.PURPLE} !important;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  background-color: ${Colors.PURPLE};
  color: white;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 5px;
  font-size: 17px;
  border: none;
  cursor: pointer;
`;

function RegisterPage() {
  const auth = useContext(AuthContext);

  if (auth.isAuthenticated) {
    return <Redirect to="/" />;
  }

  async function handleSubmit(values, actions) {
    try {
      await api.post('/api/users/signup', values);
      await auth.login(values.email, values.password);
    } catch (error) {
      const { message, code } =
        error.response.status === 400
          ? error.response.data
          : { message: 'An unknown error occurred.', code: null };
      let fields;
      if (code === 'already-exists') {
        fields = ['email'];
      } else {
        fields = ['firstName', 'lastName', 'email', 'password'];
      }
      for (const field of fields) {
        actions.setFieldError(field, message);
      }
    }
  }

  return (
    <div className="container">
      <TitleBar>
        {' '}
        <IMG src={process.env.PUBLIC_URL + '/img/BIA.jpeg'} />
        <h1>Black Innovation Alliance</h1>
      </TitleBar>
      <Container>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          {({ errors, isSubmitting }) => (
            <Form>
              <Header>Sign Up</Header>
              <FormField name="firstName" label="First Name" errors={errors} />
              <FormField name="lastName" label="Last Name" errors={errors} />
              <FormField
                name="email"
                type="email"
                label="Email"
                errors={errors}
              />
              <FormField
                name="password"
                type="password"
                label="Password"
                errors={errors}
              />
              <Actions>
                <Button type="submit" disabled={isSubmitting}>
                  Register
                </Button>

                <Link to="/login" className="is-pulled-left">
                  <Register>Already have an account?</Register>
                </Link>
              </Actions>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default RegisterPage;
