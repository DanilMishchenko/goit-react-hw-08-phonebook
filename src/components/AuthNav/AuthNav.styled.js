import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 8px 8px;
  outline: 0;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: #0d3c3b;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3),
    1px 1px 5px rgba(255, 255, 255, 1);

  cursor: pointer;
  :not(:last-child) {
    margin-right: 16px;
  }

  :hover {
    background-color: rgba(255, 175, 0, 1);
  }
`;
