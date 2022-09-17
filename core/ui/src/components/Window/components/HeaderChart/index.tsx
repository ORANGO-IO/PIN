import React from 'react';
import Container from './styles';

interface IHeaderChartProps {
  children: React.ReactNode;
  fixed?: boolean;
}

const HeaderChart: React.FC<IHeaderChartProps> = ({ children, fixed }) => (
  <Container fixed={fixed}>{children}</Container>
);

export default HeaderChart;
