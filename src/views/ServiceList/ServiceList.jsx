import { useNavigate } from 'react-router-dom';
import {
  ServicesContainer, TitleContainer, ListContainer,
  HeadingContainer, Heading, HeadingText, Service,
} from './styles';

const ServiceList = ({ services }) => {
  const navigate = useNavigate();
  return (
    <ServicesContainer className="multiGrid" cols={12} rows={12}>
      <TitleContainer colSpan='1/13' rowSpan='1/4'>
        <h2>List of Services</h2>
      </TitleContainer>
      <ListContainer className='multiGrid' colSpan='1/13' rowSpan='4/13' cols={4} rows={2}>
        <HeadingContainer colSpan='1/5'>
          <Heading>Our Services</Heading>
          <HeadingText>
            Infy Express is believed in serving the client at their door step. Our thinking is "the best
            certification of a quality is the measurement of the scale of the smile on the customers face".
          </HeadingText>
        </HeadingContainer>
        {services?.map(service => (
          <Service onClick={() => navigate(`/service/${service.id}`)}>
            <h5>{service.serviceName}</h5>
            <p>{service.description}</p>
          </Service>
        ))}
      </ListContainer>
    </ServicesContainer>
  );
}

export default ServiceList;