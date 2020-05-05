import React from 'react';
import { Container } from './styles';

interface TooltipPropss {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipPropss> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
