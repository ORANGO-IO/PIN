import React from 'react'
import Container from './styles'

interface IHeaderChartProps{
    children:React.ReactNode
}

const HeaderChart:React.FC<IHeaderChartProps> = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default HeaderChart
