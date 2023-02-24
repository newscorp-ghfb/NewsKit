import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Scroll, ScrollSnapAlignment} from '..';
import {
  styled,
  getColorCssFromTheme,
  getTypographyPresetFromTheme,
} from '../../utils/style';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {Block} from '../../block';
import {Image} from '../../image';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {Button} from '../../button';
import {GridLayout} from '../../grid-layout';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const Container = styled(Block)<{width?: string; height?: string}>`
  border: 1px solid;
  ${getColorCssFromTheme('backgroundColor', 'interfaceSkeleton010')};
  ${getColorCssFromTheme('borderColor', 'interfaceBrand010')};
  width: ${({width}) => width || '300px'};
  height: ${({height}) => height || '150px'};
`;

const Tag = styled.div`
  box-sizing: border-box;
  min-height: 32px;
  padding: 5px 12px;
  border: 1px solid;
  ${getColorCssFromTheme('borderColor', 'interactiveSecondary030')};
  ${getColorCssFromTheme('color', 'inkBase')};
  ${getTypographyPresetFromTheme('utilityLabel020')};
`;

const tagsWords = [
  'This',
  'Is',
  'A',
  'Scroll',
  'Example',
  'Showing',
  'Multiple',
  'Tags',
];

const tags = tagsWords.map(item => <Tag key={item}>{item}</Tag>);

export const StoryScrollDefault = () => (
  <StorybookPage columns="repeat(auto-fill, minmax(300px, 1fr))">
    <StorybookCase title="Horizontal">
      <Container>
        <Scroll>
          <GridLayout autoFlow="column" columns="auto">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Vertical">
      <Container>
        <Scroll vertical>
          <GridLayout autoFlow="row" justifyContent="start">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Image">
      <Container>
        <Scroll>
          <Image
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '400px', height: '200px'}}
          />
        </Scroll>
      </Container>
    </StorybookCase>
  </StorybookPage>
);
StoryScrollDefault.storyName = 'Default';

export const StoryScrollNoGradient = () => (
  <StorybookPage columns="repeat(auto-fill, minmax(300px, 1fr))">
    <StorybookCase title="Horizontal">
      <Container>
        <Scroll overrides={{overlays: {size: 'size000'}}}>
          <GridLayout autoFlow="column" columns="auto">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Vertical">
      <Container>
        <Scroll vertical overrides={{overlays: {size: 'size000'}}}>
          <GridLayout autoFlow="row" justifyContent="start">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Image">
      <Container>
        <Scroll overrides={{overlays: {size: 'size000'}}}>
          <Image
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '400px', height: '200px'}}
          />
        </Scroll>
      </Container>
    </StorybookCase>
  </StorybookPage>
);
StoryScrollNoGradient.storyName = 'No gradient';

export const StoryScrollControls = () => (
  <StorybookPage columns="repeat(auto-fill, minmax(300px, 1fr))">
    <StorybookCase title="Horizontal">
      <Container>
        <Scroll controls="static">
          <GridLayout autoFlow="column" columns="auto">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Vertical">
      <Container>
        <Scroll vertical controls="static">
          <GridLayout autoFlow="row" justifyContent="start">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Scroll inside container using tab key">
      <Container>
        <Scroll controls="static" scrollBar>
          <GridLayout autoFlow="column" columns="auto">
            {tagsWords.map(item => (
              <Tag tabIndex={0} key={item}>
                {item}
              </Tag>
            ))}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
  </StorybookPage>
);
StoryScrollControls.storyName = 'Controls';

export const StoryScrollSnap = () => (
  <StorybookPage columns="repeat(auto-fill, minmax(300px, 1fr))">
    <StorybookCase title="Scroll Snap">
      <Container>
        <Scroll>
          <GridLayout autoFlow="column" columns="auto">
            {tagsWords.map(item => (
              <ScrollSnapAlignment key={item}>
                <Tag>{item}</Tag>
              </ScrollSnapAlignment>
            ))}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Controls">
      <Container>
        <Scroll controls="static" stepDistance={60}>
          <GridLayout autoFlow="column" justifyContent="start">
            {tagsWords.map(item => (
              <ScrollSnapAlignment key={item}>
                <Tag>{item}</Tag>
              </ScrollSnapAlignment>
            ))}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Change snap position">
      <Container>
        <Scroll controls="static" stepDistance={60} snapAlign="center">
          <GridLayout autoFlow="column" justifyContent="start">
            {tagsWords.map(item => (
              <ScrollSnapAlignment key={item}>
                <Tag>{item}</Tag>
              </ScrollSnapAlignment>
            ))}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Scroll Snap - vertical">
      <Container>
        <Scroll controls="static" vertical>
          <GridLayout autoFlow="row" columns="auto">
            {tagsWords.map(item => (
              <ScrollSnapAlignment key={item}>
                <Tag>{item}</Tag>
              </ScrollSnapAlignment>
            ))}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
  </StorybookPage>
);
StoryScrollSnap.storyName = 'Snap';
StoryScrollSnap.parameters = {percy: {skip: true}};

export const StoryScrollBar = () => (
  <StorybookPage columns="repeat(auto-fill, minmax(300px, 1fr))">
    <StorybookCase title="Scrollbar - horizontal">
      <Container>
        <Scroll scrollBar>
          <GridLayout autoFlow="column" columns="auto">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Scrollbar - vertical">
      <Container>
        <Scroll vertical scrollBar>
          <GridLayout autoFlow="row" justifyContent="start">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Arrows and scrollbar - horizontal">
      <Container>
        <Scroll scrollBar controls="static">
          <GridLayout autoFlow="column" columns="auto">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Arrows and scrollbar - vertical">
      <Container>
        <Scroll vertical scrollBar controls="static">
          <GridLayout autoFlow="row" justifyContent="start">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
  </StorybookPage>
);
StoryScrollBar.storyName = 'Scrollbar';

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
    <StorybookPage columns="repeat(auto-fill, minmax(300px, 1fr))">
      <StorybookCase title="Reset scroll position with ref">
        <Container>
          <Scroll scrollBar ref={scrollRef}>
            <GridLayout autoFlow="column" columns="auto">
              {tags}
            </GridLayout>
          </Scroll>
        </Container>
        <GridLayout
          overrides={{marginBlockStart: 'space030', maxWidth: '300px'}}
          alignItems="space-around"
          columns="auto auto auto"
          columnGap="space040"
        >
          <Button
            overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            onClick={() => scrollToStart()}
            size="small"
          >
            Start
          </Button>
          <Button
            overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            onClick={() => scrollToMiddle()}
            size="small"
          >
            Middle
          </Button>
          <Button
            overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            onClick={() => scrollToEnd()}
            size="small"
          >
            End
          </Button>
        </GridLayout>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryResetScrollPosition.storyName = 'Reset scroll position';

const themeOverrides: CreateThemeArgs = {
  name: 'custom-theme',
  overrides: {
    stylePresets: {
      scrollButtons: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.inkInverse}}',
        },
        hover: {
          backgroundColor: '{{colors.interactivePrimary040}}',
        },
      },
    },
  },
};

export const StoryScrollOverrides = () => (
  <StorybookPage columns="repeat(auto-fill, minmax(300px, 1fr))">
    <StorybookCase title="">
      <Container>
        <Scroll
          controls="static"
          overrides={{controls: {button: {stylePreset: 'scrollButtons'}}}}
        >
          <GridLayout autoFlow="column" columns="auto">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
  </StorybookPage>
);
StoryScrollOverrides.storyName = 'Styling overrides';

export const StoryLogicalProps = () => (
  <StorybookPage columns="repeat(auto-fill, minmax(300px, 1fr))">
    <StorybookCase title="Padding">
      <Container>
        <Scroll
          overrides={{paddingInline: 'space040', paddingBlock: 'space030'}}
        >
          <GridLayout autoFlow="column" columns="auto">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
    <StorybookCase title="Margin">
      <Container>
        <Scroll overrides={{marginInline: 'space040'}}>
          <GridLayout autoFlow="column" columns="auto">
            {tags}
          </GridLayout>
        </Scroll>
      </Container>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';

export default {
  title: 'Components/Scroll',
  component: () => Scroll,
  parameters: {
    nkDocs: {
      title: 'Scroll',
      url: 'https://newskit.co.uk/components/scroll',
      description:
        'The scroll component adds scroll behaviour to overflowed content.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          themeOverrides,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
