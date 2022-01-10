import { FormSection, InputContainer, Input } from './styles';
const UserInfoSection = ({ formik }) => {
  return (
    <FormSection  className='MultiRows' cols='100%' rows={5} colSpan='1/7' rowSpan='2/7'>
      <InputContainer>
        <label htmlFor="senderName">Sender Name:</label>
        <Input
          id="senderName"
          name="senderName"
          type="text"
          vlaues={formik.values.sender.name}
          onChange={(e) => formik.values.sender.name = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="receiverName">Receiver Name:</label>
        <Input
          id="receiverName"
          name="receiverName"
          type="text"
          vlaues={formik.values.receiver.name}
          onChange={(e) => formik.values.receiver.name = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="senderPhNo">Sender Ph.No</label>
        <Input
          id="senderPhNo"
          name="senderPhNo"
          type="number"
          vlaues={formik.values.sender.phNo}
          onChange={(e) => formik.values.sender.phNo = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="receiverPhNo">Reveiver Ph.No</label>
        <Input
          id="receiverPhNo"
          name="receiverPhNo"
          type="number"
          vlaues={formik.values.receiver.phNo}
          onChange={(e) => formik.values.receiver.phNo = e.target.value}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="pickUpDate">Choose Package Pickup:</label>
        <Input
          id="pickUpDate"
          name="pickUpDate"
          type="date"
          vlaues={formik.values.pickUpDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
    </FormSection>
  )
}

export default UserInfoSection;