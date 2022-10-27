import * as React from 'react';
import {Scroll, ScrollSnapAlignment} from '..';
import {styled, getColorCssFromTheme} from '../../utils/style';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {Stack} from '../../stack/stack';
import {Block} from '../../block';
import {Image} from '../../image';
import {createTheme, ThemeProvider} from '../../theme';
import {getSSRId} from '../../utils';
import {Button} from '../../button';

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
          backgroundImage: '{{overlays.overlayGradientInverseHorizontal}}',
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

const Tag = styled.div`
  box-sizing: border-box;
  min-height: 32px;
  padding: 5px 12px;
  border: 1px solid #535353;
  color: #2e2e2e;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
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
  title: 'Components/scroll',
  component: () => 'None',
};

export const StoryDefault = () => (
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
);
StoryDefault.storyName = 'default';

export const StoryScrollControls = () => (
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

    <StorybookSubHeading>Scroll controls with overrides</StorybookSubHeading>
    <Container>
      <ThemeProvider theme={myCustomTheme}>
        <Scroll
          controls="hover"
          overrides={{
            controls: {
              button: {
                stylePreset: 'scrollArrowsCustom',
              },
              offset: '10px',
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
);
StoryScrollControls.storyName = 'scroll-controls';

export const StoryScrollSnap = () => (
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
      <Scroll vertical snapAlign="center" controls="static">
        <Stack flow="vertical-left">
          {[...tags, ...tags].map(tag => (
            <ScrollSnapAlignment key={getSSRId()}>{tag}</ScrollSnapAlignment>
          ))}
        </Stack>
      </Scroll>
    </Container>
    <br />
  </MainContainer>
);
StoryScrollSnap.storyName = 'scroll-snap';
StoryScrollSnap.parameters = {eyes: {include: false}, percy: {skip: true}};

export const StoryScrollBar = () => (
  <MainContainer>
    <StorybookSubHeading>Scroll horizontal with scroll-bar</StorybookSubHeading>
    <Container>
      <Scroll scrollBar>
        <Stack flow="horizontal-top">{tags}</Stack>
      </Scroll>
    </Container>

    <StorybookSubHeading>Scroll vertical with scroll-bar</StorybookSubHeading>
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
);
StoryScrollBar.storyName = 'scroll-bar';

export const StoryResetScrollPosition = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollToStart = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.scrollLeft = 0;
    }
  };

  const scrollToMiddle = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.scrollLeft = 100;
    }
  };

  const scrollToEnd = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.scrollLeft = 999;
    }
  };

  return (
    <MainContainer>
      <StorybookSubHeading>Reset scroll position with ref</StorybookSubHeading>
      <Container>
        <Scroll scrollBar ref={scrollRef}>
          <Stack flow="horizontal-top">{tags}</Stack>
        </Scroll>
      </Container>
      <Button onClick={() => scrollToStart()}>Start</Button>
      <Button onClick={() => scrollToMiddle()}>Middle</Button>
      <Button onClick={() => scrollToEnd()}>End</Button>
    </MainContainer>
  );
};
StoryResetScrollPosition.storyName = 'reset-scroll-position';

export const StoryLogicalProps = () => (
  <MainContainer>
    <StorybookSubHeading>Padding</StorybookSubHeading>
    <Container>
      <Scroll overrides={{paddingInline: '30px', paddingBlock: '15px'}}>
        <Stack flow="horizontal-top">{tags}</Stack>
      </Scroll>
    </Container>

    <StorybookSubHeading>Margin</StorybookSubHeading>
    <Container>
      <Scroll overrides={{marginInline: '30px', marginBlock: '15px'}}>
        <Stack flow="horizontal-top">{tags}</Stack>
      </Scroll>
    </Container>
  </MainContainer>
);
StoryLogicalProps.storyName = 'logical-props';

export const StoryScrollInsideTheContainer = () => (
  <MainContainer>
    <StorybookSubHeading>
      Scroll elements inside the container using tab key
    </StorybookSubHeading>
    <Container width="250px" height="100px">
      <Scroll scrollBar controls="static" tabIndex={-1}>
        <Flex>
          {Array.from({length: 10}, (_, i) => (
            <Button key={getSSRId()} tabIndex={0} size="small">{`Item ${
              i + 1
            }`}</Button>
          ))}
        </Flex>
      </Scroll>
    </Container>
  </MainContainer>
);
StoryScrollInsideTheContainer.storyName =
  'scroll-inside-the-container-with-tab-key';
