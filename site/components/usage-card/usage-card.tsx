import React from 'react';
import {Block, Card, Headline, Divider} from 'newskit';
import {IconFilledCheckCircle} from '../icons/icon-filled-check-circle';
import {IconFilledCrossCircle} from '../icons/icon-filled-cross-circle';
import {KindConfig, UsageCardProps, UsageKind} from './types';
import {RelativeBlock, AbsoluteBlock} from './styled';
import {UnpackContent} from '../unpack-content';

const kindMap: Record<string, KindConfig> = {
  do: {
    heading: 'Do',
    iconComponent: IconFilledCheckCircle,
    dividerStylePreset: 'dividerPositive',
    headingStylePreset: 'inkPositive',
  },

  dont: {
    heading: 'Don’t',
    iconComponent: IconFilledCrossCircle,
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
          <UnpackContent
            textBlockProps={{
              stylePreset: 'inkBase',
              typographyPreset: 'editorialParagraph020',
            }}
          >
            {description}
          </UnpackContent>
        </Block>
      </Card>
    </RelativeBlock>
  );
};
