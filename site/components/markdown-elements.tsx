/* istanbul ignore file */
import * as React from 'react';
import {
  Link as StyledLink,
  styled,
  css,
  getTypePresetFromTheme,
  getSizingFromTheme,
  getColorFromTheme,
  TypePresetKeys,
} from 'newskit';
import Link from 'next/link';
import {LegacyBlock} from './legacy-block';
import slugify from '../helpers/slugify';

interface TextProps {
  children?: string;
}

interface DocLinkProps {
  children: React.ReactNode;
  href: string;
}

interface TableProps {
  children: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getText = (children: any) => {
  let label = '';
  React.Children.forEach(children, child => {
    if (typeof child === 'string') {
      label += child;
    }
    if (child.props && child.props.children) {
      label += getText(child.props.children);
    }
  });
  return label;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cleanAnchor = (anchor: any) => slugify(getText(anchor));

const Code: React.FC<TextProps> = ({children}) => (
  <LegacyBlock>{children}</LegacyBlock>
);

interface HeadingContainerProps {
  as: React.ElementType;
  font: TypePresetKeys;
  weight?: number;
  lineHeight?: number;
  size?: string;
  border?: boolean;
  marginBottom?: string;
  marginTop?: string;
  paddingTop?: string;
  wrapText?: boolean;
}

const TextElement = styled.span<HeadingContainerProps>`
  ${getTypePresetFromTheme(undefined, 'font')};
  color: ${getColorFromTheme('inkBase')};
  margin-bottom: ${getSizingFromTheme('sizing050')};
  font-weight: ${({weight}) => weight || null};
  line-height: ${({lineHeight}) => lineHeight || null};
  font-size: ${({size}) => size || null};
  margin-top: ${({marginTop}) => marginTop || null};
  margin-bottom: ${({marginBottom}) => marginBottom || null};
  padding-top: ${({paddingTop}) => paddingTop || null};
  border-bottom: ${({theme, border}) =>
    border ? `solid 1px ${theme.colors.interface040}` : null};
  padding-bottom: ${({theme, border}) =>
    border ? theme.sizing.sizing030 : null};
  ${({wrapText}) =>
    wrapText &&
    css`
      overflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
    `};
`;

export const Heading = ({
  element,
  fontType,
  children,
  weight,
  size,
  border,
  id,
  wrapText,
}: {
  element: React.ElementType;
  fontType: TypePresetKeys;
  children?: React.ReactChild;
  weight?: number;
  size?: string;
  border?: boolean;
  id?: string;
  wrapText?: boolean;
}) => (
  <TextElement
    id={id}
    as={element}
    marginBottom="8px"
    marginTop="-50px"
    paddingTop="70px"
    font={fontType}
    weight={weight}
    size={size}
    border={border}
    wrapText={wrapText}
  >
    <React.Fragment>{children}</React.Fragment>
  </TextElement>
);

const ListItem: React.FC<TextProps> = ({children}) => (
  <TextElement as="li" font="body030" marginBottom="0">
    {children}
  </TextElement>
);

const Paragraph: React.FC<TextProps> = ({children}) => (
  <TextElement as="p" font="body030">
    {children}
  </TextElement>
);

const UnorderedList = ({children}: TextProps) => <ul>{children}</ul>;

const InlineCode = styled.code`
  background-color: rgba(27, 31, 35, 0.05);
  color: #000;
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
  font-family: monospace;
`;

const Blockquote = styled.blockquote`
  background-color: rgba(27, 31, 35, 0.03);
  border-radius: 3px;
  margin: 0;
  padding: 1em 3em;
`;

export const Table = styled.table`
  ${getTypePresetFromTheme('body020')}
  box-shadow: 0 3px 4px 2px ${getColorFromTheme('interface010')};

  &,
  td,
  th {
    color: ${getColorFromTheme('inkContrast')};
    border-spacing: 0;
    border: solid 1px ${getColorFromTheme('interface040')};
  }

  td,
  th {
    padding: ${getSizingFromTheme('sizing020')}
      ${getSizingFromTheme('sizing030')};
    border-top: none;
  }
`;

const SectionLink = styled.a<{offset?: number}>`
  display: block;
  position: relative;
  top: ${({offset = 0}) => `${-offset}px`};
  visibility: hidden;
`;

export const DocLink: React.FC<DocLinkProps> = ({children, href}) => {
  const parts = href.split('#');
  const internal =
    (parts[0] === '' && parts[1] !== '') || !href.includes('http');
  return (
    <Link href={href}>
      <StyledLink href={href} {...(internal ? {} : {target: '_blank'})}>
        {children}
      </StyledLink>
    </Link>
  );
};

export const H1 = ({children}: TextProps) => (
  <React.Fragment>
    <Heading
      id={children && children.toLowerCase().replace(/\s+/g, '-')}
      size="40px"
      weight={200}
      element="h1"
      fontType="heading030"
      wrapText
    >
      {children}
    </Heading>
  </React.Fragment>
);

export const H2 = ({children, offset}: TextProps & {offset: number}) => (
  <React.Fragment>
    <SectionLink
      id={children && children.toLowerCase().replace(/\s+/g, '-')}
      offset={offset}
    />
    <Heading element="h2" fontType="heading020" weight={600} border>
      {children}
    </Heading>
  </React.Fragment>
);

export const H3 = ({children}: TextProps) => (
  <Heading weight={400} element="h3" fontType="font500" border>
    {children}
  </Heading>
);

const ScrollableTable = ({children}: TableProps) => (
  <div style={{overflowX: 'auto', width: '100%'}}>
    <Table>{children}</Table>
  </div>
);

export default {
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: ({children}: TextProps) => (
    <Heading weight={600} element="h4" fontType="heading010">
      {children}
    </Heading>
  ),
  h5: ({children}: TextProps) => (
    <Heading element="h5" fontType="heading010">
      {children}
    </Heading>
  ),
  h6: ({children}: TextProps) => (
    <Heading element="h6" fontType="body020">
      {children}
    </Heading>
  ),
  li: ListItem,
  p: Paragraph,
  ul: UnorderedList,
  inlineCode: ({children}: TextProps) => <InlineCode>{children}</InlineCode>,
  blockquote: ({children}: TextProps) => <Blockquote>{children}</Blockquote>,
  a: DocLink,
  table: ScrollableTable,
};
