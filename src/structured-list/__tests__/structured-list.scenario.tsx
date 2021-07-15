import * as React from 'react';
import {StructuredListItem, StructuredListCell, StructuredList} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {IconFilledError, IconOutlinedArrowForwardIos} from '../../icons';
import {
  createTheme,
  Flow,
  Stack,
  StackDistribution,
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
  <Stack stackDistribution={StackDistribution.End} flow={Flow.HorizontalCenter}>
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
});
const ListItemWithExternalLink = withDefaultProps(StructuredListItem, {
  href: 'http://apple.com',
  ariaLabel: 'list item',
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
  title: 'structured-list',
  children: [
    {
      storyName: 'structured-list-default',
      storyFn: () => (
        <>
          <StorybookHeading>StructuredList</StorybookHeading>
          <StorybookSubHeading>default</StorybookSubHeading>
          <StructuredList ariaLabel="list">
            {listItemWithThreeCells}
            {listItemWithThreeCells}
            {listItemWithThreeCells}
          </StructuredList>
        </>
      ),
    },
    {
      storyName: 'structured-list-with-divider',
      storyFn: () => (
        <>
          <StorybookHeading>StructuredList</StorybookHeading>
          <StorybookSubHeading>with divider</StorybookSubHeading>
          <StructuredListWithDivider>
            {listItemWithThreeCells}
            {listItemWithThreeCells}
            {listItemWithThreeCells}
          </StructuredListWithDivider>
        </>
      ),
    },
    {
      storyName: 'structured-list-with-two-cells',
      storyFn: () => (
        <>
          <StorybookHeading>StructuredList</StorybookHeading>
          <StorybookSubHeading>with two cells</StorybookSubHeading>
          <StructuredListWithDivider>
            {listItemWithTwoCells}
            {listItemWithTwoCells}
            {listItemWithTwoCells}
          </StructuredListWithDivider>
        </>
      ),
    },
    {
      storyName: 'structured-list-with-two-cells-and-pullRight',
      storyFn: () => (
        <>
          <StorybookSubHeading>
            with two cells and pullRight on the 1st
          </StorybookSubHeading>
          <Block spaceStack="space050">
            <StructuredListWithDivider>
              <StructuredListItem ariaLabel="list item">
                <StructuredListCell pullRight>
                  <HeadingTextBlock>Label</HeadingTextBlock>
                </StructuredListCell>
                <StructuredListCell>
                  <BodyTextBlock>
                    A short description of the label
                  </BodyTextBlock>
                </StructuredListCell>
              </StructuredListItem>
              <StructuredListItem ariaLabel="list item">
                <StructuredListCell pullRight>
                  <HeadingTextBlock>Label</HeadingTextBlock>
                </StructuredListCell>
                <StructuredListCell>
                  <BodyTextBlock>
                    A short description of the label
                  </BodyTextBlock>
                </StructuredListCell>
              </StructuredListItem>
            </StructuredListWithDivider>
          </Block>
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
                  <BodyTextBlock>
                    A short description of the label
                  </BodyTextBlock>
                </StructuredListCell>
              </StructuredListItem>
              <StructuredListItem ariaLabel="list item">
                <StructuredListCell>
                  <HeadingTextBlock>Label</HeadingTextBlock>
                </StructuredListCell>
                <StructuredListCell pullRight>
                  <BodyTextBlock>
                    A short description of the label
                  </BodyTextBlock>
                </StructuredListCell>
              </StructuredListItem>
            </StructuredListWithDivider>
          </Block>
        </>
      ),
    },
    {
      storyName: 'structured-list-with-one-cell',
      storyFn: () => (
        <>
          <StorybookHeading>StructuredList</StorybookHeading>
          <StorybookSubHeading>with one cell</StorybookSubHeading>
          <Block spaceStack="space050">
            <StructuredListWithDivider>
              {listItemWithOneCell}
              {listItemWithOneCell}
            </StructuredListWithDivider>
          </Block>
          <StorybookSubHeading>with one cell and pullRight</StorybookSubHeading>
          <Block spaceStack="space050">
            <StructuredListWithDivider>
              <StructuredListItem ariaLabel="list item">
                <StructuredListCell pullRight>
                  <HeadingTextBlock>Label</HeadingTextBlock>
                </StructuredListCell>
              </StructuredListItem>
              <StructuredListItem ariaLabel="list item">
                <StructuredListCell pullRight>
                  <BodyTextBlock>Label</BodyTextBlock>
                </StructuredListCell>
              </StructuredListItem>
            </StructuredListWithDivider>
          </Block>
        </>
      ),
    },
    {
      storyName: 'structured-list-interactive',
      storyFn: () => (
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
      ),
    },
    {
      storyName: 'structured-list-interactive-with-custom-icon',
      storyFn: () => (
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
      ),
    },
    {
      storyName: 'structured-list-with-overrides',
      storyFn: () => (
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
                    aliquet lorem massa, et lacinia ipsum tristique id.
                    Phasellus sed posuere lacus.
                  </BodyTextBlock>
                </StructuredListCell>
                <StructuredListCell>
                  <Stack
                    stackDistribution={StackDistribution.End}
                    flow={Flow.HorizontalCenter}
                  >
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
                    aliquet lorem massa, et lacinia ipsum tristique id.
                    Phasellus sed posuere lacus.
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
                    aliquet lorem massa, et lacinia ipsum tristique id.
                    Phasellus sed posuere lacus.
                  </BodyTextBlock>
                </StructuredListCell>
              </StructuredListItem>
            </StructuredList>
          </ThemeProvider>
        </>
      ),
    },
    {
      storyName: 'structured-list-alignment',
      storyFn: () => (
        <StructuredList ariaLabel="list" divider>
          <StructuredListItem href="/" linkIconAlign="center">
            <StructuredListCell align="end">Label</StructuredListCell>
            <StructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet lorem massa, et lacinia ipsum tristique id. Phasellus sed
              posuere lacus.
            </StructuredListCell>
          </StructuredListItem>
          <StructuredListItem href="/" linkIconAlign="center">
            <StructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet lorem massa, et lacinia ipsum tristique id. Phasellus sed
              posuere lacus.
            </StructuredListCell>
          </StructuredListItem>
          <StructuredListItem>
            <StructuredListCell align="end">Label</StructuredListCell>
            <StructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet lorem massa, et lacinia ipsum tristique id. Phasellus sed
              posuere lacus.
            </StructuredListCell>
            <StructuredListCell align="end">{arrowIcon}</StructuredListCell>
          </StructuredListItem>
        </StructuredList>
      ),
    },
  ],
};

export const disabledRules = ['listitem'];
