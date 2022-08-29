import React, { HTMLAttributes } from 'react'
import Container from './styles'
/* global HTMLElement */
interface IContentProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Content: React.FC<IContentProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
)

export default Content
