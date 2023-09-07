import { FeatureContainer, IconWrapper } from './feature.styles';

interface FeatureProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  title: string,
  description: string,
}

export default function Feature({ Icon, title, description }: FeatureProps) {
  return (
    <FeatureContainer>
      <IconWrapper>
        <Icon aria-hidden />
      </IconWrapper>

      <h3>{title}</h3>

      <p>{description}</p>
    </FeatureContainer>
  );
}