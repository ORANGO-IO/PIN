import React from 'react'
import Container from './styles'

interface IChartProps{
    children:React.ReactNode
}

const Chart:React.FC<IChartProps> = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default Chart
