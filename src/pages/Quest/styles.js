import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 48px;
`;

export const VerticalCentered = styled.div`
  height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: fit-content;
  max-height: 500px;
  max-width: 500px;
  overflow-y: auto;
  margin-top: 72px;
  padding: 32px 48px;
  height: 80%;
  background: #1f2124;
  border: 1px solid #cb9bde;
  border-radius: 6px;

  &::-webkit-scrollbar {
    width: 6px; /* Largura da barra de rolagem */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor da alça da barra de rolagem */
    border-radius: 3px; /* Raio da alça da barra de rolagem */
  }

  &::-moz-scrollbar {
    width: 6px; /* Largura da barra de rolagem */
  }
  &::-moz-scrollbar-thumb {
    background-color: #888; /* Cor da alça da barra de rolagem */
    border-radius: 3px; /* Raio da alça da barra de rolagem */
  }
`;

export const Title = styled.h1`
  color: #af69cd;
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
`;

export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const AreaCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 8px;
  margin-top: 16px;
`;

export const LabelCheckbox = styled.label`
  font-size: 14px;
  letter-spacing: 3px;
  color: #cfcfd8;
`;

export const InputCheckbox = styled.input`
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
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #cfcfd8 !important;
    -webkit-box-shadow: 0 0 0 40px #1f2124 inset !important;
  }
`;

export const LabelLarge = styled.label`
  font-size: 18px;
  letter-spacing: 3px;
  color: #cfcfd8;
  margin-bottom: 10;
`;

export const LabelInput = styled.label`
  font-size: 12px;
  letter-spacing: 1px;
  color: #cfcfd8;
`;

export const Input = styled.input`
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
`;

export const AreaButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 16px 0px 8px 0px;
`;

export const ButtonPrimary = styled.button`
  transition: 0.3s;
  width: 100%;
  height: 100%;

  cursor: pointer;
  border: 1px solid #cfcfd8;
  border-radius: 6px;
  background: unset;

  color: #cfcfd8;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.4px;

  padding: 12px 16px;

  &:hover {
    background: rgb(130, 87, 229);
  }
`;

export const ButtonSecondary = styled.button`
  transition: 0.3s;
  width: 100%;
  height: 100%;
  vertical-align: center;

  cursor: pointer;
  border: 1px solid #cfcfd8;
  border-radius: 6px;
  background: unset;

  color: #cfcfd8;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.4px;

  padding: 8px 12px;

  &:hover {
    background: rgb(130, 87, 229, 0.8);
  }
  &:disabled {
    cursor: default;
    background: rgb(130, 87, 229, 0.3);
  }
`;

export const LinkPrimary = styled.a`
  transition: 0.3s;
  cursor: pointer;
  color: #cb9bde;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #cfcfd8;
  }
`;

export const LinkSecondary = styled.a`
  transition: 0.3s;
  cursor: pointer;
  color: #cb9bde;
  font-size: 12px;

  &:hover {
    color: #cfcfd8;
  }
`;

export const Divisao = styled.div`
  width: 80%;
  height: 0px;
  border-bottom: 2px solid #cb9bde;
  background: unset;
  margin: 16px 0px;
`;

export const IconGoogle = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
