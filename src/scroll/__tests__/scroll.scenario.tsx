import * as React from 'react';
import {Scroll, ScrollSnapAlignment} from '..';
import {styled, getColorFromTheme} from '../../utils/style';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {Tag} from '../../tag/tag';
import {Stack} from '../../stack/stack';
import {Block} from '../../block';
import {Image} from '../../image';
import {createTheme, ThemeProvider} from '../../theme';

const myCustomTheme = createTheme({
  name: 'my-custom-scroll-theme',
  overrides: {
    stylePresets: {
      scrollArrowsCustom: {
        base: {
          backgroundColor: '{{colors.amber010}}',
          color: '{{colors.purple050}}',
          iconColor: '{{colors.purple050}}',
        },
        hover: {
          backgroundColor: '{{colors.amber020}}',
        },
        active: {
          backgroundColor: '{{colors.amber060}}',
        },
        disabled: {
          color: '{{colors.inkNonEssential}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
      },
    },
  },
});

const MainContainer = styled.div`
  max-height: 768px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Container = styled(Block)<{width?: string; height?: string}>`
  background-color: ${getColorFromTheme('neutral020')};
  width: ${({width}) => width || '300px'};
  height: ${({height}) => height || '150px'};
`;

const Flex = styled.div`
  display: flex;
`;

const Box = styled.div`
  box-sizing: border-box;
  flex: none;
  width: 100px;
  height: 100px;
  background: salmon;
  border: 1px solid red;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
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
          <StorybookSubHeading>Scroll horizontal</StorybookSubHeading>
          <Container>
            <Scroll>
              <Stack flow="horizontal-top">{tags}</Stack>
            </Scroll>
          </Container>

          <StorybookSubHeading>Scroll vertical</StorybookSubHeading>
          <Container>
            <Scroll vertical>
              <Stack flow="vertical-left" spaceInline="space040">
                {tags}
              </Stack>
            </Scroll>
          </Container>

          <StorybookSubHeading>Scroll with image</StorybookSubHeading>
          <Container>
            <Scroll>
              <Image
                src="/placeholder-3x2.png"
                alt="Example Image"
                overrides={{width: '400px', height: '200px'}}
              />
            </Scroll>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'scroll-arrows',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookSubHeading>Scroll horizontal</StorybookSubHeading>
          <Container data-testid="horizontal-scroll-component">
            <Scroll arrows="static">
              <Stack flow="horizontal-center" spaceInline="space040">
                {tags}
              </Stack>
            </Scroll>
          </Container>

          <StorybookSubHeading>Scroll vertical</StorybookSubHeading>
          <Container data-testid="vertical-scroll-component">
            <Scroll vertical arrows="static">
              <Stack flow="vertical-left" spaceInline="space040">
                {tags}
              </Stack>
            </Scroll>
          </Container>

          <StorybookSubHeading>
            Scroll arrows with overrides
          </StorybookSubHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <Scroll
                arrows="hover"
                overrides={{arrows: {stylePreset: 'scrollArrowsCustom'}}}
              >
                <Stack flow="horizontal-top">{tags}</Stack>
              </Scroll>
            </ThemeProvider>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'scroll-snap',
      type: 'story',
      parameters: {eyes: {include: false}},
      component: () => (
        <>
          <StorybookSubHeading>Scroll snap - start</StorybookSubHeading>
          <Container width="250px" height="100px">
            <Scroll snapAlign="start">
              <Flex>
                {Array.from({length: 10}, (_, i) => (
                  <ScrollSnapAlignment>
                    <Box>{`Item ${i + 1}`}</Box>
                  </ScrollSnapAlignment>
                ))}
              </Flex>
            </Scroll>
          </Container>
          <br />

          <StorybookSubHeading>Scroll snap with arrows</StorybookSubHeading>
          <Container width="250px" height="100px">
            <Scroll snapAlign="start" arrows="static" stepDistance={60}>
              <Flex>
                {Array.from({length: 10}, (_, i) => (
                  <ScrollSnapAlignment>
                    <Box>{`Item ${i + 1}`}</Box>
                  </ScrollSnapAlignment>
                ))}
              </Flex>
            </Scroll>
          </Container>
          <br />

          <StorybookSubHeading>Change snap position</StorybookSubHeading>
          <Container width="250px" height="100px">
            <Scroll snapAlign="center" arrows="static">
              <Flex>
                {Array.from({length: 5}, (_, i) => (
                  <ScrollSnapAlignment>
                    <Box>{`Item ${i + 1}`}</Box>
                  </ScrollSnapAlignment>
                ))}
                <ScrollSnapAlignment snapAlign="start">
                  <Box>Item 6 end</Box>
                </ScrollSnapAlignment>
                {Array.from({length: 5}, (_, i) => (
                  <ScrollSnapAlignment>
                    <Box>{`Item ${i + 7}`}</Box>
                  </ScrollSnapAlignment>
                ))}
              </Flex>
            </Scroll>
          </Container>
          <br />

          <StorybookSubHeading>with stack vertical</StorybookSubHeading>
          <Container>
            <Scroll vertical snapAlign="start" arrows="static">
              <Stack flow="vertical-left">
                {[...tags, ...tags].map(tag => (
                  <ScrollSnapAlignment>{tag}</ScrollSnapAlignment>
                ))}
              </Stack>
            </Scroll>
          </Container>
          <br />
        </>
      ),
    },
  ],
};
