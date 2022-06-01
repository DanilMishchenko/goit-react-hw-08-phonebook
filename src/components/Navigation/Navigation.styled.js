import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  padding-top: 24px;
  padding-bottom: 24px;
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.03em;

  :not(:last-child) {
    margin-right: 16px;
  }

  &.active {
    color: rgba(255, 175, 0, 1);
  }

  ::after {
    display: block;
    content: '';
    width: 0;
    height: 2px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 119, 0, 1) 20%,
      rgba(255, 232, 0, 1) 90%
    );
    transition: width 500ms ease-in-out;
  }

  &.active::after {
    width: 50%;
  }

  &:hover {
    color: rgba(255, 175, 0, 1);
  }
`;
