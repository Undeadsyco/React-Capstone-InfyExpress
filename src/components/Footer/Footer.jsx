import { FooterContainer, IconContainer } from './styles';

import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';

const Footer = () => (
  <FooterContainer height='10%'>
    <div>
      <h5>Powered by Infosys UI & Markup</h5>
    </div>
    <IconContainer>
      <FaFacebookSquare color='beige' size={28} />
      <FaWhatsappSquare color='beige' size={28} />
      <AiFillTwitterSquare color='beige' size={28} />
    </IconContainer>
    <div>
      <p>CopyRight &copy; UI & Markup Infosys Ltd</p>
    </div>
  </FooterContainer>
);

export default Footer;
