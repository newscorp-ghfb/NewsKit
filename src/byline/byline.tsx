import React from 'react';
import {styled, getStylePreset, MQ, getResponsiveSpace} from '../utils/style';
import {LinkInline} from '../link';
import {Stack} from '../stack';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';
import {Block} from '../block';
import {TextBlock} from '../text-block';
import {BylineProps, BylineData} from './types';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {extractLogicalPropsFromOverrides} from '../utils/logical-properties';

const InlineBlock = styled(Block)`
  display: inline-flex;
`;

const getStyledTextBlock = (
  typographyPreset: MQ<string>,
  stylePreset: MQ<string>,
  spaceInline: MQ<string>,
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
      typographyPreset={typographyPreset}
      stylePreset={stylePreset}
    >
      {children}
    </TextBlock>
  );

  if (withSpace) {
    return (
      <InlineBlock spaceInline={spaceInline}>{StyledTextBlock}</InlineBlock>
    );
  }

  return StyledTextBlock;
};

const renderLink = (
  {href, author, ariaLabel}: Partial<BylineData>,
  overrides: {
    stylePreset: MQ<string>;
    typographyPreset: MQ<string>;
  },
) => (
  <LinkInline
    overrides={overrides}
    href={href!}
    rel="author"
    aria-label={ariaLabel || `more by ${author}`}
    data-author={author}
  >
    {author}
  </LinkInline>
);

const isLastItem = (currentIndex: number, length: number) =>
  currentIndex === length - 1;

const ThemelessByline = React.forwardRef<HTMLDivElement, BylineProps>(
  ({bylineData, overrides = {}}, ref) => {
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

    const textStyles = getToken(
      {theme, overrides},
      'byline',
      '',
      'stylePreset',
    );
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
      ${getResponsiveSpace(
        'marginLeft',
        'byline.divider',
        'divider',
        'spaceInline',
      )}
      ${getStylePreset('byline.divider', 'divider')}
    user-select: none;
    `;

    const StyledTextBlockWithSpace = getStyledTextBlock(
      textTypes,
      textStyles,
      dividerSpace,
    );

    interface BylineItemProps {
      children?: Array<JSX.Element | string | undefined> | JSX.Element | string;
      lastItem: boolean;
    }

    const BylineItem = ({lastItem, children}: BylineItemProps) => (
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

    const logicalProps = extractLogicalPropsFromOverrides(overrides);

    return (
      <Stack
        ref={ref}
        flow="horizontal-center"
        inline
        wrap="wrap"
        spaceStack={spaceStack}
        {...logicalProps}
      >
        {bylineData.map(
          ({author, href, title, location, ariaLabel, key}: BylineData, i) => {
            const lastItem = isLastItem(i, bylineData.length);
            const hasLinkOnly = href && !title && !location;
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
              <React.Fragment key={key}>
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
              </React.Fragment>
            );
          },
        )}
      </Stack>
    );
  },
);

export const Byline = withOwnTheme(ThemelessByline)({
  defaults,
});
