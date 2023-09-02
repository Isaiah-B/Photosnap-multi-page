import { ReactNode } from 'react';
import { FeatureGridContainer } from './feature-grid.styles';

export default function FeatureGrid({ children }: { children: ReactNode }) {
  return (
    <FeatureGridContainer>
      {children}
    </FeatureGridContainer>
  );
}