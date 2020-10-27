import * as React from 'react';
import {Scroll, ScrollFlow} from '..';
import {styled, getColorFromTheme} from '../../utils/style';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {Tag} from '../../tag/tag';
import {Stack} from '../../stack/stack';
import {Block} from '../../block';

const MainContainer = styled.div`
  max-height: 768px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Container = styled(Block)`
  background-color: ${getColorFromTheme('neutral020')};
  width: 300px;
  height: 150px;
`;

const tags = [
  'This',
  'Is',
  'A',
  'Stack',
  'Example',
  'showing',
  'multiple',
  'tags',
].map(item => <Tag>{item}</Tag>);

export default {
  name: 'scroll',
  children: [
    {
      name: 'default',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookSubHeading>Scroll with default only</StorybookSubHeading>
          <Container>
            <Scroll>
              <Stack flow="horizontal-top">{tags}</Stack>
            </Scroll>
          </Container>
          <StorybookSubHeading>
            Scroll flow set to {ScrollFlow.horizontal}
          </StorybookSubHeading>
          <Container>
            <Scroll flow={ScrollFlow.horizontal}>
              <Stack flow="horizontal-center" spaceInline="sizing040">
                {tags}
              </Stack>
            </Scroll>
          </Container>
          <StorybookSubHeading>
            Scroll flow set to {ScrollFlow.vertical}
          </StorybookSubHeading>
          <Container>
            <Scroll flow={ScrollFlow.vertical}>
              <Stack flow="vertical-left" spaceInline="sizing040">
                {tags}
              </Stack>
            </Scroll>
          </Container>
        </MainContainer>
      ),
    },
  ],
};
