import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import Container from './styles';
/* global HTMLInputElement */
/* global HTMLLabelElement */
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: 'Top' | 'Bottom' | 'Left' | 'Right';
  label?: string;
  labelOptions?: LabelHTMLAttributes<HTMLLabelElement>;
}

const Input: React.FC<IInputProps> = ({
  labelPosition,
  label,
  labelOptions,
  ...rest
}) => (
  <Container labelPosition={labelPosition}>
    {label && <label {...labelOptions}>{label}</label>}
    <input {...rest} />
  </Container>
);

export default Input;
