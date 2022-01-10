import { FormSection, InputContainer, Input, Heading } from './styles';

const SenderAddressSection = ({ formik }) => {
  
  return (
    <FormSection className="multiRows" cols='100%' rows={5} colSpan='4/7' rowSpan='7/12'>
      <Heading>Receiver Address</Heading>
      <InputContainer>
        <label htmlFor="country">Country:</label>
        <Input
          id="country"
          name="country"
          type="text"
          values={formik.values.receiver.address.country}
          onChange={(e) => formik.values.receiver.address.country = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="city">City:</label>
        <Input
          id="city"
          name="city"
          type="text"
          values={formik.values.receiver.address.city}
          onChange={(e) => formik.values.receiver.address.city = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer> 
        <label htmlFor="address">Address:</label>
        <Input
          id="address"
          name="address"
          type="text"
          values={formik.values.receiver.address.address}
          onChange={(e) => formik.values.receiver.address.address = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="zipCode">ZipCode:</label>
        <Input
          id="zipCode"
          name="zipCode"
          type="text"
          values={formik.values.receiver.address.zipCode}
          onChange={(e) => formik.values.receiver.address.zipCode = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
    </FormSection>
  )
}

export default SenderAddressSection;