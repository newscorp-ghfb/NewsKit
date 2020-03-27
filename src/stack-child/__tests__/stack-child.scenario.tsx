import * as React from 'react';
import {Flow, StackDistribution, Stack} from '../../stack';

import {styled, getColorFromTheme} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Tag} from '../../tag/tag';
import {newskitLightTheme} from '../../themes';
import {StackChild} from '..';

const MainContainer = styled.div`
  max-width: 800px;
  margin: auto;
  max-height: 768px;
`;

const Container = styled.div`
  border: solid 1px red;
  background-color: ${getColorFromTheme('neutral020')};
`;

const Block = styled.div<{isBlock?: boolean; hasHeight: boolean}>`
  display: ${({isBlock}) => (isBlock ? 'block' : 'inline-block')};
  height: ${({hasHeight}) => (hasHeight ? '200px' : 'auto')};
  border: dotted 1px ${getColorFromTheme('red040')};
`;

export default {
  name: 'stack-child',
  children: [
    {
      name: 'stack-child-custom-order',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>StackChild with custom order</StorybookHeading>
          <Container theme={newskitLightTheme}>
            <Block hasHeight={false}>
              <Stack
                space="sizing050"
                flow={Flow.HorizontalTop}
                stackDistribution={StackDistribution.Center}
              >
                <StackChild order={3}>
                  <Tag>Child 1</Tag>
                </StackChild>
                <StackChild order={1}>
                  <Tag>Child 2</Tag>
                </StackChild>
                <StackChild order={1}>
                  <Tag>Child 3</Tag>
                </StackChild>
              </Stack>
            </Block>
          </Container>
        </MainContainer>
      ),
    },
  ],
};
