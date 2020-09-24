import React from 'react';
import {styled, getSpacingFromTheme, getStylePreset} from '../utils/style';
import {Link} from '../link';
import {Stack} from '../stack';
import {getToken} from '../utils/get-token';
import {
  useTheme,
  TypographyPresetKeys,
  SpacePresetKeys,
  StylePresetKeys,
} from '../theme';
import {Block} from '../block';
import {TextBlock} from '../text-block/text-block';
import {BylineProps, BylineData} from './types';

const InlineBlock = styled(Block)`
  display: inline-flex;
`;

const getStyledTextBlock = (
  typographyPreset: TypographyPresetKeys,
  stylePreset: StylePresetKeys,
  spaceInline: SpacePresetKeys,
) => ({
  children,
  withSpace = false,
  ariaHidden,
}: {
  children: React.ReactNode;
  withSpace?: boolean;
  ariaHidden?: boolean;
}) => {
  const StyledTextBlock = (
    <TextBlock
      aria-hidden={ariaHidden}
      as="span"
      overrides={{
        typographyPreset,
        stylePreset,
      }}
    >
      {children}
    </TextBlock>
  );

  if (withSpace) {
    return (
      <InlineBlock overrides={{spaceInline}}>{StyledTextBlock}</InlineBlock>
    );
  }

  return StyledTextBlock;
};

const renderLink = (
  {href, author, ariaLabel}: Partial<BylineData>,
  overrides: {
    stylePreset: StylePresetKeys;
    typographyPreset: TypographyPresetKeys;
  },
) => (
  <Link
    overrides={overrides}
    href={href!}
    rel="author"
    aria-label={ariaLabel || `more by ${author}`}
    data-author={author}
  >
    {author}
  </Link>
);

const isLastItem = (currentIndex: number, length: number) =>
  currentIndex === length - 1;

export const Byline: React.FC<BylineProps> = ({bylineData, overrides}) => {
  const theme = useTheme();
  const spaceStack = getToken({theme, overrides}, 'byline', '', 'spaceStack');

  const linkStyles = getToken(
    {theme, overrides},
    'byline.link',
    'link',
    'stylePreset',
  );
  const linkTypes = getToken(
    {theme, overrides},
    'byline.link',
    'link',
    'typographyPreset',
  );

  const textStyles = getToken({theme, overrides}, 'byline', '', 'stylePreset');
  const textTypes = getToken(
    {theme, overrides},
    'byline',
    '',
    'typographyPreset',
  );

  const dividerSpace = getToken(
    {theme, overrides},
    'byline.divider',
    'divider',
    'spaceInline',
  );

  const PipeContainer = styled.span<{overrides: BylineProps['overrides']}>`
    margin-left: ${getSpacingFromTheme(dividerSpace)};
    ${getStylePreset('byline.divider', 'divider')}
    user-select: none;
  `;

  const StyledTextBlockWithSpace = getStyledTextBlock(
    textTypes,
    textStyles,
    dividerSpace,
  );

  interface bylineItemProps {
    children?: Array<JSX.Element | string | undefined> | JSX.Element | string;
    lastItem: boolean;
  }

  const BylineItem = ({lastItem, children}: bylineItemProps) => (
    <StyledTextBlockWithSpace withSpace={!lastItem}>
      {children}
      {!lastItem && <PipeContainer overrides={overrides}>|</PipeContainer>}
    </StyledTextBlockWithSpace>
  );

  const byLineAuthorInfo = (title?: string, location?: string) => {
    if (location && title) {
      return `${title}, ${location}`;
    }
    if (title) {
      return title;
    }
    return location;
  };

  return (
    <Stack flow="horizontal-center" inline wrap="wrap" spaceStack={spaceStack}>
      {bylineData.map(
        ({author, href, title, location, ariaLabel}: BylineData, i) => {
          const lastItem = isLastItem(i, bylineData.length);
          const hasLinkOnly = href && (!title && !location);
          const hasLinkAndAuthorInfo = href && (title || location);
          const hasNoLink = !href;
          const authorNameLink = renderLink(
            {author, href, ariaLabel},
            {
              stylePreset: linkStyles,
              typographyPreset: linkTypes,
            },
          );

          return (
            <>
              {hasLinkOnly && (
                <BylineItem lastItem={lastItem}>{authorNameLink}</BylineItem>
              )}

              {hasLinkAndAuthorInfo && (
                <BylineItem lastItem={lastItem}>
                  {authorNameLink}

                  <StyledTextBlockWithSpace ariaHidden>
                    {`,${'\u00A0'}`}
                  </StyledTextBlockWithSpace>
                  {byLineAuthorInfo(title, location)}
                </BylineItem>
              )}

              {hasNoLink && (
                <BylineItem lastItem={lastItem}>
                  {author}
                  {title && `, ${title}`}
                  {location && `, ${location}`}
                </BylineItem>
              )}
            </>
          );
        },
      )}
    </Stack>
  );
};
