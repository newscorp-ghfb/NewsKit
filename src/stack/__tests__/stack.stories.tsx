import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Stack, StackProps} from '..';
import {getColorFromTheme, styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {TextBlock} from '../../text-block';
import {Block} from '../../block';
import {StackChild} from '../../stack-child';

const TagHeight = 32;
const TagWidth = 68;
const TagBorderWidth = 1;

interface ContainerProps {
  spaceStack?: string;
  rows?: number;
  spaceInline?: string;
  cols?: number;
  outer?: boolean;
}

const ContainerInner = styled.div<ContainerProps>`
  ${({theme, spaceStack, rows, spaceInline, cols, outer}) => {
    let height = 'auto';
    let width = '100%';

    if (rows !== undefined) {
      let gapHeight = 0;
      if (spaceStack) {
        const space = theme.spacePresets[spaceStack];
        const nbRows = outer ? rows - 1 : rows;
        gapHeight = parseInt(space.replace('px', ''), 10) * nbRows;
      }
      height = `${rows * TagHeight + gapHeight + TagBorderWidth * 2}px`;
    }

    if (cols !== undefined && !outer) {
      let gapWidth = 0;
      if (spaceInline) {
        const space = theme.spacePresets[spaceInline];
        const nbCols = outer ? cols - 1 : cols;
        gapWidth = parseInt(space.replace('px', ''), 10) * nbCols;
      }
      width = `${cols * TagWidth + gapWidth + TagBorderWidth * 2}px`;
    }

    return {
      height,
      width,
    };
  }}
`;

const ContainerOuter = styled(ContainerInner)`
  overflow: hidden;
  background-color: ${getColorFromTheme('blue010')};
}`;

const Container = ({
  children,
  ...rest
}: ContainerProps & {
  children: React.ReactNode;
}) => (
  <ContainerOuter {...rest} outer>
    <ContainerInner {...rest}>{children}</ContainerInner>
  </ContainerOuter>
);

const Tag = styled.div`
  box-sizing: border-box;
  min-height: ${TagHeight}px;
  min-width: ${TagWidth}px;
  padding: 5px 12px;
  border: ${TagBorderWidth}px solid #3358cc;
  color: #2e2e2e;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

export const StoryStackDefault = () => (
  <Container>
    <Stack>
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
    </Stack>
  </Container>
);
StoryStackDefault.storyName = 'Default';

export const StoryStackVerticalWithSpaceInline = () => (
  <Container>
    <Stack spaceInline="space050">
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
    </Stack>
  </Container>
);
StoryStackVerticalWithSpaceInline.storyName = 'Vertical with spaceInline';

export const StoryStackVerticalWithSpaceInlineAndSpaceStack = () => (
  <Container spaceStack="space050" rows={3}>
    <Stack spaceInline="space050" spaceStack="space060" wrap="wrap">
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
      <Tag>Item 4</Tag>
      <Tag>Item 5</Tag>
      <Tag>Item 6</Tag>
    </Stack>
  </Container>
);
StoryStackVerticalWithSpaceInlineAndSpaceStack.storyName =
  'Vertical with spaceInline and spaceStack';

export const StoryStackVerticalInline = () => (
  <Container>
    <Stack inline>
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
      <Tag>Item 4</Tag>
      <Tag>Item 5</Tag>
      <Tag>Item 6</Tag>
    </Stack>
  </Container>
);
StoryStackVerticalInline.storyName = 'Vertical inline';

export const StoryStackVerticalWithCustomHeight = () => (
  <Container>
    <Stack
      flow="vertical-left"
      stackDistribution="space-between"
      height="200px"
    >
      <Tag>Nested Item 1</Tag>
      <Tag>Nested Item 2</Tag>
      <Tag>Nested Item 3</Tag>
    </Stack>
  </Container>
);
StoryStackVerticalWithCustomHeight.storyName = 'Custom height (200px)';
StoryStackVerticalWithCustomHeight.parameters = {
  sidebarLabel: 'Vertical with custom height',
};

export const StoryStackVerticalWithSiblings = () => (
  <Container>
    <Block paddingBlock="space020">
      <TextBlock
        typographyPreset="utilityLabel020"
        paddingBlock="space020"
        paddingInline="space020"
      >
        Sibling 1
      </TextBlock>
      <TextBlock
        typographyPreset="utilityLabel020"
        paddingBlock="space020"
        paddingInline="space020"
      >
        Sibling 2
      </TextBlock>
    </Block>
    <Stack flow="vertical-left" stackDistribution="space-between" height="auto">
      <Tag>Nested Item 1</Tag>
      <Tag>Nested Item 2</Tag>
      <Tag>Nested Item 3</Tag>
    </Stack>
  </Container>
);
StoryStackVerticalWithSiblings.storyName =
  'Siblings within a container that has height defined';
StoryStackVerticalWithSiblings.parameters = {
  sidebarLabel: 'Vertical with siblings',
};

export const StoryStackHorizontalWithSpace = () => (
  <Container>
    <Stack spaceInline="space050" flow="horizontal-top">
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
    </Stack>
  </Container>
);
StoryStackHorizontalWithSpace.storyName = 'Horizontal with space';

export const StoryStackHorizontalWithSpaceInlineAndSpaceStack = () => (
  <Container rows={2} spaceStack="space050" cols={3} spaceInline="space050">
    <Stack
      spaceInline="space050"
      spaceStack="space050"
      wrap="wrap"
      flow="horizontal-top"
    >
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
      <Tag>Item 4</Tag>
      <Tag>Item 5</Tag>
      <Tag>Item 6</Tag>
    </Stack>
  </Container>
);
StoryStackHorizontalWithSpaceInlineAndSpaceStack.storyName =
  'Horizontal with spaceInline and spaceStack';

export const StoryStackHorizontalInline = () => (
  <Container>
    <Stack flow="horizontal-top" inline>
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
      <Tag>Item 4</Tag>
      <Tag>Item 5</Tag>
      <Tag>Item 6</Tag>
    </Stack>
  </Container>
);
StoryStackHorizontalInline.storyName = 'Horizontal inline';

export const StoryStackHorizontalReverse = () => (
  <Container>
    <Stack flow="horizontal-top" flowReverse>
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
      <Tag>Item 4</Tag>
      <Tag>Item 5</Tag>
      <Tag>Item 6</Tag>
    </Stack>
  </Container>
);
StoryStackHorizontalReverse.storyName = 'Horizontal reverse';

export const StoryStackHorizontalReverseWithSpace = () => (
  <Container>
    <Stack flow="horizontal-top" flowReverse spaceInline="space030">
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
      <Tag>Item 4</Tag>
      <Tag>Item 5</Tag>
      <Tag>Item 6</Tag>
    </Stack>
  </Container>
);
StoryStackHorizontalReverseWithSpace.storyName =
  'Horizontal reverse with space';

export const StoryNestedStacks = () => (
  <Container>
    <Stack flow="vertical-left">
      <Stack flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 4</Tag>
        <Tag>Nested Item 5</Tag>
        <Tag>Nested Item 6</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 7</Tag>
        <Tag>Nested Item 8</Tag>
        <Tag>Nested Item 9</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryNestedStacks.storyName = 'Nested stacks';

export const StoryNestedStacksWithSpace = () => (
  <Container>
    <Stack spaceInline="space030">
      <Stack flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 4</Tag>
        <Tag>Nested Item 5</Tag>
        <Tag>Nested Item 6</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 7</Tag>
        <Tag>Nested Item 8</Tag>
        <Tag>Nested Item 9</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryNestedStacksWithSpace.storyName = 'Nested stacks with space';

export const StoryNestedHorizontalStacks = () => (
  <Container>
    <Stack flow="horizontal-top">
      <Stack flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 4</Tag>
        <Tag>Nested Item 5</Tag>
        <Tag>Nested Item 6</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryNestedHorizontalStacks.storyName = 'Nested horizontal stacks';

export const StoryNestedHorizontalStacksWithSpace = () => (
  <Container>
    <Stack flow="horizontal-top" spaceInline="space050">
      <Stack flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 4</Tag>
        <Tag>Nested Item 5</Tag>
        <Tag>Nested Item 6</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 7</Tag>
        <Tag>Nested Item 8</Tag>
        <Tag>Nested Item 9</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryNestedHorizontalStacksWithSpace.storyName =
  'Nested horizontal stacks with space';

export const StoryNestedStacksMixedContent = () => (
  <Container>
    <Stack flow="horizontal-top" spaceInline="space040">
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryNestedStacksMixedContent.storyName = 'Nested stacks mixed content';

export const StoryNestedHorizontalStacksInline = () => (
  <Container>
    <Stack flow="horizontal-top" inline>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 4</Tag>
        <Tag>Nested Item 5</Tag>
        <Tag>Nested Item 6</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryNestedHorizontalStacksInline.storyName = 'Nested horizontal stacks inline';

export const StoryNestedHorizontalStacksAsSpan = () => (
  <Container>
    <Stack flow="horizontal-top" as="span">
      <Stack flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 4</Tag>
        <Tag>Nested Item 5</Tag>
        <Tag>Nested Item 6</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryNestedHorizontalStacksAsSpan.storyName =
  'Nested horizontal stacks as span';

export const StoryNestedHorizontalStacksAsSpanWithSpace = () => (
  <Container>
    <Stack flow="horizontal-top" as="span" spaceInline="space030">
      <Stack flow="horizontal-top" spaceInline="space010">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack flow="horizontal-top" spaceInline="space010">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryNestedHorizontalStacksAsSpanWithSpace.storyName =
  'Nested horizontal stacks as span with space';

export const StoryStackAsList = () => (
  <Container>
    <Stack list ariaLabel="Tag list">
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
    </Stack>
  </Container>
);
StoryStackAsList.storyName = 'Stack as a list';

export const StoryStackAsListWithSpace = () => (
  <Container>
    <Stack list spaceInline="space030" ariaLabel="Tag list">
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
    </Stack>
  </Container>
);
StoryStackAsListWithSpace.storyName = 'Stack as list with space';

export const StoryStackAsListWithSpaceWrap = () => (
  <Container rows={4} spaceStack="space030">
    <Stack
      list
      spaceInline="space030"
      spaceStack="space030"
      ariaLabel="Tag list"
      wrap="wrap"
    >
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
      <Tag>Item 4</Tag>
      <Tag>Item 5</Tag>
      <Tag>Item 6</Tag>
      <Tag>Item 7</Tag>
      <Tag>Item 8</Tag>
      <Tag>Item 9</Tag>
    </Stack>
  </Container>
);
StoryStackAsListWithSpaceWrap.storyName = 'Stack as list with space wrap';

export const StoryStackHorizontalAsList = () => (
  <Container>
    <Stack list ariaLabel="Tag list" flow="horizontal-top">
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
    </Stack>
  </Container>
);
StoryStackHorizontalAsList.storyName = 'Stack horizontal as a list';

export const StoryStackHorizontalAsListWithSpace = () => (
  <Container>
    <Stack
      list
      spaceInline="space030"
      ariaLabel="Tag list"
      flow="horizontal-top"
    >
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
    </Stack>
  </Container>
);
StoryStackHorizontalAsListWithSpace.storyName =
  'Stack horizontal as list with space';

export const StoryStackHorizontalAsListWithSpaceWrap = () => (
  <Container cols={7} spaceInline="space030">
    <Stack
      list
      spaceInline="space030"
      spaceStack="space030"
      ariaLabel="Tag list"
      flow="horizontal-top"
      wrap="wrap"
    >
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
      <Tag>Item 4</Tag>
      <Tag>Item 5</Tag>
      <Tag>Item 6</Tag>
      <Tag>Item 7</Tag>
      <Tag>Item 8</Tag>
      <Tag>Item 9</Tag>
    </Stack>
  </Container>
);
StoryStackHorizontalAsListWithSpaceWrap.storyName =
  'Stack horizontal as list with space wrap';

export const StoryStackAsListWithNestedStackAsChild = () => (
  <Container>
    <Stack list>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 4</Tag>
        <Tag>Nested Item 5</Tag>
        <Tag>Nested Item 6</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 7</Tag>
        <Tag>Nested Item 8</Tag>
        <Tag>Nested Item 9</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryStackAsListWithNestedStackAsChild.storyName =
  'Stack as a list with nested stack as child';

export const StoryStackAsListWithSpaceAndNestedStackAsChild = () => (
  <Container>
    <Stack list spaceInline="space030">
      <Stack flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 4</Tag>
        <Tag>Nested Item 5</Tag>
        <Tag>Nested Item 6</Tag>
      </Stack>
      <Stack flow="horizontal-top">
        <Tag>Nested Item 7</Tag>
        <Tag>Nested Item 8</Tag>
        <Tag>Nested Item 9</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryStackAsListWithSpaceAndNestedStackAsChild.storyName =
  'Stack as list with space and nested stack as child';

export const StoryNestedStacksBothAsList = () => (
  <Container>
    <Stack list>
      <Stack list flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack list flow="horizontal-top">
        <Tag>Nested Item 4</Tag>
        <Tag>Nested Item 5</Tag>
        <Tag>Nested Item 6</Tag>
      </Stack>
      <Stack list flow="horizontal-top">
        <Tag>Nested Item 7</Tag>
        <Tag>Nested Item 8</Tag>
        <Tag>Nested Item 9</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryNestedStacksBothAsList.storyName = 'Nested stacks both as list';

export const StoryNestedStacksBothAsListWithSpace = () => (
  <Container>
    <Stack list spaceInline="space030">
      <Stack list flow="horizontal-top">
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
      <Stack list flow="horizontal-top">
        <Tag>Nested Item 4</Tag>
        <Tag>Nested Item 5</Tag>
        <Tag>Nested Item 6</Tag>
      </Stack>
      <Stack list flow="horizontal-top">
        <Tag>Nested Item 7</Tag>
        <Tag>Nested Item 8</Tag>
        <Tag>Nested Item 9</Tag>
      </Stack>
    </Stack>
  </Container>
);
StoryNestedStacksBothAsListWithSpace.storyName =
  'Nested stacks both as list with space';

export const StoryResponsive = () => (
  <Container>
    <Stack
      stackDistribution={{sm: 'flex-end', md: 'flex-start'}}
      flow={{sm: 'horizontal-center', lg: 'vertical-center'}}
      spaceStack={{xs: 'space010', md: 'space030'}}
      wrap={{md: true}}
      inline={{md: true}}
      spaceInline={{xs: 'space010', md: 'space030'}}
      flowReverse={{md: true}}
      flexGrow={{xs: 2, sm: 10}}
      flexShrink={{xs: 2, sm: 10}}
      height={{md: '50vh'}}
    >
      <StackChild order={{xs: 10, md: 0}} alignSelf={{sm: 'flex-end'}}>
        <Tag>Nested Item 1</Tag>
      </StackChild>
      <Tag>Nested Item 2</Tag>
      <Tag>Nested Item 3</Tag>
      <Tag>Nested Item 4</Tag>
    </Stack>
  </Container>
);

StoryResponsive.storyName = 'Responsive options';

export const StoryStackWithLogicalProps = () => (
  <>
    <StorybookHeading>Margin overrides</StorybookHeading>
    <Container>
      <Stack marginBlock="space050">
        <Tag>Item 1</Tag>
        <Tag>Item 2</Tag>
        <Tag>Item 3</Tag>
      </Stack>
    </Container>
    <StorybookHeading>Padding overrides</StorybookHeading>
    <Container>
      <Stack paddingBlock="space050">
        <Tag>Item 1</Tag>
        <Tag>Item 2</Tag>
        <Tag>Item 3</Tag>
      </Stack>
    </Container>
  </>
);
StoryStackWithLogicalProps.storyName = 'Stack with logical props';

export const StoryStackWithArgs = ({wrap, ...args}: StackProps) => {
  const children = [<Tag>child 1</Tag>, <Tag>child 2</Tag>, <Tag>child 3</Tag>];
  return (
    <Stack {...args} wrap={wrap}>
      {wrap === 'wrap' ? (
        [
          ...children,
          <Tag>child 4</Tag>,
          <Tag>child 5</Tag>,
          <Tag>child 6</Tag>,
          <Tag>child 7</Tag>,
          <Tag>child 8</Tag>,
          <Tag>child 9</Tag>,
        ]
      ) : (
        <>{children}</>
      )}
    </Stack>
  );
};
StoryStackWithArgs.storyName = 'Stack with args';

StoryStackWithArgs.args = {
  spaceStack: 'space000',
  spaceInline: 'space000',
  flow: 'vertical-left',
  wrap: 'nowrap',
  stackDistribution: 'flex-start',
  flexGrow: false,
  flexShrink: false,
  flowReverse: false,
  inline: false,
};

// @ts-ignore
StoryStackWithArgs.argTypes = {
  spaceStack: {
    control: {type: 'text'},
  },
  spaceInline: {
    control: {type: 'text'},
  },
  flow: {
    options: [
      'vertical-left',
      'vertical-center',
      'vertical-right',
      'vertical-stretch',
      'horizontal-top',
      'horizontal-center',
      'horizontal-bottom',
      'horizontal-stretch',
    ],
    control: {type: 'select'},
  },
  wrap: {
    options: ['wrap', 'nowrap'],
    control: {type: 'select'},
  },
  stackDistribution: {
    options: [
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
      'space-evenly',
    ],
    control: {type: 'select'},
  },
  flexGrow: {
    control: {type: 'boolean'},
  },
  flexShrink: {
    control: {type: 'boolean'},
  },
  flowReverse: {
    control: {type: 'boolean'},
  },
  inline: {
    control: {type: 'boolean'},
  },
};
StoryStackWithArgs.parameters = {percy: {skip: true}};

export default {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    nkDocs: {
      title: 'Stack',
      url: 'https://newskit.co.uk/components/stack',
      description:
        'A stack is a layout component that abstracts the implementation of flexbox.',
    },
  },
  decorators: [(Story: StoryType) => <Story />],
};
