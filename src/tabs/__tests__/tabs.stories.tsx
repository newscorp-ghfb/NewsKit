import React from 'react';
import {Story as StoryType} from '@storybook/react';

import {styled, Scroll, TextBlock} from '../..';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {Tab, Tabs} from '..';
import {
  IconFilledEmail,
  IconFilledStar,
  IconOutlinedStar,
  IconOutlinedStarOutline,
} from '../../icons';
import {Block} from '../../block';
import {Button} from '../../button';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const intro =
  'NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly. NewsKit is built on modular design principles and backed by best practice guidance for design and development. NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly. NewsKit is built on modular design principles and backed by best practice guidance for design and development.';
const benefits =
  'Benefits of a design system include speed to market, shared knowledge, best practice, sustainability, flexibility, and consistency.';

const LoremIpsumText = [
  `Firstly, NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly. NewsKit is built on modular design principles.`,
  `Secondly, ${intro}`,
  `Thirdly, ${intro}`,
];

const LoremIpsumTextLong = [
  `Firstly, ${intro} ${benefits} ${intro} ${benefits}`,
  `Secondly, ${intro} ${benefits} ${intro} ${benefits}`,
  `Thirdly, ${intro} ${benefits} ${intro} ${benefits}`,
];

const tabsCustomThemeObject: CreateThemeArgs = {
  name: 'tab-custom-theme',
  overrides: {
    stylePresets: {
      tabCustomPreset: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.inkContrast}}',
        },
        selected: {color: '{{colors.inkBase}}'},
        'selected:hover': {
          color: '{{colors.green060}}',
        },
      },
      tabsBarTrackCustomPreset: {
        base: {
          backgroundColor: '{{colors.amber020}}',
        },
      },
      tabsBarIndicatorCustomPreset: {
        base: {
          backgroundColor: '{{colors.green060}}',
        },
      },
      dividerCustomPreset: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.red060}}',
          borderWidth: '{{borders.borderWidth030}}',
        },
      },
      scrollArrowsCustom: {
        base: {
          backgroundColor: '{{colors.teal060}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        hover: {
          backgroundColor: '{{colors.teal040}}',
        },
        active: {
          backgroundColor: '{{colors.teal020}}',
        },
        disabled: {
          color: '{{colors.inkNonEssential}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
      },
      shadowTab: {
        base: {
          backgroundColor: 'transparent',
          color: '#111',
        },
        selected: {
          backgroundColor: '#fff',
          color: 'black',
          boxShadow: '0px -1px 3px 1px #999999',
          borderRadius: '4px 4px 0 0',
          borderWidth: '0 0 1px 0',
          borderColor: '#fff',
          borderStyle: 'solid',
        },
      },
      customOutlineBrand: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.inkBrand010}}',
          iconColor: '{{colors.inkBrand010}}',
        },
        hover: {
          backgroundColor: '{{colors.interfaceInformative020}}',
        },
      },
      customOutlineColor: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '-2px',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '-2px',
        },
      },
      customOutlineWidth: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '-2px',
        },
      },
      customOutlineOffset: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '-5px',
        },
      },
    },
    transitionPresets: {
      customBackgroundColorChange: {
        base: {
          transitionProperty: 'background-color',
          transitionDuration: '100ms',
          transitionDelay: '500ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
      customFontColorChange: {
        base: {
          transitionProperty: 'color',
          transitionDuration: '100ms',
          transitionDelay: '500ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
  },
};

const Spacer = styled.div`
  margin-bottom: 2em;
`;

const MainContainer = styled.div`
  max-height: 768px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Container = styled(Block)<{width?: string; height?: string}>`
  width: ${({width}) => width || '300px'};
  height: ${({height}) => height || '250px'};
  overflow: none;
`;

const LoremIpsum: React.FC<{textNumber: number; text?: Array<string>}> = ({
  textNumber = 1,
  text = LoremIpsumText,
}) => (
  <Block paddingBlock="space040" paddingInline="space040">
    <TextBlock stylePreset="inkContrast" typographyPreset="utilityBody020">
      {text[textNumber - 1]}
    </TextBlock>
  </Block>
);

const FixedHeightBlock = styled(Block)`
  height: 150px;
`;

const FixedWidthBlock = styled.div`
  display: inline-block;
  width: 500px;
`;

const ScrollBox: React.FC<{children: React.ReactNode}> = ({children}) => (
  <FixedHeightBlock>
    <Scroll>{children}</Scroll>
  </FixedHeightBlock>
);

const titleCanHaveIcons = (
  <>
    Tab two <IconFilledEmail />
  </>
);

const titleAndRightIcon = (
  <>
    <IconFilledEmail /> Tab
  </>
);

const titleAndLeftIcon = (
  <>
    Tab <IconFilledEmail />
  </>
);

const titleBetweenIcons = (
  <>
    <IconFilledEmail />
    Tab
    <IconFilledEmail />
  </>
);

export const StoryTabsDefault = () => (
  <StorybookPage columns="auto">
    <Tabs>
      <Tab label="Tab one" key="tab-1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two" key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab three" key="tab-3">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </StorybookPage>
);
StoryTabsDefault.storyName = 'Default';
StoryTabsDefault.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsHorizontal = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Small">
      <Tabs size="small">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
      <Spacer />
    </StorybookCase>

    <StorybookCase title="Medium (default)">
      <Tabs size="medium">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
      <Spacer />
    </StorybookCase>

    <StorybookCase title="Large">
      <Tabs size="large">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsHorizontal.storyName = 'Size - horizontal';
StoryTabsHorizontal.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsVertical = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Small">
      <Tabs size="small" vertical>
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
      <Spacer />
    </StorybookCase>
    <StorybookCase title="Medium (default)">
      <Tabs size="medium" vertical>
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
      <Spacer />
    </StorybookCase>
    <StorybookCase title="Large">
      <Tabs size="large" vertical>
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsVertical.storyName = 'Size - vertical';
StoryTabsVertical.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsDistributionStart = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Horizontal">
      <Tabs size="small" distribution="start" divider initialSelectedIndex={10}>
        <Tab label="Tab one" key="tab-1">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two" key="tab-2">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three" key="tab-3">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
      <Spacer />
    </StorybookCase>

    <StorybookCase title="Vertical">
      <Tabs size="small" vertical divider distribution="start">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsDistributionStart.storyName = 'Distribution start';
StoryTabsDistributionStart.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsDistributionGrow = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Horizontal">
      <Tabs size="small" distribution="grow" divider>
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
      <Spacer />
    </StorybookCase>

    <StorybookCase title="Vertical">
      <Tabs size="small" vertical divider distribution="grow">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsDistributionGrow.storyName = 'Distribution grow';
StoryTabsDistributionGrow.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsDistributionEqual = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Horizontal">
      <Tabs size="small" divider distribution="equal">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
      <Spacer />
    </StorybookCase>

    <StorybookCase title="Vertical">
      <Tabs size="small" vertical divider distribution="equal">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsDistributionEqual.storyName = 'Distribution equal';
StoryTabsDistributionEqual.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithAlign = () => (
  <StorybookPage columns="auto" rowGap="space060">
    <StorybookCase title="Align left - horizontal">
      <Tabs align="start" distribution="grow">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Align right - horizontal">
      <Tabs align="end" distribution="grow">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Align left - vertical">
      <Tabs align="start" distribution="grow" vertical>
        <Tab label="Tab&nbsp;one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab&nbsp;two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab&nbsp;three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Align right - vertical">
      <Tabs align="end" distribution="grow" vertical>
        <Tab label="Tab&nbsp;one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab&nbsp;two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab&nbsp;three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsWithAlign.storyName = 'Alignment';
StoryTabsWithAlign.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryControlledTabs = () => {
  const [selectedIndex, setSelected] = React.useState(0);
  return (
    <StorybookPage columns="auto auto auto auto" columnGap="space040">
      <Button
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
        onClick={() => setSelected(state => Math.max(0, state - 1))}
      >
        Previous tab
      </Button>
      <Button
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
        onClick={() => setSelected(state => Math.min(2, state + 1))}
      >
        Next tab
      </Button>
      <Spacer />

      <Tabs
        size="small"
        distribution="start"
        divider
        selectedIndex={selectedIndex}
        onChange={setSelected}
      >
        <Tab label="Tab one" key="tab-1">
          <LoremIpsum text={LoremIpsumTextLong} textNumber={1} />
        </Tab>
        <Tab label={titleCanHaveIcons} key="tab-2">
          <LoremIpsum text={LoremIpsumTextLong} textNumber={2} />
        </Tab>
        <Tab label="Tab three" key="tab-3">
          <LoremIpsum text={LoremIpsumTextLong} textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookPage>
  );
};
StoryControlledTabs.storyName = 'Controlled index selection';
StoryControlledTabs.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithScroll = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Horizontal">
      <Tabs size="small" divider distribution="equal">
        <Tab label="Tab one">
          <ScrollBox>
            <LoremIpsum text={LoremIpsumTextLong} textNumber={1} />
          </ScrollBox>
        </Tab>
        <Tab label="Tab two">
          <ScrollBox>
            <LoremIpsum text={LoremIpsumTextLong} textNumber={2} />
          </ScrollBox>
        </Tab>
        <Tab label="Tab three">
          <ScrollBox>
            <LoremIpsum text={LoremIpsumTextLong} textNumber={3} />
          </ScrollBox>
        </Tab>
      </Tabs>
      <Spacer />
    </StorybookCase>
    <StorybookCase title="Vertical">
      <Tabs size="small" vertical divider distribution="equal">
        <Tab label="Tab one">
          <ScrollBox>
            <LoremIpsum text={LoremIpsumTextLong} textNumber={1} />
          </ScrollBox>
        </Tab>
        <Tab label="Tab two">
          <ScrollBox>
            <LoremIpsum text={LoremIpsumTextLong} textNumber={2} />
          </ScrollBox>
        </Tab>
        <Tab label="Tab three">
          <ScrollBox>
            <LoremIpsum text={LoremIpsumTextLong} textNumber={3} />
          </ScrollBox>
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsWithScroll.storyName = 'Scroll';
StoryTabsWithScroll.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithOverflowAndScroll = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Scroll - horizontal">
      <MainContainer>
        <Tabs>
          {Array.from(Array(15)).map((_, i) => (
            <Tab label={`Tab ${i + 1}`}>
              <LoremIpsum textNumber={1 + (i % 3)} />
            </Tab>
          ))}
        </Tabs>
      </MainContainer>
    </StorybookCase>

    <StorybookCase title="Scroll - vertical">
      <Container>
        <Tabs vertical>
          {Array.from(Array(15)).map((_, i) => (
            <Tab label={`Tab${i + 1}`}>
              <LoremIpsum textNumber={1 + (i % 3)} />
            </Tab>
          ))}
        </Tabs>
      </Container>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsWithOverflowAndScroll.storyName = 'Overflow and scroll';
StoryTabsWithOverflowAndScroll.parameters = {
  percy: {skip: true},
};

export const StoryTabsWithScrollOverrides = () => {
  const CustomScroll = styled.div`
    max-width: 100%;
    overflow: auto;
    border: 2px solid #017582;
  `;

  return (
    <StorybookPage columns="auto">
      <MainContainer>
        <StorybookCase title="Scroll overrides via component - horizontal">
          <Tabs
            overrides={{
              scroll: ({children, vertical}) => (
                <Scroll controls="hover" snapAlign="center" vertical={vertical}>
                  {children}
                </Scroll>
              ),
            }}
          >
            {Array.from(Array(15)).map((_, i) => (
              <Tab label={`Tab ${i + 1}`}>
                <LoremIpsum textNumber={1 + (i % 3)} />
              </Tab>
            ))}
          </Tabs>

          <Spacer />

          <Tabs
            overrides={{
              scroll: ({children}) => <CustomScroll>{children}</CustomScroll>,
            }}
          >
            {Array.from(Array(15)).map((_, i) => (
              <Tab label={`Tab ${i + 1}`}>
                <LoremIpsum textNumber={1 + (i % 3)} />
              </Tab>
            ))}
          </Tabs>
        </StorybookCase>

        <StorybookCase title="Scroll overrides via props - horizontal">
          <Tabs
            overrides={{
              scroll: {
                props: {
                  scrollBar: true,
                  controls: 'hover',
                  overrides: {
                    controls: {
                      button: {
                        stylePreset: 'scrollArrowsCustom',
                      },
                      offset: '0px',
                    },
                  },
                },
              },
            }}
          >
            {Array.from(Array(15)).map((_, i) => (
              <Tab label={`Tab ${i + 1}`}>
                <LoremIpsum textNumber={1 + (i % 3)} />
              </Tab>
            ))}
          </Tabs>
        </StorybookCase>
      </MainContainer>
    </StorybookPage>
  );
};
StoryTabsWithScrollOverrides.storyName = 'Scroll overrides';
StoryTabsWithScrollOverrides.parameters = {
  percy: {skip: true},
};

export const StoryTabsVerticalVariantsIconPlacement = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Leading icon">
      <Tabs size="medium" divider>
        <Tab label={titleAndRightIcon}>
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label={titleAndRightIcon}>
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label={titleAndRightIcon}>
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Trailing icon">
      <Tabs size="medium" divider>
        <Tab ariaLabel="tab 1" label={titleAndLeftIcon}>
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab ariaLabel="tab 2" label={titleAndLeftIcon}>
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab ariaLabel="tab 3" label={titleAndLeftIcon}>
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Leading and trailing icons">
      <Tabs size="medium" divider>
        <Tab ariaLabel="tab 1" label={titleBetweenIcons}>
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab ariaLabel="tab 2" label={titleBetweenIcons}>
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab ariaLabel="tab 3" label={titleBetweenIcons}>
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsVerticalVariantsIconPlacement.storyName = 'Label and icons';
StoryTabsVerticalVariantsIconPlacement.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryLabelAndIconOnly = () => (
  <StorybookPage columns="auto auto">
    <StorybookCase title="Label only - horizontal">
      <Tabs align="start">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Icon only - horizontal">
      <Tabs align="end">
        <Tab ariaLabel="tab 1" label={<IconOutlinedStar />}>
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab ariaLabel="tab 2" label={<IconFilledStar />}>
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab ariaLabel="tab 3" label={<IconOutlinedStarOutline />}>
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Label only - vertical">
      <Tabs align="start" vertical>
        <Tab label="Tab&nbsp;one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab&nbsp;two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab&nbsp;three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Icon only - vertical">
      <Tabs align="end" distribution="grow" vertical>
        <Tab ariaLabel="tab 1" label={<IconOutlinedStar />}>
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab ariaLabel="tab 2" label={<IconFilledStar />}>
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab ariaLabel="tab 3" label={<IconOutlinedStarOutline />}>
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryLabelAndIconOnly.storyName = 'Label only and icon only';
StoryLabelAndIconOnly.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsHorizontalIndicatorPositionVariants = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Indicator position start">
      <Tabs size="medium" indicatorPosition="start">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Indicator position end (default)">
      <Tabs size="medium">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Indicator position none">
      <Tabs size="medium" indicatorPosition="none">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsHorizontalIndicatorPositionVariants.storyName =
  'Indicator position options horizontal';
StoryTabsHorizontalIndicatorPositionVariants.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsVerticalIndicatorPositionVariants = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Indicator position start">
      <Tabs size="medium" vertical indicatorPosition="start">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Indicator position end (default)">
      <Tabs size="medium" vertical>
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Indicator position none">
      <Tabs size="medium" vertical indicatorPosition="none">
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsVerticalIndicatorPositionVariants.storyName =
  'Indicator position options vertical';
StoryTabsVerticalIndicatorPositionVariants.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithDisabledTab = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Horizontal">
      <Tabs>
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two" disabled>
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Vertical">
      <Tabs vertical>
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two" disabled>
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsWithDisabledTab.storyName = 'Disabled';
StoryTabsWithDisabledTab.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithFixedTabIndicatorSize = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Horizontal">
      <Tabs overrides={{selectionIndicator: {indicator: {size: 'sizing050'}}}}>
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Vertical">
      <Tabs
        vertical
        overrides={{selectionIndicator: {indicator: {size: 'sizing030'}}}}
      >
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsWithFixedTabIndicatorSize.storyName = 'Fixed tab indicator size';
StoryTabsWithFixedTabIndicatorSize.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithFixedTabIndicatorPercentageSize = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Tabs Horizontal">
      <Tabs overrides={{selectionIndicator: {indicator: {size: '75%'}}}}>
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="Tabs Vertical">
      <Tabs
        vertical
        overrides={{selectionIndicator: {indicator: {size: '75%'}}}}
      >
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsWithFixedTabIndicatorPercentageSize.storyName =
  'Fixed tab indicator percentage size';
StoryTabsWithFixedTabIndicatorPercentageSize.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithCustomTabBarTrackAndIndicatorWeight = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Horizontal">
      <Tabs
        overrides={{
          selectionIndicator: {
            track: {
              weight: 'borderWidth030',
            },
            indicator: {
              weight: 'borderWidth030',
            },
          },
        }}
      >
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
        <Tab label="Tab Four">
          <LoremIpsum textNumber={1} />
        </Tab>
      </Tabs>
    </StorybookCase>
    <StorybookCase title="Vertical">
      <Tabs
        vertical
        overrides={{
          selectionIndicator: {
            track: {
              weight: 'borderWidth030',
            },
            indicator: {
              weight: 'borderWidth030',
            },
          },
        }}
      >
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
        <Tab label="Tab Four">
          <LoremIpsum textNumber={1} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsWithCustomTabBarTrackAndIndicatorWeight.storyName =
  'Custom tab bar track and indicator weight';
StoryTabsWithCustomTabBarTrackAndIndicatorWeight.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithCustomTabBarIndicatorAnimation = () => (
  <StorybookPage columns="auto">
    <StorybookCase title="Horizontal">
      <Tabs
        overrides={{
          selectionIndicator: {
            indicator: {
              motionDuration: 'motionDuration040',
              motionTiming: 'motionTimingEaseIn',
            },
          },
        }}
      >
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
        <Tab label="Tab Four">
          <LoremIpsum textNumber={1} />
        </Tab>
      </Tabs>
    </StorybookCase>
    <StorybookCase title="Vertical">
      <Tabs
        vertical
        overrides={{
          selectionIndicator: {
            indicator: {
              motionDuration: 'motionDuration040',
              motionTiming: 'motionTimingEaseIn',
            },
          },
        }}
      >
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="Tab three">
          <LoremIpsum textNumber={3} />
        </Tab>
        <Tab label="Tab Four">
          <LoremIpsum textNumber={1} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsWithCustomTabBarIndicatorAnimation.storyName =
  'Custom tab bar indicator transition';
StoryTabsWithCustomTabBarIndicatorAnimation.parameters = {
  percy: {skip: true},
};

export const StoryTabsTransitions = () => (
  <StorybookPage columns="auto" rowGap="space060">
    <StorybookCase title="Default transition preset">
      <Tabs>
        <Tab label="One transition preset">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="two transition presets">
          <LoremIpsum textNumber={1} />
        </Tab>
      </Tabs>
    </StorybookCase>
    <StorybookCase title="Tab items with Transition Preset overrides">
      <Tabs>
        <Tab
          overrides={{
            stylePreset: 'tabCustomPreset',
            transitionPreset: 'customBackgroundColorChange',
          }}
          label="One transition preset"
        >
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab
          overrides={{
            stylePreset: 'tabCustomPreset',
            transitionPreset: [
              'customBackgroundColorChange',
              'customFontColorChange',
            ],
          }}
          label="two transition presets"
        >
          <LoremIpsum textNumber={1} />
        </Tab>
      </Tabs>
    </StorybookCase>
    <StorybookCase title="Tab items with overrides using extend on transitionDuration">
      <Tabs>
        <Tab
          label="Using extend prop on one preset"
          overrides={{
            stylePreset: 'tabCustomPreset',
            transitionPreset: {
              extend: 'backgroundColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration050}}',
              },
            },
          }}
        >
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab
          label="Using extend prop on one preset"
          overrides={{
            stylePreset: 'tabCustomPreset',
            transitionPreset: {
              extend: 'backgroundColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration050}}',
              },
            },
          }}
        >
          <LoremIpsum textNumber={1} />
        </Tab>
      </Tabs>
    </StorybookCase>
    <StorybookCase title="Tab items with overrides on two presets using extend">
      <Tabs>
        <Tab
          label="Using extend prop on two presets"
          overrides={{
            stylePreset: 'tabCustomPreset',
            transitionPreset: [
              {
                extend: 'backgroundColorChange',
                base: {
                  transitionDuration: '{{motions.motionDuration030}}',
                },
              },
              {
                extend: 'customFontColorChange',
                base: {
                  transitionDuration: '{{motions.motionDuration050}}',
                },
              },
            ],
          }}
        >
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab
          label="Using extend prop on two presets"
          overrides={{
            stylePreset: 'tabCustomPreset',
            transitionPreset: [
              {
                extend: 'backgroundColorChange',
                base: {
                  transitionDuration: '{{motions.motionDuration030}}',
                },
              },
              {
                extend: 'customFontColorChange',
                base: {
                  transitionDuration: '{{motions.motionDuration050}}',
                },
              },
            ],
          }}
        >
          <LoremIpsum textNumber={1} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTabsTransitions.storyName = 'Transitions';
StoryTabsTransitions.parameters = {percy: {skip: true}};

export const StoryTagLogicalProps = () => (
  <StorybookPage columns="auto" rowGap="space010">
    <StorybookCase title="marginInline & marginBlock">
      <Tabs
        overrides={{
          marginBlock: 'space060',
          marginInline: 'space080',
        }}
      >
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="paddingInline & paddingBlock">
      <Tabs
        overrides={{
          paddingBlock: 'space060',
          paddingInline: 'space080',
        }}
      >
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
      </Tabs>
    </StorybookCase>

    <StorybookCase title="marginInline & marginBlock & paddingInline & paddingBlock">
      <Tabs
        overrides={{
          marginBlock: 'space060',
          marginInline: 'space080',
          paddingBlock: 'space060',
          paddingInline: 'space080',
        }}
      >
        <Tab label="Tab one">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label="Tab two">
          <LoremIpsum textNumber={2} />
        </Tab>
      </Tabs>
    </StorybookCase>
  </StorybookPage>
);
StoryTagLogicalProps.storyName = 'Logical props';
StoryTagLogicalProps.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsStylingOverrides = () => {
  const customColours = {
    stylePreset: 'customOutlineBrand',
  };
  const customTypography = {
    typographyPreset: 'editorialSubheadline010',
  };

  return (
    <StorybookPage columns="auto">
      <StorybookCase title="Custom colours">
        <Tabs
          size="small"
          distribution="start"
          divider
          initialSelectedIndex={10}
        >
          <Tab label="Tab one" key="tab-1" overrides={customColours}>
            <LoremIpsum textNumber={1} />
          </Tab>
          <Tab label="Tab two" key="tab-2" overrides={customColours}>
            <LoremIpsum textNumber={2} />
          </Tab>
          <Tab label="Tab three" key="tab-3" overrides={customColours}>
            <LoremIpsum textNumber={3} />
          </Tab>
        </Tabs>
      </StorybookCase>
      <StorybookCase title="Custom typography">
        <Tabs
          size="small"
          distribution="start"
          divider
          initialSelectedIndex={10}
        >
          <Tab label="Tab one" key="tab-1" overrides={customTypography}>
            <LoremIpsum textNumber={1} />
          </Tab>
          <Tab label="Tab two" key="tab-2" overrides={customTypography}>
            <LoremIpsum textNumber={2} />
          </Tab>
          <Tab label="Tab three" key="tab-3" overrides={customTypography}>
            <LoremIpsum textNumber={3} />
          </Tab>
        </Tabs>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryTabsStylingOverrides.storyName = 'Styling overrides';
StoryTabsStylingOverrides.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsOverrides = () => {
  const customOutline = {
    stylePreset: 'customOutlineStyle',
  };
  const customOutlineWidthLogicalProps = {
    maxWidth: '157px',
  };
  const customOutlineOffsetLogicalProps = {
    paddingLeft: '48px',
  };

  return (
    <StorybookPage columns="auto">
      <StorybookCase title="Custom outline">
        <Tabs
          size="small"
          distribution="start"
          divider
          initialSelectedIndex={10}
        >
          <Tab label="Tab one" key="tab-1" overrides={customOutline}>
            <LoremIpsum textNumber={1} />
          </Tab>
          <Tab label="Tab two" key="tab-2" overrides={customOutline}>
            <LoremIpsum textNumber={2} />
          </Tab>
          <Tab label="Tab three" key="tab-3" overrides={customOutline}>
            <LoremIpsum textNumber={3} />
          </Tab>
        </Tabs>
      </StorybookCase>
      <StorybookCase title="Custom width">
        <FixedWidthBlock>
          <Tabs
            size="small"
            distribution="start"
            divider
            initialSelectedIndex={10}
            overrides={{tab: {spaceInline: 'space020'}}}
          >
            <Tab label="Tab one" key="tab-1">
              <LoremIpsum textNumber={1} />
            </Tab>
            <Tab
              label="Tab two"
              key="tab-2"
              overrides={{
                stylePreset: 'customOutlineWidth',
                ...customOutlineWidthLogicalProps,
              }}
            >
              <LoremIpsum textNumber={2} />
            </Tab>
            <Tab label="Tab three" key="tab-3">
              <LoremIpsum textNumber={3} />
            </Tab>
          </Tabs>
        </FixedWidthBlock>
      </StorybookCase>

      <StorybookCase title="Custom offset">
        <Tabs
          size="small"
          distribution="start"
          divider
          initialSelectedIndex={10}
          overrides={{
            paddingInline: 'space080',
          }}
        >
          <Tab
            label="Tab one"
            key="tab-1"
            overrides={{
              stylePreset: 'customOutlineOffset',
              ...customOutlineOffsetLogicalProps,
            }}
          >
            <LoremIpsum textNumber={1} />
          </Tab>
          <Tab label="Tab two" key="tab-2">
            <LoremIpsum textNumber={2} />
          </Tab>
          <Tab label="Tab three" key="tab-3">
            <LoremIpsum textNumber={3} />
          </Tab>
        </Tabs>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryTabsOverrides.storyName = 'Overrides';
StoryTabsOverrides.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export default {
  title: 'Components/Tabs',
  parameters: {
    nkDocs: {
      title: 'Tabs',
      url: 'https://newskit.co.uk/components/tabs',
      description:
        'Tabs let users switch between views within the same context.',
    },
  },
  component: () => 'None',
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          tabsCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
