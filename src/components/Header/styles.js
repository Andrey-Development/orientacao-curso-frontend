import styled from "styled-components";

export const HeaderView = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  background: #171718;
`;

export const DivHeader = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 100%;
  width: auto;
`;

export const ButtonPrimary = styled.button`
  transition: 0.3s;
  width: fit-content;
  height: fit-content;

  cursor: pointer;
  border: 1px solid #f6f4fa;
  border-radius: 6px;
  background: unset;

  color: #f6f4fa;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.4px;

  padding: 8px 12px;

  &:hover {
    background: rgb(130, 87, 229);
  }
`;

export const DivRanking = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LabelHeader = styled.label`
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1.5px;
  color: #cfcfd8;
`;

export const LabelHeaderLogoff = styled.label`
  font-size: 14px;
  letter-spacing: 1.5px;
  color: #cfcfd8;
`;