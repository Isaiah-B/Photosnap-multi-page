import { AppLink } from '../cta/cta.component';

import {
  Row2Container,
  Row2ImageWrapper,
  Row2TextBox,
  Row2TextContent,
  Row2TextContentWrapper,
} from './row-2.styles';

interface Row2Props {
  title: string,
  description: string,
  linkText?: string | null,
  images: {
    desktop: string,
    tablet: string,
    mobile: string,
  },
  alt?: string,
  theme?: 'light' | 'dark',
  reversed?: boolean,
  accent?: boolean,
}

function Row2Link({ theme, linkText }: {
  theme: Row2Props['theme'], linkText: Row2Props['linkText']
}) {
  return (
    <>
      {
        theme === 'light'
          ? <AppLink to={'#'} linkType='link-light'>{linkText}</AppLink>
          : <AppLink to={'#'} linkType='link-dark'>{linkText}</AppLink>
      }
    </>
  );
}

export default function Row2({
  title,
  description,
  linkText=null,
  images,
  alt='',
  theme='light',
  reversed=false,
  accent=false,
}: Row2Props) {
  return (
    <Row2Container reversed={reversed}>
      <Row2TextBox theme={theme}>
        <Row2TextContentWrapper className={accent ? 'accent' : ''}>
          <Row2TextContent>
            <h1>{title}</h1>
            <p>{description}</p>

            {
              linkText
                ? <Row2Link theme={theme} linkText={linkText} />
                : null
            }
            
          </Row2TextContent>
        </Row2TextContentWrapper>
      </Row2TextBox>

      <Row2ImageWrapper>
        <picture>
          <source media='(max-width: 656px)' srcSet={images.mobile} />
          <source media='(max-width: 872px)' srcSet={images.tablet} />
          <img src={images.desktop} alt={alt} />
        </picture>
      </Row2ImageWrapper>
    </Row2Container>
  );
}