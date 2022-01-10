import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { FormContainer, Form, Title, BtnBox, Btns } from './styles';

import UserInfoSection from './UserInfoSection';
import SenderAddressSection from './SenderAddressSecion';
import ReceiverAddressSection from './ReceiverAddressSection';

const validation = yup.object({
  sender: yup.object({
    name: yup.string().required(),
    phNo: yup.string().required(),
    address: yup.object({
      country: yup.string().required(),
      city: yup.string().required(),
      address: yup.string().required(),
      zipCode: yup.string().required(),
    }).required()
  }),
  receiver: yup.object({
    name: yup.string().required(),
    phNo: yup.string().required(),
    address: yup.object({
      country: yup.string().required(),
      city: yup.string().required(),
      address: yup.string().required(),
      zipCode: yup.string().required(),
    }).required()
  }),
  pickUpDate: yup.date().required(),
})

const BookingForm = ({ display, setViewForm, onMakeBooking }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      sender: {
        name: '',
        phNo: '',
        address: {
          country: '',
          city: '',
          address: '',
          zipCode: ''
        }
      },
      receiver: {
        name: '',
        phNo: '',
        address: {
          country: '',
          city: '',
          address: '',
          zipCode: ''
        }
      },
      pickUpDate: new Date(),
    },
    onSubmit: (values) => {
      console.log(values);
      onMakeBooking(values).then(data => {
        if(data) {
          alert('Booking was successful!');
          navigate('/profile');
        }
      });
    },
  })

  return (
    <FormContainer display={display}>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Booking Form</Title>
        <UserInfoSection formik={formik} />
        <SenderAddressSection formik={formik} />
        <ReceiverAddressSection formik={formik} />
        <BtnBox colSpan='1/13' rowSpan='12/13'>
            <Btns type="button" onClick={() => setViewForm(false)}>Close</Btns>
            <Btns type="submit">Book</Btns>
        </BtnBox>
      </Form>
    </FormContainer>
  );
}

export default BookingForm;