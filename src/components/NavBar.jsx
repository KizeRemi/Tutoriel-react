import React from 'react';

import Navlayout from './NavLayout';
import Logo from '../assets/images/eleven_labs.svg';
import LogoImage from './LogoImage';
import MenuLayout from './MenuList';
import MenuLink from './MenuLink';
import NavButton from './NavButton';

const NavBar = () => (
  <Navlayout>
    <LogoImage src={Logo} alt="logo eleven labs" />
    <MenuLayout>
      <li>
        <MenuLink exact to="/">Palmarès</MenuLink>
      </li>
      <li>
        <MenuLink to="/astronauts">Astronautes</MenuLink>
      </li>
      <li>
        <MenuLink to="/rules">Règles du jeu</MenuLink>
      </li>
      <li>
        <NavButton>
          <MenuLink to="/join">Rejoindre une planète</MenuLink>
        </NavButton>
      </li>
    </MenuLayout>
  </Navlayout>
);

export default NavBar;
