import React, { HTMLAttributes } from 'react';
import Container from './styles';
/* global HTMLElement */
interface IMainProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Main: React.FC<IMainProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Main;
