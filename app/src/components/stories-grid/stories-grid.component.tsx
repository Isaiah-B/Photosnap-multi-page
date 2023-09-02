import { StoriesGridContainer } from './stories-grid.styles';

export default function StoriesGrid({ children }: { children: React.ReactNode }) {
  return (
    <StoriesGridContainer>
      {children}
    </StoriesGridContainer>
  );
}