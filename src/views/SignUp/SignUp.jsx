import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';

import {
  FormContainer, Title, Form,
  Input, InputContainer, SubmitBtn,
} from "./styles";

const validation = yup.object({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
  phoneNum: yup.number().required()
})

const SignUp = ({ onRegister }) => {
  const navigate = useNavigate()
  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNum: '',
    },
    onSubmit: (values, actions) => {
      const { password, confirmPassword } = values;
      if (password !== confirmPassword) {
        actions.setErrors('confirmPassword', 'passwords do not match')
      };

      onRegister(values).then(data => {
        if(data?.username){
          alert('Registration was a success!');
          actions.resetForm();
          setTimeout(() => navigate('/login'), 500);
        } else {
          alert('Something Went Wrong!');
        }
      })
    },
  })

  return (
    <FormContainer className="multiGrid" cols={12} rows={12}>
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <Title>Register</Title>
        </div>

        <InputContainer>
          <label htmlFor="username">
            Name:
            <br />
            <Input
              id="username"
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
        </InputContainer>

        <InputContainer>
          <label htmlFor="email">
            Email:
            <br />
            <Input
              id="email"
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
        </InputContainer>
        
        <InputContainer>
          <label htmlFor="phoneNum">
            Phone Number:
            <br />
            <Input
              id="phoneNum"
              name="phoneNum"
              type="number"
              value={formik.values.phoneNum}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
        </InputContainer>
        
        <InputContainer>
          <label htmlFor="password">
            Password:
            <br />
            <Input
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
        </InputContainer>
        
        <InputContainer>
          <label htmlFor="confirmPassword">
            Confirm Password:
            <br />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
        </InputContainer>

        <InputContainer>
          <SubmitBtn type="submit">Register</SubmitBtn>
        </InputContainer>
      </Form>
    </FormContainer>
  );
};

export default SignUp;
