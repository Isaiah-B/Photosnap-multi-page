import { ReactComponent as LinkArrow } from '../../../assets/shared/desktop/arrow.svg';

import { ButtonDark, ButtonLight, LinkDark, LinkLight } from './cta.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'dark' | 'light'
  children: React.ReactNode,
}

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  linkType: 'link-dark' | 'link-light',
  to: string,
  children: React.ReactNode,
}

const CTA_TYPES = {
  dark: 'dark',
  light: 'light',
  link_dark: 'link-dark',
  link_light: 'link-light',
};

export function Button({ buttonType, children, ...otherProps }: ButtonProps) {
  const getButtonType = () => {
    return {
      [CTA_TYPES.dark]: ButtonDark,
      [CTA_TYPES.light]: ButtonLight,
    }[buttonType];
  };
  
  const SelectedComponent = getButtonType();

  return (
    <SelectedComponent
      {...otherProps}
    >
      {children}
    </SelectedComponent>
  );
}

export function AppLink({ linkType, to, children, ...otherProps}: AppLinkProps) {
  const getLinkType = () => {
    return {
      [CTA_TYPES.link_dark]: LinkDark,
      [CTA_TYPES.link_light]: LinkLight,
    }[linkType]
  }

  const SelectedComponent = getLinkType();

  return (
    <SelectedComponent
      to={to}
      {...otherProps}
    >
      {children}

     <LinkArrow />
    </SelectedComponent>
  );
}