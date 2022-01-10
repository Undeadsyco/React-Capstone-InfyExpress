import { FormSection, InputContainer, Input, Heading } from './styles';

const SenderAddressSection = ({ formik }) => {
  return (
    <FormSection className="multiRows" cols='100%' rows={5} colSpan='1/4' rowSpan='7/12'>
      <Heading>Sender Address</Heading>
      <InputContainer>
        <label htmlFor="country">Country:</label>
        <Input
          id="country"
          name="country"
          type="text"
          values={formik.values.sender.address.country}
          onChange={(e) => formik.values.sender.address.country = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="city">City:</label>
        <Input
          id="city"
          name="city"
          type="text"
          values={formik.values.sender.address.city}
          onChange={(e) => formik.values.sender.address.city = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer> 
        <label htmlFor="address">Address:</label>
        <Input
          id="address"
          name="address"
          type="text"
          values={formik.values.sender.address.address}
          onChange={(e) => formik.values.sender.address.address = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="zipCode">ZipCode:</label>
        <Input
          id="zipCode"
          name="zipCode"
          type="text"
          values={formik.values.sender.address.zipCode}
          onChange={(e) => formik.values.sender.address.zipCode = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
    </FormSection>

  )
}

export default SenderAddressSection;