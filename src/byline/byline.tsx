import React from 'react';
import {styled} from '../utils/style';
import {Link} from '../link';
import {Stack} from '../stack';
import {StackChild, AlignSelfValues} from '../stack-child';
import {Divider} from '../divider';

import {getToken} from '../utils/get-token';
import {
  useTheme,
  TypePresetKeys,
  SpacePresetKeys,
  StylePresetKeys,
} from '../theme';
import {Block} from '../block';
import {TextBlock} from '../text-block/text-block';
import {BylineProps, BylineData} from './types';

const InlineBlock = styled(Block)`
  display: inline-flex;
`;

const TextBlockWithPre = styled(TextBlock)`
  white-space: pre;
`;

const getStyledTextBlock = (
  typePreset: TypePresetKeys,
  stylePreset: StylePresetKeys,
  spaceInline: SpacePresetKeys,
) => ({
  children,
  withSpace = false,
}: {
  children: React.ReactNode;
  withSpace?: boolean;
}) => {
  const StyledTextBlock = (
    <TextBlockWithPre
      as="span"
      overrides={{
        typePreset,
        stylePreset,
      }}
    >
      {children}
    </TextBlockWithPre>
  );

  if (withSpace) {
    return (
      <InlineBlock overrides={{spaceInline}}>{StyledTextBlock}</InlineBlock>
    );
  }

  return StyledTextBlock;
};

const getStyledDivider = (
  stylePreset?: string,
  spaceInline?: SpacePresetKeys,
) => () => (
  <StackChild alignSelf={AlignSelfValues.Stretch}>
    <InlineBlock overrides={{spaceInline}}>
      <Divider
        vertical
        overrides={{
          stylePreset,
        }}
      />
    </InlineBlock>
  </StackChild>
);

const isLastItem = (currentIndex: number, length: number) =>
  currentIndex === length - 1;

export const Byline: React.FC<BylineProps> = ({bylineData, overrides}) => {
  const theme = useTheme();
  const space = getToken({theme, overrides}, 'byline', '', 'space');

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
    'typePreset',
  );

  const textStyles = getToken(
    {theme, overrides},
    'byline',
    'link',
    'stylePreset',
  );
  const textTypes = getToken(
    {theme, overrides},
    'byline',
    'link',
    'typePreset',
  );

  const dividerStyles = getToken(
    {theme, overrides},
    'byline.divider',
    'divider',
    'stylePreset',
  );
  const dividerSpace = getToken(
    {theme, overrides},
    'byline.divider',
    'divider',
    'spaceInline',
  );

  const StyledTextBlockWithSpace = getStyledTextBlock(
    textTypes,
    textStyles,
    dividerSpace,
  );

  const StyledDividerWithSpace = getStyledDivider(dividerStyles, dividerSpace);

  return (
    <Stack flow="horizontal-center" list inline wrap="wrap" spaceStack={space}>
      {bylineData.map(
        ({author, href, title, location, ariaLabel}: BylineData, i) => {
          const lastItem = isLastItem(i, bylineData.length);
          const isAuthorLastItem = !lastItem && !title && !location;
          const isTitleLastItem = !lastItem && !location;
          const isLocationLastItem = !lastItem;

          return (
            <>
              <Stack flow="horizontal-center" wrap="wrap" spaceStack={space}>
                <InlineBlock>
                  {href ? (
                    <InlineBlock
                      overrides={{
                        spaceInline: isAuthorLastItem ? dividerSpace : '',
                      }}
                    >
                      <Link
                        overrides={{
                          stylePreset: linkStyles,
                          typePreset: linkTypes,
                        }}
                        href={href}
                        rel="author"
                        aria-label={ariaLabel || `more by ${author}`}
                        title={title || `more by ${author}`}
                        data-author={author}
                      >
                        {author}
                      </Link>
                      {(title || location) && (
                        <StyledTextBlockWithSpace>
                          {', '}
                        </StyledTextBlockWithSpace>
                      )}
                    </InlineBlock>
                  ) : (
                    <StyledTextBlockWithSpace withSpace={isAuthorLastItem}>
                      {author}
                      {title || location ? ', ' : ''}
                    </StyledTextBlockWithSpace>
                  )}
                  {isAuthorLastItem && <StyledDividerWithSpace />}
                </InlineBlock>

                {title && (
                  <InlineBlock>
                    <StyledTextBlockWithSpace withSpace={isTitleLastItem}>
                      {title}
                      {location ? ', ' : ''}
                    </StyledTextBlockWithSpace>
                    {isTitleLastItem && <StyledDividerWithSpace />}
                  </InlineBlock>
                )}

                {location && (
                  <InlineBlock>
                    <StyledTextBlockWithSpace withSpace={isLocationLastItem}>
                      {location}
                    </StyledTextBlockWithSpace>
                    {isLocationLastItem && <StyledDividerWithSpace />}
                  </InlineBlock>
                )}
              </Stack>
            </>
          );
        },
      )}
    </Stack>
  );
};
