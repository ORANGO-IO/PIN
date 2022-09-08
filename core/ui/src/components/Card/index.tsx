import React, { ReactNode } from 'react'
import Container from './styles'

interface ICardProps {
  subtitleTexts: string | ReactNode ;
  title: string | ReactNode;
}

const Card: React.FC<ICardProps> = ({ subtitleTexts, title }) => (
  <Container>
    <p className="title">
      {title}
    </p>
    <div className="subtitle">
      {typeof subtitleTexts === 'string' && <p>{subtitleTexts}</p>}
      {subtitleTexts && typeof subtitleTexts !== 'string' && subtitleTexts}
    </div>
  </Container>
)

export default Card
