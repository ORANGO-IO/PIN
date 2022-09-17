import React, { ButtonHTMLAttributes } from 'react';
import Container from './styles';
/* global HTMLButtonElement */

interface IListOptionProps {
  text: string;
  element: React.ReactNode;
  buttonElement: React.ReactNode;
  buttonOptions?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const ListOption: React.FC<IListOptionProps> = ({
  buttonElement,
  buttonOptions,
  element,
  text,
}) => (
  <Container>
    <div>{element}</div>
    <p>{text}</p>
    <button {...buttonOptions}>{buttonElement}</button>
  </Container>
);

export default ListOption;
