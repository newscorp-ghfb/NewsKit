import React from 'react';
import {
  Block,
  Card,
  TextBlock,
  Cell,
  Grid,
  Headline,
  IconOutlinedCheck,
  styled,
  Flag,
  Divider,
  getSpacingFromTheme,
  IconOutlinedClose,
} from 'newskit';
import {UsageCardProps, UsageProps} from './types';

const RelativeBlock = styled(Block)`
  position: relative;
`;

const AbsoluteBlock = styled(Block)`
  position: absolute;
  right: ${getSpacingFromTheme('space040')};
  top: ${getSpacingFromTheme('space040')};
  z-index: 1;
`;
const kindMap: Record<
  UsageCardProps['kind'],
  {
    heading: string;
    stylePreset: string;
    flagStylePreset: string;
    iconStylePreset: string;
    iconComponent: typeof IconOutlinedCheck | typeof IconOutlinedClose;
    dividerStylePreset: string;
    headingStylePreset: string;
  }
> = {
  do: {
    heading: 'Do',
    stylePreset: 'inkPositive',
    flagStylePreset: 'usageIconPositive',
    iconStylePreset: 'iconPositive',
    iconComponent: IconOutlinedCheck,
    dividerStylePreset: 'dividerPositive',
    headingStylePreset: 'inkPositive',
  },

  dont: {
    heading: 'Do not',
    stylePreset: 'inkNegative',
    flagStylePreset: 'usageIconNegative',
    iconStylePreset: 'iconNegative',
    iconComponent: IconOutlinedClose,
    dividerStylePreset: 'dividerNegative',
    headingStylePreset: 'inkNegative',
  },
};

const Icon: React.FC<{kind: UsageCardProps['kind']}> = ({kind}) => {
  const kindObj = kindMap[kind];
  const KindIcon = kindObj.iconComponent;
  return (
    <Flag
      overrides={{
        stylePreset: kindObj.flagStylePreset,
        spaceInset: 'spaceInsetSquish000',
      }}
    >
      <KindIcon
        overrides={{
          size: 'iconSize030',
          stylePreset: kindObj.iconStylePreset,
        }}
      />
    </Flag>
  );
};

export const CardUsage = ({card}: {card: UsageCardProps}) => (
  <RelativeBlock>
    <AbsoluteBlock>
      <Icon kind={card.kind} />
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
        <Divider
          overrides={{stylePreset: kindMap[card.kind].dividerStylePreset}}
        />
        <Block spaceStack="space040" />

        <Headline
          overrides={{
            typographyPreset: 'editorialHeadline030',
            heading: {
              stylePreset: kindMap[card.kind].stylePreset,
            },
          }}
        >
          {kindMap[card.kind].heading}
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

export const Usage: React.FC<UsageProps> = ({cards}) => (
  <Cell xs={12} md={10} lg={8} mdOffset={1}>
    <Grid xsMargin="space000">
      {cards.map(card => (
        <Cell xs={12} md={6}>
          <CardUsage card={card} />
        </Cell>
      ))}
    </Grid>
  </Cell>
);
