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
} from 'newskit';
import {UsageCardProps, UsageProps} from './types';

const RelativeBlock = styled(Block)`
  position: relative;
`;

const AbsoluteBlock = styled(Block)`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 1;
`;

const CheckIcon = () => (
  <Flag
    overrides={{
      stylePreset: 'usageIconPositive',
      spaceInset: 'spaceInsetSquish010',
    }}
  >
    <IconOutlinedCheck
      overrides={{
        size: 'iconSize010',
        stylePreset: 'iconPositive',
      }}
    />
  </Flag>
);

const CrossIcon = () => (
  <Flag
    overrides={{
      stylePreset: 'usageIconNegative',
      spaceInset: 'spaceInsetSquish010',
    }}
  >
    <IconOutlinedCheck
      overrides={{
        size: 'iconSize010',
        stylePreset: 'iconPositive',
      }}
    />
  </Flag>
);

export const UsageCard = ({
  card,
  overrides = {},
}: {
  card: UsageCardProps;
  overrides: {};
}) => (
  <RelativeBlock>
    <AbsoluteBlock>
      {card.allowed ? <CheckIcon /> : <CrossIcon />}
    </AbsoluteBlock>
    <Card media={card.media} overrides={overrides}>
      <Block spaceStack="space040">
        <Headline
          overrides={{
            typographyPreset: 'editorialHeadline020',
            heading: {
              stylePreset: 'inkContrast',
            },
          }}
        >
          {card.title}
        </Headline>
      </Block>
      <Block spaceStack="space040">
        <TextBlock
          stylePreset="inkPreset"
          typographyPreset="editorialParagraph020"
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
        <Cell xs={6}>
          <UsageCard
            overrides={{
              mediaContainer: {
                stylePreset: card.allowed
                  ? 'positiveMediaContainer'
                  : 'negativeMediaContainer',
                spaceStack: 'space040',
              },
              spaceStack: 'space070',
            }}
            card={card}
          />
        </Cell>
      ))}
    </Grid>
  </Cell>
);
