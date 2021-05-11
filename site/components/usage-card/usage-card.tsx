import React from 'react';
import {Block, Card, TextBlock, Headline, Divider} from 'newskit';
import {CheckIcon} from '../icons/check-icon';
import {CrossIcon} from '../icons/cross-icon';
import {KindConfig, UsageCardProps, UsageKind} from './types';
import {RelativeBlock, AbsoluteBlock} from './styled';

const kindMap: Record<string, KindConfig> = {
  do: {
    heading: 'Do',
    iconComponent: CheckIcon,
    dividerStylePreset: 'dividerPositive',
    headingStylePreset: 'inkPositive',
  },

  dont: {
    heading: 'Do not',
    iconComponent: CrossIcon,
    dividerStylePreset: 'dividerNegative',
    headingStylePreset: 'inkNegative',
  },
};

export const UsageCard: React.FC<UsageCardProps> = ({
  kind = UsageKind.DO,
  description,
  media,
}) => {
  const {
    iconComponent: Icon,
    heading,
    dividerStylePreset,
    headingStylePreset,
  } = kindMap[kind];
  return (
    <RelativeBlock>
      <AbsoluteBlock>
        <Icon />
      </AbsoluteBlock>

      <Card
        media={media}
        overrides={{
          stylePreset: 'cardMediaNonInteractive',
          mediaContainer: {
            stylePreset: 'cardMediaNonInteractive',
            spaceInline: 'space040',
          },
        }}
      >
        <Block spaceStack="space040">
          <Divider overrides={{stylePreset: dividerStylePreset}} />
          <Block spaceStack="space040" />

          <Headline
            overrides={{
              typographyPreset: 'editorialHeadline030',
              heading: {
                stylePreset: headingStylePreset,
              },
            }}
          >
            {heading}
          </Headline>
        </Block>
        <Block spaceStack="space040">
          <TextBlock
            stylePreset="inkBase"
            typographyPreset="editorialParagraph020"
          >
            {description}
          </TextBlock>
        </Block>
      </Card>
    </RelativeBlock>
  );
};
