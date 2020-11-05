import * as React from 'react';
import styled from '@emotion/styled';
import {Divider} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Stack} from '../../stack';
import {Block} from '../../block';
import {StackChild, AlignSelfValues} from '../../stack-child';
import {IconFilledFacebook, IconFilledWhatsApp} from '../../icons';
import {getSizingFromTheme} from '../../utils/style';

const Box = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin: 12px;
  padding-left: 11px;
  border: 1px solid lime;
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
      name: 'horizontal',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Divider - Horizontal</StorybookHeading>
          <StorybookSubHeading>default</StorybookSubHeading>
          <Divider />
          <br />
          <StorybookSubHeading>in vertical block</StorybookSubHeading>
          <BlockForHorizontalDivider>
            <IconContainer overrides={{spaceStack: 'space020'}}>
              <IconFilledFacebook overrides={{size: 'iconSize040'}} />
            </IconContainer>
            <Block overrides={{spaceStack: 'space020'}}>
              <Divider />
            </Block>
            <IconContainer>
              <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
            </IconContainer>
          </BlockForHorizontalDivider>
          <br />
          <StorybookSubHeading>
            in vertical stack without spacing
          </StorybookSubHeading>
          <BlockWithBorder>
            <StackForHorizontalDivider
              stackDistribution="center"
              flow="vertical-center"
            >
              <IconFilledFacebook overrides={{size: 'iconSize040'}} />
              <Divider />
              <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
            </StackForHorizontalDivider>
          </BlockWithBorder>
          <br />
          <StorybookSubHeading>
            Divider - Horizontal in vertical stack with spacing
          </StorybookSubHeading>
          <BlockWithBorder>
            <StackForHorizontalDivider
              spaceInline="space040"
              stackDistribution="center"
              flow="vertical-center"
            >
              <IconFilledFacebook overrides={{size: 'iconSize040'}} />
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider />
              </StackChild>
              <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
            </StackForHorizontalDivider>
          </BlockWithBorder>
        </React.Fragment>
      ),
    },
    {
      name: 'vertical',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Divider - Vertical</StorybookHeading>
          <StorybookSubHeading>default</StorybookSubHeading>
          <Box>
            <Divider vertical />
          </Box>
          <br />
          <StorybookSubHeading>in horizontal Inline Block</StorybookSubHeading>
          <Block>
            <IconContainerInline overrides={{spaceInline: 'space020'}}>
              <IconFilledFacebook overrides={{size: 'iconSize040'}} />
            </IconContainerInline>
            <InlineDividerContainer overrides={{spaceInline: 'space020'}}>
              <Divider vertical />
            </InlineDividerContainer>
            <IconContainerInline>
              <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
            </IconContainerInline>
          </Block>
          <br />
          <StorybookSubHeading>
            in horizontal Stack without spacing
          </StorybookSubHeading>
          <BlockWithBorder>
            <Stack flow="horizontal-center" stackDistribution="center">
              <IconFilledFacebook overrides={{size: 'iconSize040'}} />
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider vertical />
              </StackChild>
              <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
            </Stack>
          </BlockWithBorder>
          <br />
          <StorybookSubHeading>
            in horizontal Stack with spacing
          </StorybookSubHeading>
          <BlockWithBorder>
            <Stack
              flow="horizontal-center"
              stackDistribution="center"
              spaceInline="space030"
            >
              <IconFilledFacebook overrides={{size: 'iconSize040'}} />
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider vertical />
              </StackChild>
              <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
            </Stack>
          </BlockWithBorder>
          <br />
          <StorybookSubHeading>with overrides</StorybookSubHeading>
          <Box>
            <Divider
              vertical
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            />
          </Box>
        </React.Fragment>
      ),
    },
  ],
};
