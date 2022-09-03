import React, { ReactNode } from 'react'
import Container from './styles'

interface ICardProps {
  subtitleTexts: { id: string; text: string | ReactNode }[];
  title: string | ReactNode;
}

const Card: React.FC<ICardProps> = ({ subtitleTexts, title }) => (
  <Container>
    <p className="title">
      {title}
    </p>
    <div className="subtitle">
      {subtitleTexts.map((subtitle) => (
        <p key={subtitle.id}>{subtitle.text}</p>
      ))}
    </div>
  </Container>
)

export default Card
