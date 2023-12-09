import styled from "styled-components";

export const AreaInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 8px;
  margin-top: 16px;
`;

export const LabelLarge = styled.label`
  font-size: 14px;
  letter-spacing: 3px;
  color: #cfcfd8;
`;

export const InputStyled = styled.input`
  height: 20px;
  border-radius: 6px 6px 0px 0px;
  background: unset;
  color: #cfcfd8;
  font-size: 12px;

  &::placeholder {
    font-size: 12px;
    color: #8c8c8c;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active{
      -webkit-text-fill-color: #cfcfd8 !important;
      -webkit-box-shadow: 0 0 0 40px #1f2124 inset !important;
  }
`;
