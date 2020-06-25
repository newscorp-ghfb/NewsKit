import * as React from 'react';
import styled from '@emotion/styled';
import {Divider} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {Stack} from '../../stack';
import {Block} from '../../block';
import {StackChild, AlignSelfValues} from '../../stack-child';
import {Facebook, WhatsApp, Twitter} from '../../icons';
import {getSizingFromTheme} from '../../utils/style';

const Box = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 24px 0;
`;

const BlockWithBorder = styled(Block)`
  display: inline-block;
  border: 1px solid salmon;
`;

const BlockForHorizontalDivider = styled(Block)`
  width: ${getSizingFromTheme('iconSize040')};
  border: 1px solid salmon;
`;

const IconContainer = styled(Block)`
  width: ${getSizingFromTheme('iconSize040')};
  height: ${getSizingFromTheme('iconSize040')};
`;

const IconContainerInline = styled(Block)`
  display: inline-block;
`;

const StackForHorizontalDivider = styled(Stack)`
  width: 50px;
`;

const InlineDividerContainer = styled(Block)`
  display: inline-block;
  height: ${getSizingFromTheme('iconSize040')};
`;

export default {
  name: 'divider',
  children: [
    {
      name: 'horizontal-default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Divider - Horizontal</StorybookHeading>
          <Divider />
        </React.Fragment>
      ),
    },
    {
      name: 'horizontal-in-block',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Divider - Horizontal in vertical block
          </StorybookHeading>
          <BlockForHorizontalDivider>
            <IconContainer overrides={{spaceStack: 'space020'}}>
              <Facebook size="iconSize040" />
            </IconContainer>
            <Block overrides={{spaceStack: 'space020'}}>
              <Divider />
            </Block>
            <IconContainer overrides={{spaceStack: 'space020'}}>
              <WhatsApp size="iconSize040" />
            </IconContainer>
            <Block overrides={{spaceStack: 'space020'}}>
              <Divider />
            </Block>
            <IconContainer>
              <Twitter size="iconSize040" />
            </IconContainer>
          </BlockForHorizontalDivider>
        </React.Fragment>
      ),
    },
    {
      name: 'horizontal-in-stack-without-spacing',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Divider - Horizontal in vertical stack without spacing
          </StorybookHeading>
          <BlockWithBorder>
            <StackForHorizontalDivider
              stackDistribution="center"
              flow="vertical-center"
            >
              <Facebook size="iconSize040" />
              <Divider />
              <WhatsApp size="iconSize040" />
              <Divider />
              <Twitter size="iconSize040" />
            </StackForHorizontalDivider>
          </BlockWithBorder>
        </React.Fragment>
      ),
    },
    {
      name: 'horizontal-in-stack-with-spacing',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Divider - Horizontal in vertical stack with spacing
          </StorybookHeading>
          <BlockWithBorder>
            <StackForHorizontalDivider
              space="sizing040"
              stackDistribution="center"
              flow="vertical-center"
            >
              <Facebook size="iconSize040" />
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider />
              </StackChild>
              <WhatsApp size="iconSize040" />
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider />
              </StackChild>
              <Twitter size="iconSize040" />
            </StackForHorizontalDivider>
          </BlockWithBorder>
        </React.Fragment>
      ),
    },
    {
      name: 'vertical-default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Divider - Vertical</StorybookHeading>
          <Box>
            <Divider vertical />
          </Box>
        </React.Fragment>
      ),
    },
    {
      name: 'vertical-in-inline-block',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Divider - Vertical in horizontal Inline Block
          </StorybookHeading>
          <Block>
            <IconContainerInline overrides={{spaceInline: 'space020'}}>
              <Facebook size="iconSize040" />
            </IconContainerInline>
            <InlineDividerContainer overrides={{spaceInline: 'space020'}}>
              <Divider vertical />
            </InlineDividerContainer>
            <IconContainerInline overrides={{spaceInline: 'space020'}}>
              <WhatsApp size="iconSize040" />
            </IconContainerInline>
            <InlineDividerContainer overrides={{spaceInline: 'space020'}}>
              <Divider vertical />
            </InlineDividerContainer>
            <IconContainerInline>
              <Twitter size="iconSize040" />
            </IconContainerInline>
          </Block>
        </React.Fragment>
      ),
    },
    {
      name: 'vertical-in-stack-without-spacing',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Divider - Vertical in horizontal Stack without spacing
          </StorybookHeading>
          <BlockWithBorder>
            <Stack flow="horizontal-center" stackDistribution="center">
              <Facebook size="iconSize040" />
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider vertical />
              </StackChild>
              <WhatsApp size="iconSize040" />
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider vertical />
              </StackChild>
              <Twitter size="iconSize040" />
            </Stack>
          </BlockWithBorder>
        </React.Fragment>
      ),
    },
    {
      name: 'vertical-in-stack-with-spacing',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Divider - Vertical in horizontal Stack with spacing
          </StorybookHeading>
          <BlockWithBorder>
            <Stack
              flow="horizontal-center"
              stackDistribution="center"
              space="sizing030"
            >
              <Facebook size="iconSize040" />
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider vertical />
              </StackChild>
              <WhatsApp size="iconSize040" />
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider vertical />
              </StackChild>
              <Twitter size="iconSize040" />
            </Stack>
          </BlockWithBorder>
        </React.Fragment>
      ),
    },
  ],
};
