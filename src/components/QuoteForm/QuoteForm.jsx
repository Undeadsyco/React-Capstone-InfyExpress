import { useFormik } from "formik";
import * as yup from 'yup';

import {
  FormContainer, Form, Title,
  InputContainer, Input, BtnBox, Btn,
} from './styles'

const validation = yup.object({
  from: yup.string().required(),
  to: yup.string().required(),
  weight: yup.number().required(),
  length: yup.number().required(),
  width: yup.number().required(),
  height: yup.number().required(),
});

const QuoteFrom = ({ onMakeQuery }) => {
  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      from: '',
      to: '',
      weight: 0,
      length: 0,
      width: 0,
      height: 0,
    },
    onSubmit: (values) => {
      const { length, width, height, to, from, weight } = values;
      const dementions = { length, width, height };
      onMakeQuery({
        to,from,weight,dementions
      })
    },
  })

  return (
    <FormContainer colSpan='9/12' rowSpan='5/13' >
      <Form onSubmit={formik.handleSubmit}>
        <Title>Get A Quote...</Title>
        <InputContainer>
          <label htmlFor="from">From: (collection)</label>
          <Input
            width='100%'
            id="from"
            name="from"
            type="text"
            values={formik.values.from}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="to">To: (delivery)</label>
          <Input
            width='100%'
            id="to"
            name="to"
            type="text"
            values={formik.values.to}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="weight">Weight:</label>
          <Input
            width='100%'
            id="weight"
            name="weight"
            type="number"
            values={formik.values.weight}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <InputContainer>
          Enter Parcel Dementions: (in cm)
          <Input
            width='30%'
            id="length"
            name="length"
            type="number"
            values={formik.values.length}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Length"
          />
          <Input
            width='30%'
            id="width"
            name="width"
            type="number"
            values={formik.values.width}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Width"
          />
          <Input
            width='30%'
            id="height"
            name="height"
            type="number"
            values={formik.values.height}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Height"
          />
        </InputContainer>
        <BtnBox>
          <Btn type="submit">Submit</Btn>
        </BtnBox>
      </Form>
    </FormContainer>
  );
};

export default QuoteFrom;