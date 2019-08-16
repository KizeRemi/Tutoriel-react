import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuLink = styled(NavLink)`
  text-decoration: inherit;
  color: inherit;
  text-transform: uppercase;
  font-weight: bold;

  &.active {
    border-bottom: 2px solid white;
  }
`;

export default MenuLink;
