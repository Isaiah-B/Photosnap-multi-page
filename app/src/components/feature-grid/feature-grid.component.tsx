import { FeatureGridContainer } from './feature-grid.styles';

interface FeatureGridProps {
  preview?: boolean,
  children: React.ReactNode,
}
export default function FeatureGrid({ preview=false, children }: FeatureGridProps) {
  return (
    <FeatureGridContainer className={preview ? 'preview' : ''}>
      {children}
    </FeatureGridContainer>
  );
}