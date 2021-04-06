import React from 'react';
import {Block, Card, TextBlock, Headline, Divider} from 'newskit';
import {CheckIcon, CrossIcon} from '../icons';
import {KindConfig, UsageCardProps} from './types';
import {AbsoluteBlock, RelativeBlock} from './styled';

const kindMap: Record<UsageCardProps['kind'], KindConfig> = {
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

export const CardUsage = ({card}: {card: UsageCardProps}) => {
  const {
    iconComponent: Icon,
    heading,
    dividerStylePreset,
    headingStylePreset,
  } = kindMap[card.kind];

  return (
    <RelativeBlock>
      <AbsoluteBlock>
        <Icon />
      </AbsoluteBlock>
      <Card
        media={card.media}
        overrides={{
          stylePreset: 'cardMediaNonInteractive',
          mediaContainer: {
            stylePreset: 'cardMediaNonInteractive',
            spaceStack: 'space040',
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
            typographyPreset="editorialParagraph010"
          >
            {card.description}
          </TextBlock>
        </Block>
      </Card>
    </RelativeBlock>
  );
};
