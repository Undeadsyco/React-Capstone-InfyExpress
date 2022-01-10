import styled from "styled-components";
import { GridContainer, NestedContainer } from "../../globalStyles";

export const FormContainer = styled(GridContainer)`
  display: ${props => props.display};
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, .6);
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 40%;
  height: 95%;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(6 ,1fr);
  grid-template-rows: repeat(12, 1fr);
  
`;

export const Title = styled.h1`
  grid-column: 1/7;
  margin: 0;
`;

export const Heading = styled.h3`
  margin: 0;
`;

export const FormSection = styled(GridContainer)`
  padding: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 100%;
`;

export const BtnBox = styled.div`
  grid-column: ${props => props.colSpan};
  grid-row: ${props => props.rowSpan};
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Btns = styled.button.attrs()`
  height: 30px;
  width: 70px;
  margin: 0 5px;
  border-radius: 20px;

  &:hover{
    background-color: rgb(225, 225, 225);
    cursor: pointer;
    border-style: ridge;
  }
`;