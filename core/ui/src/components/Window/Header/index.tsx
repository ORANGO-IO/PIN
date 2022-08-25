import React from 'react'
import HeaderButton from './components/HeaderButton'
import Container from './styled'
/* global HTMLButtonElement */

interface HeaderProps {
  title: string;
  buttonClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonDisabled?: boolean;
  leftComponent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  buttonDisabled,
  buttonClick,
  leftComponent
}) => (
  <Container>
    <div>
      <HeaderButton disabled={buttonDisabled} onClick={buttonClick}>
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
      </HeaderButton>
    </div>
    <p>{title}</p>
    <div>{leftComponent}</div>
  </Container>
)

export default Header
