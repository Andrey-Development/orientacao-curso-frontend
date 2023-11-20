import styled from "styled-components";

export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const LabelInput = styled.label`
  font-size: 12px;
  letter-spacing: 1px;
  color: #cfcfd8;
`;

export const InputStyled = styled.input`
  width: 250px;
  height: 28px;
  border: none;
  border-radius: 6px 6px 0px 0px;
  border-bottom: 2px solid #cb9bde;
  background: unset;
  color: #cfcfd8;
  font-size: 14px;

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
