import React, { HTMLAttributes } from 'react';
import Container from './styles';
/* global HTMLElement */
interface IContainerWindow extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const ContainerWindow: React.FC<IContainerWindow> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default ContainerWindow;
