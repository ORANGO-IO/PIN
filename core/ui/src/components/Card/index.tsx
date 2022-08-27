import React from "react";
import Badge from "../Badge";
import Container from "./styles";

interface CardProps {
  subtitleTexts: { id: string; text: string }[];
  title: string;
  badges?: {
    id: string;
    text: string;
    colorBackground?: string;
    colorText?: string;
  }[];
}

const Card: React.FC<CardProps> = ({ subtitleTexts, badges = [], title }) => (
  <Container>
    <p className="title">
      {title}{" "}
      {badges.map((badge) => (
        <Badge
          key={badge.id}
          background={badge.colorBackground}
          colorText={badge.colorText}
        >
          {badge.text}
        </Badge>
      ))}
    </p>
    <div className="subtitle">
      {subtitleTexts.map((subtitle) => (
        <p key={subtitle.id}>{subtitle.text}</p>
      ))}
    </div>
  </Container>
);

export default Card;
