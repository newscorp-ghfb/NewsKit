import * as React from 'react';
import {StructuredListItem, StructuredListCell, StructuredList} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {IconFilledError, IconOutlinedArrowForwardIos} from '../../icons';
import {
  createTheme,
  Stack,
  TextBlock,
  ThemeProvider,
  withDefaultProps,
} from '../..';
import {Block} from '../../block';

const myCustomTheme = createTheme({
  name: 'structuredList-theme',
  overrides: {
    stylePresets: {
      structuredListItemCustom: {
        base: {
          backgroundColor: '{{colors.amber010}}',
        },
        hover: {
          backgroundColor: '{{colors.green010}}',
        },
        active: {
          backgroundColor: '{{colors.teal050}}',
        },
      },
      dividerCustomPreset: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.purple010}}',
          borderWidth: '{{borders.borderWidth020}}',
        },
      },
    },
  },
});

const arrowIcon = (
  <Stack stackDistribution="flex-end" flow="horizontal-center">
    <IconOutlinedArrowForwardIos
      overrides={{
        size: 'iconSize010',
        stylePreset: 'inkContrast',
      }}
    />
  </Stack>
);
const StructuredListWithDivider = withDefaultProps(StructuredList, {
  divider: true,
  ariaLabel: 'list',
});
const ListItemWithInternalLink = withDefaultProps(StructuredListItem, {
  href: '/',
  ariaLabel: 'list item',
  target: '_blank',
});
const ListItemWithExternalLink = withDefaultProps(StructuredListItem, {
  href: 'http://apple.com',
  ariaLabel: 'list item',
  target: '_blank',
});

const HeadingTextBlock = withDefaultProps(TextBlock, {
  stylePreset: 'inkContrast',
  typographyPreset: 'utilityHeading010',
});
const BodyTextBlock = withDefaultProps(TextBlock, {
  stylePreset: 'inkSubtle',
  typographyPreset: 'utilityBody020',
});

const listItemWithThreeCells = (
  <StructuredListItem ariaLabel="list item">
    <StructuredListCell>
      <HeadingTextBlock>Label</HeadingTextBlock>
    </StructuredListCell>
    <StructuredListCell>
      <BodyTextBlock>A short description of the label</BodyTextBlock>
    </StructuredListCell>
    <StructuredListCell>{arrowIcon}</StructuredListCell>
  </StructuredListItem>
);

const listItemWithTwoCells = (
  <StructuredListItem ariaLabel="list item">
    <StructuredListCell>
      <HeadingTextBlock>Label</HeadingTextBlock>
    </StructuredListCell>
    <StructuredListCell>
      <BodyTextBlock>A short description of the label</BodyTextBlock>
    </StructuredListCell>
  </StructuredListItem>
);

const listItemWithOneCell = (
  <StructuredListItem ariaLabel="list item">
    <StructuredListCell>
      <HeadingTextBlock>Label</HeadingTextBlock>
    </StructuredListCell>
  </StructuredListItem>
);

export default {
  title: 'Components/structured-list',
  component: () => 'None',
  disabledRules: [],
};

export const StoryStructuredListDefault = () => (
  <>
    <StorybookHeading>StructuredList</StorybookHeading>
    <StorybookSubHeading>default</StorybookSubHeading>
    <StructuredList ariaLabel="list">
      {listItemWithThreeCells}
      {listItemWithThreeCells}
      {listItemWithThreeCells}
    </StructuredList>
  </>
);
StoryStructuredListDefault.storyName = 'structured-list-default';

export const StoryStructuredListWithDivider = () => (
  <>
    <StorybookHeading>StructuredList</StorybookHeading>
    <StorybookSubHeading>with divider</StorybookSubHeading>
    <StructuredListWithDivider>
      {listItemWithThreeCells}
      {listItemWithThreeCells}
      {listItemWithThreeCells}
    </StructuredListWithDivider>
  </>
);
StoryStructuredListWithDivider.storyName = 'structured-list-with-divider';

export const StoryStructuredListWithTwoCells = () => (
  <>
    <StorybookHeading>StructuredList</StorybookHeading>
    <StorybookSubHeading>with two cells</StorybookSubHeading>
    <StructuredListWithDivider>
      {listItemWithTwoCells}
      {listItemWithTwoCells}
      {listItemWithTwoCells}
    </StructuredListWithDivider>
  </>
);
StoryStructuredListWithTwoCells.storyName = 'structured-list-with-two-cells';

export const StoryStructuredListWithTwoCellsAndPullright = () => (
  <>
    <StorybookSubHeading>
      with two cells and pullRight on the 2nd
    </StorybookSubHeading>
    <Block spaceStack="space050">
      <StructuredListWithDivider>
        <StructuredListItem ariaLabel="list item">
          <StructuredListCell>
            <HeadingTextBlock>Label</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell pullRight>
            <BodyTextBlock>A short description of the label</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
        <StructuredListItem ariaLabel="list item">
          <StructuredListCell>
            <HeadingTextBlock>Label</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell pullRight>
            <BodyTextBlock>A short description of the label</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredListWithDivider>
    </Block>
  </>
);
StoryStructuredListWithTwoCellsAndPullright.storyName =
  'structured-list-with-two-cells-and-pullRight';

export const StoryStructuredListWithOneCell = () => (
  <>
    <StorybookHeading>StructuredList</StorybookHeading>
    <StorybookSubHeading>with one cell</StorybookSubHeading>
    <Block spaceStack="space050">
      <StructuredListWithDivider>
        {listItemWithOneCell}
        {listItemWithOneCell}
      </StructuredListWithDivider>
    </Block>
  </>
);
StoryStructuredListWithOneCell.storyName = 'structured-list-with-one-cell';

export const StoryStructuredListInteractive = () => (
  <>
    <StorybookHeading>StructuredList</StorybookHeading>
    <StorybookSubHeading>with internal link</StorybookSubHeading>
    <StructuredListWithDivider>
      <ListItemWithInternalLink ariaLabel="list item">
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell>
          <BodyTextBlock>A short description of the label</BodyTextBlock>
        </StructuredListCell>
      </ListItemWithInternalLink>
      <ListItemWithInternalLink>
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
      </ListItemWithInternalLink>
    </StructuredListWithDivider>

    <StorybookSubHeading>with external link</StorybookSubHeading>
    <StructuredListWithDivider>
      <ListItemWithExternalLink ariaLabel="list item">
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell>
          <BodyTextBlock>A short description of the label</BodyTextBlock>
        </StructuredListCell>
      </ListItemWithExternalLink>
      <ListItemWithExternalLink>
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
      </ListItemWithExternalLink>
    </StructuredListWithDivider>
    <StorybookSubHeading>with disabled link</StorybookSubHeading>
    <StructuredListWithDivider>
      <StructuredListItem href="/" disabled ariaLabel="list item">
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell>
          <BodyTextBlock>A short description of the label</BodyTextBlock>
        </StructuredListCell>
      </StructuredListItem>
    </StructuredListWithDivider>
  </>
);
StoryStructuredListInteractive.storyName = 'structured-list-interactive';

export const StoryStructuredListInteractiveHideIcon = () => (
  <>
    <StorybookHeading>StructuredList</StorybookHeading>
    <StorybookSubHeading>with internal link (hide icon)</StorybookSubHeading>
    <StructuredListWithDivider>
      <ListItemWithInternalLink hideIcon ariaLabel="list item">
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell>
          <BodyTextBlock>A short description of the label</BodyTextBlock>
        </StructuredListCell>
      </ListItemWithInternalLink>
      <ListItemWithInternalLink hideIcon>
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
      </ListItemWithInternalLink>
    </StructuredListWithDivider>

    <StorybookSubHeading>with external link (hide icon)</StorybookSubHeading>
    <StructuredListWithDivider>
      <ListItemWithExternalLink hideIcon ariaLabel="list item">
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell>
          <BodyTextBlock>A short description of the label</BodyTextBlock>
        </StructuredListCell>
      </ListItemWithExternalLink>
      <ListItemWithExternalLink hideIcon>
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
      </ListItemWithExternalLink>
    </StructuredListWithDivider>
    <StorybookSubHeading>with disabled link (hide icon)</StorybookSubHeading>
    <StructuredListWithDivider>
      <StructuredListItem hideIcon href="/" disabled ariaLabel="list item">
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell>
          <BodyTextBlock>A short description of the label</BodyTextBlock>
        </StructuredListCell>
      </StructuredListItem>
    </StructuredListWithDivider>
  </>
);
StoryStructuredListInteractiveHideIcon.storyName =
  'structured-list-interactive-hide-icon';

export const StoryStructuredListCombined = () => (
  <>
    <StorybookHeading>StructuredList combines</StorybookHeading>
    <StorybookSubHeading>with internal link</StorybookSubHeading>
    <StructuredListWithDivider>
      <StructuredListItem ariaLabel="list item" href="/">
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell>
          <BodyTextBlock>A short description of the label</BodyTextBlock>
        </StructuredListCell>
      </StructuredListItem>
      <StructuredListItem>
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell>
          <BodyTextBlock>A short description of the label</BodyTextBlock>
        </StructuredListCell>
      </StructuredListItem>
      <StructuredListItem>
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell>
          <BodyTextBlock>A short description of the label</BodyTextBlock>
        </StructuredListCell>
      </StructuredListItem>
    </StructuredListWithDivider>
  </>
);
StoryStructuredListCombined.storyName = 'structured-list-combined';

export const StoryStructuredListInteractiveWithCustomIcon = () => (
  <>
    <StorybookHeading>StructuredList</StorybookHeading>
    <StorybookSubHeading>with custom icon</StorybookSubHeading>
    <StructuredListWithDivider>
      <ListItemWithExternalLink>
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell>
          <BodyTextBlock>A short description of the label</BodyTextBlock>
        </StructuredListCell>
        <StructuredListCell>{arrowIcon}</StructuredListCell>
      </ListItemWithExternalLink>
      <ListItemWithExternalLink>
        <StructuredListCell>
          <HeadingTextBlock>Label</HeadingTextBlock>
        </StructuredListCell>
        <StructuredListCell pullRight>{arrowIcon}</StructuredListCell>
      </ListItemWithExternalLink>
    </StructuredListWithDivider>
  </>
);
StoryStructuredListInteractiveWithCustomIcon.storyName =
  'structured-list-interactive-with-custom-icon';

export const StoryStructuredListWithOverrides = () => (
  <>
    <StorybookHeading>Non-interactive StructuredList</StorybookHeading>
    <StorybookSubHeading>with overrides</StorybookSubHeading>
    <ThemeProvider theme={myCustomTheme}>
      <StructuredList
        ariaLabel="list"
        divider
        overrides={{
          divider: {
            stylePreset: 'dividerCustomPreset',
          },
        }}
      >
        <StructuredListItem
          ariaLabel="list item"
          overrides={{
            stylePreset: 'structuredListItemCustom',
            spaceInset: 'spaceInset060',
            minHeight: 'sizing090',
          }}
        >
          <StructuredListCell>
            <HeadingTextBlock>Lorem ipsum</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet lorem massa, et lacinia ipsum tristique id. Phasellus sed
              posuere lacus.
            </BodyTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <Stack stackDistribution="flex-end" flow="horizontal-center">
              <IconFilledError
                overrides={{
                  size: 'iconSize020',
                  stylePreset: 'inkSubtle',
                }}
              />
            </Stack>
          </StructuredListCell>
        </StructuredListItem>
        <StructuredListItem
          ariaLabel="list item"
          overrides={{
            stylePreset: 'structuredListItemCustom',
            spaceInset: 'spaceInset060',
            minHeight: 'sizing090',
          }}
        >
          <StructuredListCell>
            <HeadingTextBlock>Lorem ipsum</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet lorem massa, et lacinia ipsum tristique id. Phasellus sed
              posuere lacus.
            </BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
      <StorybookHeading>Interactive StructuredList</StorybookHeading>
      <StorybookSubHeading>with overrides</StorybookSubHeading>
      <StructuredList
        ariaLabel="list"
        divider
        overrides={{
          divider: {
            stylePreset: 'dividerCustomPreset',
          },
        }}
      >
        <StructuredListItem
          href="/"
          ariaLabel="list item"
          overrides={{
            stylePreset: 'structuredListItemCustom',
            spaceInset: 'spaceInset060',
            minHeight: 'sizing090',
            icon: {
              size: 'iconSize020',
              stylePreset: 'inkSubtle',
            },
          }}
        >
          <StructuredListCell>
            <HeadingTextBlock>Lorem ipsum</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet lorem massa, et lacinia ipsum tristique id. Phasellus sed
              posuere lacus.
            </BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </ThemeProvider>
  </>
);
StoryStructuredListWithOverrides.storyName = 'structured-list-with-overrides';

export const StoryStructuredListAlignment = () => (
  <StructuredList ariaLabel="list" divider>
    <StructuredListItem href="/" linkIconAlign="center">
      <StructuredListCell align="end">Label</StructuredListCell>
      <StructuredListCell>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
        lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere lacus.
      </StructuredListCell>
    </StructuredListItem>
    <StructuredListItem href="/" linkIconAlign="center">
      <StructuredListCell>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
        lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere lacus.
      </StructuredListCell>
    </StructuredListItem>
    <StructuredListItem>
      <StructuredListCell align="end">Label</StructuredListCell>
      <StructuredListCell>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
        lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere lacus.
      </StructuredListCell>
      <StructuredListCell align="end">{arrowIcon}</StructuredListCell>
    </StructuredListItem>
  </StructuredList>
);
StoryStructuredListAlignment.storyName = 'structured-list-alignment';

export const StoryStructuredListLogicalProps = () => (
  <>
    <StorybookHeading>StructuredList</StorybookHeading>
    <StorybookSubHeading>padding logical props</StorybookSubHeading>
    <StructuredList
      ariaLabel="list"
      overrides={{paddingInline: '50px', paddingBlock: '25px', width: 'unset'}}
    >
      {listItemWithThreeCells}
      {listItemWithThreeCells}
      {listItemWithThreeCells}
    </StructuredList>
    <StorybookSubHeading>margin logical props</StorybookSubHeading>
    <StructuredList
      ariaLabel="list"
      overrides={{marginInline: '50px', marginBlock: '25px', width: 'unset'}}
    >
      {listItemWithThreeCells}
      {listItemWithThreeCells}
      {listItemWithThreeCells}
    </StructuredList>
  </>
);
StoryStructuredListLogicalProps.storyName = 'structured-list-logical-props';
