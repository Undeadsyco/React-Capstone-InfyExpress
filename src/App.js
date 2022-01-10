import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Header, Footer, PrivateRoute } from './components';
import { Home, SignUp, Login, ServiceList, Service, Profile } from './views';

import actions from './actions';

import { Container } from './globalStyles'

const RouteContainer = styled(Container)``;

function App(props) {
  const { onGetServices } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    onGetServices();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'LOGIN', data: {...user} });
    }
  }, [onGetServices, dispatch])
  
  return (
    <Container width='100vw' height='100vh'>
      <Header {...props} />
      <RouteContainer className='multiGrid' height='80%' cols={12} rows={12}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp {...props} />} />
          <Route path="/login" element={<Login {...props} />} />
          <Route path="profile" element={<PrivateRoute {...props} />}>
            <Route path="/profile" element={<Profile {...props} />} />
          </Route>
          <Route path="/services" element={<ServiceList {...props} />} />
          <Route path="/service/:id" element={<Service {...props} />} />
        </Routes>
      </RouteContainer>
      <Footer />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user,
  services: state.services,
  bookings: state.bookings,
});

const mapDispatchToProps = (dispatch) => {
  const {
    register, login, getServices, getService,
    makeQuery, makeBooking, getBookings, cancelBooking,
  } = actions;

  return {
    onRegister: (body) => register(body),
    onLogin: (email) => login(email),
    onGetServices: () => getServices().then(data => dispatch({ type: 'GET_SERVICES', data})),
    onGetService: (id) => getService(id),
    onMakeQuery: (body) => makeQuery(body),
    onMakeBooking: (body) => makeBooking(body),
    onGetBookings: (body) => getBookings(body).then(data => dispatch({ type: 'GET_BOOKINGS', data })),
    onCancelBooking: (id, name) => cancelBooking(id, name).then(data => dispatch({ type: 'GET_BOOKINGS', data })),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
