/* eslint-disable @typescript-eslint/no-explicit-any */
/* istanbul ignore file */
import * as React from 'react';
import {
  styled,
  css,
  getTypographyPresetFromTheme,
  getSizingFromTheme,
  getColorFromTheme,
} from 'newskit';
import {LegacyBlock} from './legacy-block';
import slugify from '../helpers/slugify';
import {Link} from './link';

export interface TextProps {
  children: React.ReactNode;
}

interface DocLinkProps {
  children: React.ReactNode;
  href: string;
}

export interface TableProps {
  children: React.ReactNode;
}

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

export const cleanAnchor = (anchor: any) => slugify(getText(anchor));

const Code: React.FC<TextProps> = ({children}) => (
  <LegacyBlock>{children}</LegacyBlock>
);

interface HeadingContainerProps {
  as: React.ElementType;
  font: string;
  weight?: number;
  lineHeight?: number;
  size?: string;
  border?: boolean;
  marginBottom?: string;
  marginTop?: string;
  paddingTop?: string;
  wrapText?: boolean;
  color?: string;
}

const TextElement = styled.span<HeadingContainerProps>`
  ${getTypographyPresetFromTheme(undefined, 'font')};
  color: ${getColorFromTheme('inkContrast', 'color')};
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
  fontType: string;
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
    {children}
  </TextElement>
);

const ListItem: React.FC<TextProps> = ({children}) => (
  <TextElement as="li" font="utilityBody020" marginBottom="0">
    {children}
  </TextElement>
);

const Paragraph: React.FC<TextProps> = ({children}) => (
  <TextElement as="p" font="utilityBody020" color="inkBase">
    {children}
  </TextElement>
);

const UnorderedList = ({children}: TextProps) => <ul>{children}</ul>;

export const InlineCode = styled.code`
  background-color: rgba(27, 31, 35, 0.05);
  color: ${getColorFromTheme('inkSubtle')};
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
  font-family: monospace;
`;

InlineCode.displayName = 'InlineCode';

const Blockquote = styled.blockquote`
  background-color: ${getColorFromTheme('inkSubtle')};
  border-radius: 3px;
  margin: 0;
  padding: 1em 3em;
`;

export const Table = styled.table`
  ${getTypographyPresetFromTheme('utilityBody020')}
  background-color: ${getColorFromTheme('interface010')};
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

  th {
    text-align: left;
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  margin-bottom: 40px;
`;

const SectionLink = styled.a<{offset?: number}>`
  display: block;
  position: relative;
  top: ${({offset = 0}) => `${-offset}px`};
  visibility: hidden;
`;

export const DocLink: React.FC<DocLinkProps> = ({children, href, ...rest}) => {
  const parts = href.split('#');
  const internal =
    (parts[0] === '' && parts[1] !== '') || !href.includes('http');
  return (
    <Link {...(internal ? {} : {target: '_blank'})} href={href} {...rest}>
      {children}
    </Link>
  );
};

export const H1 = ({children}: TextProps) => (
  <>
    <Heading
      id={
        (children &&
          typeof children === 'string' &&
          children.toLowerCase().replace(/\s+/g, '-')) as string | undefined
      }
      element="h1"
      fontType="utilityHeading050"
      wrapText
    >
      {children as string}
    </Heading>
  </>
);

export const H2 = ({children, offset}: TextProps & {offset?: number}) => {
  const id = (children &&
    typeof children === 'string' &&
    children.toLowerCase().replace(/\s+/g, '-')) as string | undefined;
  return (
    <>
      <SectionLink id={id} offset={offset} />
      <Heading element="h2" fontType="utilitySubheading040" border>
        {children as string}
      </Heading>
    </>
  );
};

export const H3 = ({children}: TextProps) => (
  <Heading element="h3" fontType="utilitySubheading020" border>
    {children as string}
  </Heading>
);

export const ScrollableTable = ({children}: TableProps) => (
  <TableWrapper>
    <Table>{children}</Table>
  </TableWrapper>
);

export const MarkdownElements = {
  code: ({children, ...props}: TextProps) => (
    <Code {...props}>{children as string}</Code>
  ),
  h1: H1,
  h2: H2,
  h3: H3,
  h4: ({children}: TextProps) => (
    <Heading element="h4" fontType="utilitySubheading010">
      {children as string}
    </Heading>
  ),
  h5: ({children}: TextProps) => (
    <Heading element="h5" fontType="utilityBody020">
      {children as string}
    </Heading>
  ),
  h6: ({children}: TextProps) => (
    <Heading element="h6" fontType="utilityBody010">
      {children as string}
    </Heading>
  ),
  li: ListItem,
  p: Paragraph,
  ul: UnorderedList,
  inlineCode: ({children}: TextProps) => <InlineCode>{children}</InlineCode>,
  blockquote: ({children}: TextProps) => <Blockquote>{children}</Blockquote>,
  a: ({children, href, ...props}: any) => (
    <DocLink {...props} href={href}>
      {children as string}
    </DocLink>
  ),
  table: ScrollableTable,
};
