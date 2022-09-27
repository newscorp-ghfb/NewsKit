import {styled, Flag, Visible} from 'newskit';
import React from 'react';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import {DocSearchHitExtended, DocSearchHitProps} from './types';

const StyledLink = styled.a`
  display: flex !important;
  align-items: center;
`;

const Link = ({
  as,
  href,
  ...props
}: NextLinkProps & {children: React.ReactNode; href: string}) => (
  <NextLink href={href} as={as} passHref>
    <StyledLink href={href} {...props} />
  </NextLink>
);

function displayTag(pathname: string) {
  let text = '';
  if (pathname.startsWith('/components/')) {
    text = 'component';
  }
  if (pathname.startsWith('/theme/')) {
    text = 'theme';
  }
  if (pathname.startsWith('/patterns/')) {
    text = 'pattern';
  }
  if (pathname.startsWith('/about/')) {
    text = 'about';
  }
  if (pathname.startsWith('/getting-started/')) {
    text = 'guide';
  }

  return (
    <Visible md lg xl>
      <Flag
        size="small"
        overrides={{
          marginInlineEnd: 'space050',
          stylePreset: 'searchTag',
          typographyPreset: 'utilityLabel010',
        }}
      >
        {text}
      </Flag>
    </Visible>
  );
}

export const DocSearchHit = (props: DocSearchHitProps) => {
  const {children, hit} = props as {
    hit: DocSearchHitExtended;
    children: React.ReactNode;
  };

  if (hit.pathname) {
    return (
      <Link href={hit.pathname} as={hit.as} passHref>
        {children}
        {displayTag(hit.pathname)}
      </Link>
    );
  }

  // DocSearch stores the old results in its cache
  // hit.pathname won't be defined for them.
  return <Link href={hit.url}>{children}</Link>;
};
