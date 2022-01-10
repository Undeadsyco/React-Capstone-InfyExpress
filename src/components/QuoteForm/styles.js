import styled from 'styled-components';
import { NestedContainer } from '../../globalStyles';

export const FormContainer = styled(NestedContainer)`
  margin-bottom: 5px;
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, .5);
  border-radius: 10px;
`;

export const Title = styled.h3`
  height: 14%;
  margin: 0;
  text-align: center;
  text-decoration: underline orange;
`;

export const InputContainer = styled.div`
  height: 18%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: ${props => props.width};
  height: 40%;
`;

export const BtnBox = styled.div`
  height: 14%;
  display: flex;
  align-items: center;
`;

export const Btn = styled.button`
  height: 80%;
  width: 25%;
  border-radius: 10px;
`;