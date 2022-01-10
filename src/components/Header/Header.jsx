import { HeaderContainer, Title, Nav, StyledLink } from "./styles";

const Header = ({ isLoggedIn }) => (
  <HeaderContainer height='10%'>
    <Title>
      Infy-Express
    </Title>
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/services">List Of Service</StyledLink>
      {isLoggedIn ? <StyledLink to='/profile'>Profile</StyledLink> : <StyledLink to="/login">Login</StyledLink>}
    </Nav>
  </HeaderContainer>
);

export default Header;
