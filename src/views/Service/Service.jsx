import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BookingForm, QuoteForm } from "../../components";

import {
  Container, TitleContainer, Title, Heading,
  FAQContainer, List, ListItem, BtnBox,
} from "./styles";

const Service = (props) => {
  const { onGetService, isLoggedIn } = props;
  const params = useParams();
  const [service, setService] = useState({});
  const [viewForm, setViewForm] = useState(false);

  useEffect(() => {
    onGetService(params.id).then(
      data => setService(data)
    );
  }, [params, onGetService]);

  return (
    <Container className="multiGrid" cols={12} rows={12}>
      <TitleContainer colSpan='2/7' rowSpan='2/7'>
        <Title>{service.serviceName}</Title>
        {service.description}
        
        <Heading>Parcel Size</Heading>
        {service.parcelSize}

        <Heading>Parcel Charges</Heading>
        {service.parcelCharges}
      </TitleContainer>
      <FAQContainer colSpan='2/7' rowSpan='6/12'>
        <Heading>FAQ</Heading>
        <List>
          <ListItem>When will InfyExpress deliver my parcel?</ListItem>
          <ListItem>What happens if something goes wrong?</ListItem>
          <ListItem>Can I send envelopes?</ListItem>
          <ListItem>What should I do if my is delayed or lost?</ListItem>
          <ListItem>When will my parcel be delivered?</ListItem>
        </List>
      </FAQContainer>
      <BtnBox colSpan="2/9" rowSpan='12/13'>
        <button onClick={() => isLoggedIn ? setViewForm(true) : alert('you must be logged in to create a booking')}>Book Service</button>
      </BtnBox>
      <QuoteForm {...props} />
      <BookingForm display={viewForm? 'flex' : 'none'} setViewForm={setViewForm} {...props} />
    </Container>
  )
}

export default Service;
