import * as React from 'react';
import {Scroll, ScrollSnapAlignment} from '..';
import {styled, getColorCssFromTheme} from '../../utils/style';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {Tag} from '../../tag/tag';
import {Stack} from '../../stack/stack';
import {Block} from '../../block';
import {Image} from '../../image';
import {createTheme, ThemeProvider} from '../../theme';
import {getSSRId} from '../../utils';

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
      overlaysCustom: {
        base: {
          backgroundImage: '{{overlays.overlayGradientBaseHorizontal}}',
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
  ${getColorCssFromTheme('backgroundColor', 'neutral020')};
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
].map(item => <Tag key={getSSRId()}>{item}</Tag>);

export default {
  title: 'scroll',
  children: [
    {
      storyName: 'default',
      storyFn: () => (
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
      storyName: 'scroll-controls',
      storyFn: () => (
        <MainContainer>
          <StorybookSubHeading>Scroll horizontal</StorybookSubHeading>
          <Container data-testid="horizontal-scroll-component">
            <Scroll controls="static">
              <Stack flow="horizontal-center" spaceInline="space040">
                {tags}
              </Stack>
            </Scroll>
          </Container>

          <StorybookSubHeading>Scroll vertical</StorybookSubHeading>
          <Container data-testid="vertical-scroll-component">
            <Scroll vertical controls="static">
              <Stack flow="vertical-left" spaceInline="space040">
                {tags}
              </Stack>
            </Scroll>
          </Container>

          <StorybookSubHeading>
            Scroll controls with overrides
          </StorybookSubHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <Scroll
                controls="hover"
                overrides={{
                  controls: {
                    button: {
                      stylePreset: 'scrollArrowsCustom',
                    },
                    offset: '0px',
                  },
                  overlays: {
                    stylePreset: 'overlaysCustom',
                  },
                }}
              >
                <Stack flow="horizontal-top">{tags}</Stack>
              </Scroll>
            </ThemeProvider>
          </Container>
        </MainContainer>
      ),
    },
    {
      storyName: 'scroll-snap',
      parameters: {eyes: {include: false}},
      storyFn: () => (
        <MainContainer>
          <StorybookSubHeading>Scroll snap - start</StorybookSubHeading>
          <Container width="250px" height="100px">
            <Scroll snapAlign="start">
              <Flex>
                {Array.from({length: 10}, (_, i) => (
                  <ScrollSnapAlignment key={getSSRId()}>
                    <Box>{`Item ${i + 1}`}</Box>
                  </ScrollSnapAlignment>
                ))}
              </Flex>
            </Scroll>
          </Container>
          <br />

          <StorybookSubHeading>Scroll snap with controls</StorybookSubHeading>
          <Container width="250px" height="100px">
            <Scroll snapAlign="start" controls="static" stepDistance={60}>
              <Flex>
                {Array.from({length: 10}, (_, i) => (
                  <ScrollSnapAlignment key={getSSRId()}>
                    <Box>{`Item ${i + 1}`}</Box>
                  </ScrollSnapAlignment>
                ))}
              </Flex>
            </Scroll>
          </Container>
          <br />

          <StorybookSubHeading>Change snap position</StorybookSubHeading>
          <Container width="250px" height="100px">
            <Scroll snapAlign="center" controls="static">
              <Flex>
                {Array.from({length: 5}, (_, i) => (
                  <ScrollSnapAlignment key={getSSRId()}>
                    <Box>{`Item ${i + 1}`}</Box>
                  </ScrollSnapAlignment>
                ))}
                <ScrollSnapAlignment snapAlign="start">
                  <Box>Item 6 end</Box>
                </ScrollSnapAlignment>
                {Array.from({length: 5}, (_, i) => (
                  <ScrollSnapAlignment key={getSSRId()}>
                    <Box>{`Item ${i + 7}`}</Box>
                  </ScrollSnapAlignment>
                ))}
              </Flex>
            </Scroll>
          </Container>
          <br />

          <StorybookSubHeading>with stack vertical</StorybookSubHeading>
          <Container>
            <Scroll vertical snapAlign="start" controls="static">
              <Stack flow="vertical-left">
                {[...tags, ...tags].map(tag => (
                  <ScrollSnapAlignment key={getSSRId()}>
                    {tag}
                  </ScrollSnapAlignment>
                ))}
              </Stack>
            </Scroll>
          </Container>
          <br />
        </MainContainer>
      ),
    },
    {
      storyName: 'scroll-bar',
      storyFn: () => (
        <MainContainer>
          <StorybookSubHeading>
            Scroll horizontal with scroll-bar
          </StorybookSubHeading>
          <Container>
            <Scroll scrollBar>
              <Stack flow="horizontal-top">{tags}</Stack>
            </Scroll>
          </Container>

          <StorybookSubHeading>
            Scroll vertical with scroll-bar
          </StorybookSubHeading>
          <Container>
            <Scroll vertical scrollBar>
              <Stack flow="vertical-left" spaceInline="space040">
                {tags}
              </Stack>
            </Scroll>
          </Container>
          <StorybookSubHeading>
            Scroll horizontal with arrows and scroll-bar
          </StorybookSubHeading>
          <Container width="250px" height="100px">
            <Scroll scrollBar controls="static">
              <Flex>
                {Array.from({length: 10}, (_, i) => (
                  <Box key={getSSRId()}>{`Item ${i + 1}`}</Box>
                ))}
              </Flex>
            </Scroll>
          </Container>
          <StorybookSubHeading>
            Scroll vertical with controls and scroll-bar
          </StorybookSubHeading>
          <Container>
            <Scroll scrollBar vertical controls="static">
              <Stack flow="vertical-left">
                {[...tags, ...tags].map(tag => (
                  <React.Fragment key={getSSRId()}>{tag}</React.Fragment>
                ))}
              </Stack>
            </Scroll>
          </Container>
        </MainContainer>
      ),
    },
  ],
};
