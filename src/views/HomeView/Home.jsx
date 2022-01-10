import { 
  HomeContainer, InfoContainer, Title, Text,
  ImageContainer, ProcessContainer, Process, HeadingContainer
} from './styles';

const Home = () => (
  <HomeContainer className='multiGrid' cols={12} rows={12}>
    <InfoContainer colSpan='3/7' rowSpan='1/6'>
      <Title>Infy Express</Title>
      <Text>
        With InfyExpress, We aim to make the entire package delivery experience straight forward - providing online tools for shipping, monitoring, and tracking! Lending our expertise in custom clearence and keeping abreast of all the latest rules and regulations, duties and taxes
      </Text>
      <button>WANT TO BOOK A SERVICE?</button>
    </InfoContainer>
    <ImageContainer colSpan='7/11' rowSpan='1/6'></ImageContainer>
    <ProcessContainer className='multiCols' cols={4} rows='20% 80%' colSpan='1/13' rowSpan='6/13'>
      <HeadingContainer colSpan='1/5'>
        <h3>The Process</h3>
      </HeadingContainer>
      <Process colSpan='1/2'>TAKING THE ORDER</Process>
      <Process colSpan='2/3'>GETTING THE PARCEL</Process>
      <Process colSpan='3/4'>LOADING PACKAGE</Process>
      <Process colSpan='4/5'>DELIVER TO DOOR</Process>
    </ProcessContainer>
  </HomeContainer>
);

export default Home;
