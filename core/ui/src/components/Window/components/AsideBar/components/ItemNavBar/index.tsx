import React, { ButtonHTMLAttributes } from 'react';
import Container from './styles';

/* global HTMLButtonElement */

interface IItemNavBarrops extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: 'active' | 'disabled' | 'normal';
  text: string;
  element: React.ReactNode;
}

const ItemNavBar: React.FC<IItemNavBarrops> = ({
  status,
  text,
  element,
  ...rest
}) => (
  <Container status={status}>
    <button disabled={status === 'disabled'} type="button" {...rest}>
      <div>{element}</div>
      <p>{text}</p>
    </button>
  </Container>
);

export default ItemNavBar;
