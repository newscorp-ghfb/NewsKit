import React from 'react';
import {
  Cell,
  Grid,
  TextBlock,
  Button,
  Block,
  styled,
  IconFilledArrowRightAlt,
  Stack,
  Flow,
  StackDistribution,
} from 'newskit';

const StyledBlock = styled(Block)`
  background-image: url('/static/contact-us.svg');
  background-position: bottom left;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledStack = styled(Stack)`
  min-height: 320px;
`;

export const ContactUs = () => (
  <Cell xs={12} md={10} mdOffset={1} lg={8}>
    <StyledBlock stylePreset="contactUs" spaceStack="space100">
      <Grid xsMargin="space000">
        <Cell xsOffset={1} xs={10} sm={8}>
          <StyledStack
            flow={Flow.VerticalLeft}
            stackDistribution={StackDistribution.Center}
          >
            <Block spaceStack="space050">
              <TextBlock
                stylePreset="inkBrand020"
                typographyPreset={{
                  xs: 'editorialHeadline040',
                  lg: 'editorialHeadline050',
                  xl: 'editorialHeadline060',
                }}
              >
                Need Help?
              </TextBlock>
            </Block>
            <Block spaceStack="space070">
              <TextBlock
                stylePreset="inkInverse"
                typographyPreset={{
                  xs: 'editorialHeadline040',
                  lg: 'editorialHeadline050',
                  xl: 'editorialHeadline060',
                }}
              >
                Can&apos;t find what you are looking for?
              </TextBlock>
            </Block>
            <Button>
              Get in touch
              <IconFilledArrowRightAlt />
            </Button>
          </StyledStack>
        </Cell>
      </Grid>
    </StyledBlock>
  </Cell>
);
