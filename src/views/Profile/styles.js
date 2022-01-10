import styled from "styled-components";
import { GridContainer } from "../../globalStyles";

export const ProfileContainer = styled(GridContainer)`
  width: 80%;
  margin: auto;
`;

export const InfoContainer = styled(GridContainer)``;

export const Title = styled.h1`
  margin: 0;
  text-decoration: underline orange;
  text-align: center;
`;

export const ProfileInfo = styled.div`
  padding: 0 50px;
  font-size: 1.15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: yellow;
  color: purple;
  font-family: 700;
`;

export const BookingContainer = styled(GridContainer)``;

export const BookingInfo = styled(GridContainer)`
  justify-content: center;
  align-items: center;
  text-align: center;
`;