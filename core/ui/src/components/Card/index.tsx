import React from 'react'
import Badge from '../Badge'
import Container from './styles'

interface CardProps{
    subtitleTexts:{key:string, text:string}[]
}

const Card:React.FC<CardProps> = ({ subtitleTexts }) => (
    <Container>
        <p className='title'>
            testestsetestes <Badge background='linear-gradient(180deg, #30CDFF 0%, #0D82A7 100%)' colorText='#fff'>
              Internado
            </Badge>
        </p>
        <div className='subtitle'>
            {subtitleTexts.map((subtitle) => <p key={subtitle.key}>{subtitle.text}</p>)}
        </div>
    </Container>
)

export default Card
