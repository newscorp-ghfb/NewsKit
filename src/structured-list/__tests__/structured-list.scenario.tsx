import * as React from 'react';
import {StructuredListItem, StructuredListCell} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {IconFilledError, IconOutlinedArrowForwardIos} from '../../icons';
import {createTheme, TextBlock, ThemeProvider} from '../..';
import {Block} from '../../block';
import {StyledIconWrapper} from '../styled';

const myCustomTheme = createTheme({
  name: 'structuredList-theme',
  overrides: {
    stylePresets: {
      structuredListItemCustom: {
        base: {
          backgroundColor: '{{colors.amber010}}',
          borderStyle: 'solid',
          borderColor: '{{colors.red020}}',
          borderWidth:
            '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
        },
        hover: {
          backgroundColor: '{{colors.green010}}',
        },
        active: {
          backgroundColor: '{{colors.teal050}}',
        },
      },
    },
  },
});

export default {
  title: 'structured-list',
  children: [
    {
      storyName: 'structured-list-default',
      storyFn: () => (
        <>
          <StorybookHeading>StructuredList</StorybookHeading>
          <StorybookSubHeading>default</StorybookSubHeading>
          <Block spaceStack="space050">
            <StructuredListItem>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <StyledIconWrapper>
                  <IconOutlinedArrowForwardIos
                    overrides={{
                      size: 'iconSize010',
                      stylePreset: 'inkContrast',
                    }}
                  />
                </StyledIconWrapper>
              </StructuredListCell>
            </StructuredListItem>
            <StructuredListItem>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <StyledIconWrapper>
                  <IconOutlinedArrowForwardIos
                    overrides={{
                      size: 'iconSize010',
                      stylePreset: 'inkContrast',
                    }}
                  />
                </StyledIconWrapper>
              </StructuredListCell>
            </StructuredListItem>
            <StructuredListItem>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <StyledIconWrapper>
                  <IconOutlinedArrowForwardIos
                    overrides={{
                      size: 'iconSize010',
                      stylePreset: 'inkContrast',
                    }}
                  />
                </StyledIconWrapper>
              </StructuredListCell>
            </StructuredListItem>
          </Block>
        </>
      ),
    },
    {
      storyName: 'structured-list-with-two-cells',
      storyFn: () => (
        <>
          <StorybookHeading>StructuredList</StorybookHeading>
          <StorybookSubHeading>with two cells</StorybookSubHeading>
          <Block spaceStack="space050">
            <StructuredListItem>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
          </Block>
          <StorybookSubHeading>
            with two cells and pullRight on the 1st
          </StorybookSubHeading>
          <Block spaceStack="space050">
            <StructuredListItem>
              <StructuredListCell pullRight>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
          </Block>
          <StorybookSubHeading>
            with two cells and pullRight on the 2nd
          </StorybookSubHeading>
          <Block spaceStack="space050">
            <StructuredListItem>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell pullRight>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
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
            <StructuredListItem>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
          </Block>
          <StorybookSubHeading>with one cell and pullRight</StorybookSubHeading>
          <Block spaceStack="space050">
            <StructuredListItem>
              <StructuredListCell pullRight>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
          </Block>
        </>
      ),
    },
    {
      storyName: 'structured-list-with-overrides',
      storyFn: () => (
        <>
          <StorybookHeading>StructuredList</StorybookHeading>
          <StorybookSubHeading>With overrides</StorybookSubHeading>
          <ThemeProvider theme={myCustomTheme}>
            <Block spaceStack="space050">
              <StructuredListItem
                ariaLabel="customAriaLabel"
                overrides={{
                  stylePreset: 'structuredListItemCustom',
                  spaceInset: 'spaceInset060',
                  minHeight: 'sizing090',
                }}
              >
                <StructuredListCell>
                  <TextBlock
                    stylePreset="inkContrast"
                    typographyPreset="utilityHeading010"
                  >
                    Lorem ipsum dolor sit amet
                  </TextBlock>
                </StructuredListCell>
                <StructuredListCell>
                  <TextBlock
                    stylePreset="inkSubtle"
                    typographyPreset="utilityBody020"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </TextBlock>
                </StructuredListCell>
                <StructuredListCell>
                  <IconFilledError
                    overrides={{
                      size: 'iconSize030',
                      stylePreset: 'inkSubtle',
                    }}
                  />
                </StructuredListCell>
              </StructuredListItem>
            </Block>
          </ThemeProvider>
          <StorybookSubHeading>two cells with overrides</StorybookSubHeading>
          <ThemeProvider theme={myCustomTheme}>
            <Block spaceStack="space050">
              <StructuredListItem
                overrides={{
                  stylePreset: 'structuredListItemCustom',
                  spaceInset: 'spaceInset060',
                  minHeight: 'sizing090',
                }}
              >
                <StructuredListCell>
                  <TextBlock
                    stylePreset="inkContrast"
                    typographyPreset="utilityHeading010"
                  >
                    Lorem ipsum dolor sit amet
                  </TextBlock>
                </StructuredListCell>
                <StructuredListCell>
                  <TextBlock
                    stylePreset="inkSubtle"
                    typographyPreset="utilityBody020"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </TextBlock>
                </StructuredListCell>
              </StructuredListItem>
            </Block>
          </ThemeProvider>
          <StorybookSubHeading>one cell with overrides</StorybookSubHeading>
          <ThemeProvider theme={myCustomTheme}>
            <Block spaceStack="space050">
              <StructuredListItem
                overrides={{
                  stylePreset: 'structuredListItemCustom',
                  spaceInset: 'spaceInset060',
                  minHeight: 'sizing090',
                }}
              >
                <StructuredListCell>
                  <TextBlock
                    stylePreset="inkContrast"
                    typographyPreset="utilityHeading010"
                  >
                    Lorem ipsum dolor sit amet
                  </TextBlock>
                </StructuredListCell>
              </StructuredListItem>
            </Block>
          </ThemeProvider>
        </>
      ),
    },
    {
      storyName: 'structured-list-interactive-default',
      storyFn: () => (
        <>
          <StorybookHeading>StructuredList</StorybookHeading>
          <StorybookSubHeading>with internal link</StorybookSubHeading>
          <Block spaceStack="space050">
            <StructuredListItem href="/">
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
            <StructuredListItem href="/">
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
            <StructuredListItem href="/">
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
          </Block>
          <Block spaceStack="space050">
            <StorybookSubHeading>with external link</StorybookSubHeading>
            <StructuredListItem href="http://apple.com">
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
            <StructuredListItem href="http://apple.com">
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
            <StructuredListItem href="http://apple.com">
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
          </Block>
          <Block spaceStack="space050">
            <StorybookSubHeading>with disabled link</StorybookSubHeading>
            <StructuredListItem href="/" disabled>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
          </Block>
        </>
      ),
    },
    {
      storyName: 'structured-list-interactive-with-custom-icon',
      storyFn: () => (
        <>
          <StorybookHeading>StructuredList</StorybookHeading>
          <StorybookSubHeading>with custom icon</StorybookSubHeading>
          <StructuredListItem href="http://apple.com">
            <StructuredListCell>
              <TextBlock
                stylePreset="inkContrast"
                typographyPreset="utilityHeading010"
              >
                Label
              </TextBlock>
            </StructuredListCell>
            <StructuredListCell>
              <TextBlock
                stylePreset="inkSubtle"
                typographyPreset="utilityBody020"
              >
                A short description of the label
              </TextBlock>
            </StructuredListCell>
            <StructuredListCell>
              <StyledIconWrapper>
                <IconFilledError
                  overrides={{
                    size: 'iconSize010',
                    stylePreset: 'inkContrast',
                  }}
                />
              </StyledIconWrapper>
            </StructuredListCell>
          </StructuredListItem>
          <StructuredListItem href="http://apple.com">
            <StructuredListCell>
              <TextBlock
                stylePreset="inkContrast"
                typographyPreset="utilityHeading010"
              >
                Label
              </TextBlock>
            </StructuredListCell>
            <StructuredListCell>
              <TextBlock
                stylePreset="inkSubtle"
                typographyPreset="utilityBody020"
              >
                A short description of the label
              </TextBlock>
            </StructuredListCell>
            <StructuredListCell>
              <StyledIconWrapper>
                <IconFilledError
                  overrides={{
                    size: 'iconSize010',
                    stylePreset: 'inkContrast',
                  }}
                />
              </StyledIconWrapper>
            </StructuredListCell>
          </StructuredListItem>
          <StructuredListItem href="http://apple.com">
            <StructuredListCell>
              <TextBlock
                stylePreset="inkContrast"
                typographyPreset="utilityHeading010"
              >
                Label
              </TextBlock>
            </StructuredListCell>
            <StructuredListCell pullRight>
              <StyledIconWrapper>
                <IconFilledError
                  overrides={{
                    size: 'iconSize010',
                    stylePreset: 'inkContrast',
                  }}
                />
              </StyledIconWrapper>
            </StructuredListCell>
          </StructuredListItem>
        </>
      ),
    },
  ],
};
