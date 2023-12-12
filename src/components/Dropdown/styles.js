import { styled } from "styled-components";

export const DropdownPather = styled.div`
  width: 100%;
  margin: auto;
  user-select: none;
  position: relative;
  margin-bottom: 8px;
`;

export const DropdownBtn = styled.div`
  padding: 8px 8px 4px 0px;
  background: #1f2124;
  font-weight: 500;
  font-size: 14px;
  color: #cfcfd8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #cb9bde;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  position: absolute;
  font-weight: 500;
  font-size: 14px;
  top: 100%;
  padding: 8px;
  background: #1f2124;
  border: 1px solid #cb9bde;
  color: #cfcfd8;
  border-radius: 3px;
  width: 100%;
`;

export const DropdownItem = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 3px;
  transition: all 0.3s;

  &:hover {
    background: #171718;
  }
`;
