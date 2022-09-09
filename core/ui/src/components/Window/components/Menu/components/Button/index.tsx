import React, { ButtonHTMLAttributes } from 'react';
import Container from './styles';
import menuIcon from '@core/ui/src/assets/icons/menu.svg';
/* global HTMLButtonElement */

const MenuButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => (
  <Container type="button" {...props}>
    <img src={menuIcon} alt="menu" />
  </Container>
);

export default MenuButton;
