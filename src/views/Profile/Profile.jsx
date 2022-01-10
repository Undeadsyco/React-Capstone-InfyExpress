import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ProfileContainer, InfoContainer, Title, ProfileInfo, BtnBox, LogoutBtn,
  BookingContainer, BookingInfo,
} from "./styles";

const Profile = ({ user, bookings, onCancelBooking, onGetBookings }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let count = 2

  useEffect(() => {
    onGetBookings(user.username);
  }, [onGetBookings, user])

  const onLogout = () => {
    localStorage.removeItem('user')
    dispatch({ type: "LOGOUT" });
    navigate('/');
  }
  
  return (
    <ProfileContainer className="multiGrid" cols={12} rows={12}>
      <InfoContainer className="multiRows" cols='100%' rows={5} colSpan='3/11' rowSpan='2/7'>
        <Title style={{ margin: 0 }}>Profile Information</Title>
        <ProfileInfo>
          <span><b>Name:</b></span><span>{user.username}</span>
        </ProfileInfo>
        <ProfileInfo>
          <span><b>Email:</b></span><span>{user.email}</span>
        </ProfileInfo>
        <ProfileInfo>
          <span><b>Phone Number:</b></span><span>{user.phoneNum}</span>
        </ProfileInfo>
        <BtnBox>
          <LogoutBtn onClick={onLogout}>Logout</LogoutBtn>
        </BtnBox>
      </InfoContainer>
      <BookingContainer className="multiRows" rows={5} cols='100%' colSpan='1/13' rowSpan='7/13'>
        <Title>Booking Info</Title>
        <BookingInfo className="multiCols" cols={6} rowSpan='2/3' >
          <span><b>S.No</b></span>
          <span><b>Booking Id</b></span>
          <span><b>Booking Date</b></span>
          <span><b>Receiver Name</b></span>
          <span><b>Receiver Ph.No</b></span>
          <span><b>Cancel Booking</b></span>
        </BookingInfo>
        {bookings?.map(item => {
          count++;
          return (
            <BookingInfo className="multiCols" cols={6} rowSpan={`${count}/${count+1}`} >
              <span>1</span>
              <span>{item.id}</span>
              <span>{new Date(item.pickUpDate).toDateString()}</span>
              <span>{item.receiver.name}</span>
              <span>{item.receiver.phNo}</span>
              <span><button onClick={() => onCancelBooking(item.id, item.sender.name)}>Cancel</button></span>
            </BookingInfo>
          )
        })}
      </BookingContainer>
    </ProfileContainer>
  );
}

export default Profile;