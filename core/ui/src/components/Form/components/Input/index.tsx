import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import Container from './styles';
/* global HTMLInputElement */
/* global HTMLLabelElement */
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  label?: string;
  labelOptions?: LabelHTMLAttributes<HTMLLabelElement>;
}

const Input: React.FC<IInputProps> = ({
  labelPosition = 'left',
  label,
  labelOptions,
  ...rest
}) => (
  <Container labelPosition={labelPosition}>
    {label && (
      <label htmlFor={rest.id} {...labelOptions}>
        {label}
      </label>
    )}
    <input {...rest} />
  </Container>
);

export default Input;
