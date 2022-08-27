import React, { HTMLAttributes } from 'react'
import Container from './styles'

/* global HTMLElement */
interface IBadgeProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  colorText?: string;
  background?: string;
}

const Badge: React.FC<IBadgeProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
)

export default Badge
