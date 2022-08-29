import React from 'react'
import Button from '@core/ui/src/components/Button'
import Container from './styles'
/* global HTMLButtonElement */

interface IHeaderProps {
  title: string;
  buttonClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonDisabled?: boolean;
  rightComponent?: React.ReactNode;
  buttonLabel?:string

}

const Header: React.FC<IHeaderProps> = ({
  title,
  buttonDisabled,
  buttonClick,
  rightComponent,
  buttonLabel
}) => (
  <Container>
    <div className='button_header_container'>
      <Button style={{ width: '31px', height: '31px' }} customType='orange-warning' type="button" disabled={buttonDisabled} onClick={buttonClick}>
        <svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 12L1 6.5L7 1"
            stroke="#DFDBD2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
      <p>{buttonLabel}</p>
    </div>
    <p>{title}</p>
    <div>{rightComponent}</div>
  </Container>
)

export default Header
