import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from 'yup';

import { BiUserCircle } from 'react-icons/bi';
import { BsFillEyeSlashFill } from 'react-icons/bs'

import {
  LoginContainer, Form, Title, Label,
  Input, InputContainer, IconContainer, BtnBox
} from './styles';

const validation = yup.object({});

const Login = ({ onLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      console.log(values);
      const { email, password } = values
      onLogin(email).then(data => {
        if (data?.length === 0) alert('Could not find user!');

        if (data[0]?.password !== password) alert('Incorrect password!');

        localStorage.setItem('user', JSON.stringify(data[0]));
        dispatch({ type: 'LOGIN', data: data[0] });
        alert('Login Successful');
        actions.resetForm();
        setTimeout(() => navigate('/'), 250);
      })
    },
  });

  return (
    <LoginContainer className="multiGrid" cols={12} rows={12}>
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <Title>Login</Title>
        </div>

        <InputContainer>
          <Label htmlFor="email">
            <IconContainer>
              <BiUserCircle size={24} />
            </IconContainer>
            <Input
              id="email"
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Label>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">
            <IconContainer>
              <BsFillEyeSlashFill size={24} />
            </IconContainer>
            <Input
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Label>
        </InputContainer>

        <BtnBox>
          <button type="submit">Submit</button><br />
          <button type="button"><Link to='/signup'>Dont have an account? Register Here</Link></button>
        </BtnBox>
      </Form>
    </LoginContainer>
  );
};

export default Login;
