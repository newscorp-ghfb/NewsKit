import * as React from 'react';
import {Story as StoryType} from '@storybook/react';

import {
  styled,
  Scroll,
  TextBlock,
  getColorCssFromTheme,
  GridLayout,
} from '../..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Tab, Tabs} from '..';
import {IconFilledEmail} from '../../icons';
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

const LoremIpsumTextShort = [
  `First Content`,
  `Other Content`,
  `Again different Content`,
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
  ${getColorCssFromTheme('backgroundColor', 'neutral020')};
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

const StyledBlock = styled(Block)`
  height: 150px;
`;

const ScrollBox: React.FC<{children: React.ReactNode}> = ({children}) => (
  <StyledBlock>
    <Scroll>{children}</Scroll>
  </StyledBlock>
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
    tab
    <IconFilledEmail />
  </>
);

export const StoryTabsDistributionStart = () => (
  <>
    <StorybookSubHeading>Horizontal</StorybookSubHeading>
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

    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs size="small" vertical divider distribution="start">
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} text={LoremIpsumTextShort} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsDistributionStart.storyName = 'Default (distribution start)';
StoryTabsDistributionStart.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsDistributionGrow = () => (
  <>
    <StorybookSubHeading>Horizontal</StorybookSubHeading>
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

    <StorybookSubHeading>Vertical</StorybookSubHeading>
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
  </>
);
StoryTabsDistributionGrow.storyName = 'Distribution grow';
StoryTabsDistributionGrow.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsDistributionEqual = () => (
  <>
    <StorybookSubHeading>Horizontal</StorybookSubHeading>
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

    <StorybookSubHeading>Vertical</StorybookSubHeading>
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
  </>
);
StoryTabsDistributionEqual.storyName = 'Distribution equal';
StoryTabsDistributionEqual.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsHorizontal = () => (
  <>
    <StorybookSubHeading>Small</StorybookSubHeading>

    <Tabs size="small">
      <Tab label="Small tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Small tab">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Small tab">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Medium (default)</StorybookSubHeading>

    <Tabs size="medium">
      <Tab label="Medium tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Medium tab">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Medium tab">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Large</StorybookSubHeading>

    <Tabs size="large">
      <Tab label="Large tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Large tab">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Large tab">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsHorizontal.storyName = 'Size - horizontal';
StoryTabsHorizontal.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsVertical = () => (
  <>
    <StorybookSubHeading>Small</StorybookSubHeading>
    <Tabs size="small" vertical>
      <Tab label="Small tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Small tab">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Small tab">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Medium (default)</StorybookSubHeading>
    <Tabs size="medium" vertical>
      <Tab label="Medium tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Medium tab">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Medium tab">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Large</StorybookSubHeading>
    <Tabs size="large" vertical>
      <Tab label="Large tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Large tab">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Large tab">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsVertical.storyName = 'Size - vertical';
StoryTabsVertical.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithAlign = () => (
  <>
    <StorybookSubHeading>Align left - horizontal</StorybookSubHeading>
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

    <StorybookSubHeading>Align right - horizontal</StorybookSubHeading>
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
    <Spacer />

    <StorybookSubHeading>Align left - vertical</StorybookSubHeading>
    <Tabs align="start" distribution="grow" vertical>
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

    <StorybookSubHeading>Align right - vertical</StorybookSubHeading>
    <Tabs align="end" distribution="grow" vertical>
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
  </>
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
    <>
      <GridLayout columns="auto auto auto auto" columnGap="space040">
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
      </GridLayout>
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
    </>
  );
};
StoryControlledTabs.storyName = 'Controlled index selection';
StoryControlledTabs.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithScroll = () => (
  <>
    <StorybookSubHeading>Horizontal</StorybookSubHeading>
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

    <StorybookSubHeading>Vertical</StorybookSubHeading>
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
  </>
);
StoryTabsWithScroll.storyName = 'Scroll';
StoryTabsWithScroll.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithOverflowAndScroll = () => (
  <MainContainer>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs>
      {Array.from(Array(15)).map((_, i) => (
        <Tab label={`Tab text here ${i}`}>Content {i}</Tab>
      ))}
    </Tabs>

    <hr />

    <Container>
      <Tabs>
        {Array.from(Array(15)).map((_, i) => (
          <Tab label={`Tab text here  ${i}`}>Content {i}</Tab>
        ))}
      </Tabs>
    </Container>

    <hr />
    <hr />

    <Container>
      <Tabs vertical>
        {Array.from(Array(15)).map((_, i) => (
          <Tab label={`Tab text here ${i}`}>Content {i}</Tab>
        ))}
      </Tabs>
    </Container>
  </MainContainer>
);
StoryTabsWithOverflowAndScroll.storyName = 'Overflow and scroll';
StoryTabsWithOverflowAndScroll.parameters = {
  percy: {skip: true},
};

export const StoryTabsVerticalIconAndLabel = () => (
  <>
    <StorybookHeading>Tabs Vertical Icon and Label</StorybookHeading>
    <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
    <Tabs size="medium" divider vertical>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>
      Leading and Trailing Icon and Label
    </StorybookSubHeading>
    <Tabs size="large" divider vertical>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsVerticalIconAndLabel.storyName = 'tabs-vertical-icon-and-label';
StoryTabsVerticalIconAndLabel.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsVerticalVariantsIconPlacement = () => (
  <>
    <StorybookHeading>Tabs Vertical Variants (Icon Placement)</StorybookHeading>
    <StorybookSubHeading>Leading Icon and Label</StorybookSubHeading>
    <Tabs size="medium" vertical divider>
      <Tab label={titleAndRightIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleAndRightIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleAndRightIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
    <Tabs size="medium" vertical divider>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleAndLeftIcon}>
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>
      Leading and Trailing Icon and Label
    </StorybookSubHeading>
    <Tabs size="medium" vertical divider>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsVerticalVariantsIconPlacement.storyName =
  'tabs-vertical-variants-icon-placement';
StoryTabsVerticalVariantsIconPlacement.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsHorizontalIndicatorPositionVariants = () => (
  <>
    <StorybookHeading>
      Tabs Horizontal Indicator Position Variants
    </StorybookHeading>
    <StorybookSubHeading>Indicator position Start</StorybookSubHeading>
    <Tabs size="medium" indicatorPosition="start">
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position End (default)</StorybookSubHeading>
    <Tabs size="medium">
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position None</StorybookSubHeading>
    <Tabs size="medium" indicatorPosition="none">
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsHorizontalIndicatorPositionVariants.storyName =
  'tabs-horizontal-indicator-position-variants';
StoryTabsHorizontalIndicatorPositionVariants.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsVerticalIndicatorPositionVariants = () => (
  <>
    <StorybookHeading>
      Tabs Vertical Indicator Position Variants
    </StorybookHeading>
    <StorybookSubHeading>Indicator position Start</StorybookSubHeading>
    <Tabs size="medium" vertical indicatorPosition="start">
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position End (default)</StorybookSubHeading>
    <Tabs size="medium" vertical>
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position None</StorybookSubHeading>
    <Tabs size="medium" vertical indicatorPosition="none">
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsVerticalIndicatorPositionVariants.storyName =
  'tabs-vertical-indicator-position-variants';
StoryTabsVerticalIndicatorPositionVariants.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithDisabledTab = () => (
  <>
    <StorybookHeading>Tabs With Disabled Tab</StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs>
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two" disabled>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs vertical>
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two" disabled>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsWithDisabledTab.storyName = 'tabs-with-disabled-tab';
StoryTabsWithDisabledTab.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithFixedTabIndicatorSize = () => (
  <>
    <StorybookHeading>Tabs With Fixed Tab Indicator Size</StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs overrides={{selectionIndicator: {indicator: {size: 'sizing050'}}}}>
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs
      vertical
      overrides={{selectionIndicator: {indicator: {size: 'sizing030'}}}}
    >
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsWithFixedTabIndicatorSize.storyName =
  'tabs-with-fixed-tab-indicator-size';
StoryTabsWithFixedTabIndicatorSize.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithFixedTabIndicatorPercentageSize = () => (
  <>
    <StorybookHeading>
      Tabs With Fixed Tab Indicator Percentage Size
    </StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs overrides={{selectionIndicator: {indicator: {size: '75%'}}}}>
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs vertical overrides={{selectionIndicator: {indicator: {size: '75%'}}}}>
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsWithFixedTabIndicatorPercentageSize.storyName =
  'tabs-with-fixed-tab-indicator-percentage-size';
StoryTabsWithFixedTabIndicatorPercentageSize.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithFixedTabIndicatorPixelSize = () => (
  <>
    <StorybookHeading>
      Tabs With Fixed Tab Indicator Pixel Size
    </StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs overrides={{selectionIndicator: {indicator: {size: '30px'}}}}>
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs
      vertical
      overrides={{selectionIndicator: {indicator: {size: '30px'}}}}
    >
      <Tab label="Tab one">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsWithFixedTabIndicatorPixelSize.storyName =
  'tabs-with-fixed-tab-indicator-pixel-size';
StoryTabsWithFixedTabIndicatorPixelSize.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithCustomTabBarTrackAndIndicatorWeight = () => (
  <>
    <StorybookHeading>
      Tabs With Custom Tab Bar Track And Indicator Weight
    </StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
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
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Four">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <div style={{height: '100px'}} />
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
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
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Four">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsWithCustomTabBarTrackAndIndicatorWeight.storyName =
  'tabs-with-custom-tab-bar-track-and-indicator-weight';
StoryTabsWithCustomTabBarTrackAndIndicatorWeight.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithCustomTabBarIndicatorAnimation = () => (
  <>
    <StorybookHeading>
      Tabs With Custom Tab Bar Indicator Animation
    </StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
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
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Four">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <br />
    <br />
    <Spacer />
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
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
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Four">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsWithCustomTabBarIndicatorAnimation.storyName =
  'tabs-with-custom-tab-bar-indicator-animation';
StoryTabsWithCustomTabBarIndicatorAnimation.parameters = {
  percy: {skip: true},
};

export const StoryTabsWithPresetsOverridesOnIndividualTab = () => (
  <>
    <StorybookHeading>
      Tabs with presets overides on individual tab
    </StorybookHeading>
    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs size="small" vertical divider distribution="grow">
      <Tab label="Tab one" overrides={{stylePreset: 'tabCustomPreset'}}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab two" overrides={{stylePreset: 'tabCustomPreset'}}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab three" overrides={{stylePreset: 'tabCustomPreset'}}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsWithPresetsOverridesOnIndividualTab.storyName =
  'tabs-with-presets-overrides-on-individual-tab';
StoryTabsWithPresetsOverridesOnIndividualTab.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithScrollOverrides = () => {
  const CustomScroll = styled.div`
    max-width: 100%;
    overflow: auto;
    border: 5px solid red;
  `;

  return (
    <MainContainer>
      <StorybookHeading>Tabs With Scroll Overrides</StorybookHeading>
      <StorybookSubHeading>
        Tabs Horizontal With Scroll Overridies via Component
      </StorybookSubHeading>
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
          <Tab label={`Tab text here ${i}`}>
            <LoremIpsum textNumber={1} />
          </Tab>
        ))}
      </Tabs>
      <hr />
      <Tabs
        overrides={{
          scroll: ({children}) => <CustomScroll>{children}</CustomScroll>,
        }}
      >
        {Array.from(Array(15)).map((_, i) => (
          <Tab label={`Tab text here  ${i}`}>
            <LoremIpsum textNumber={1} />
          </Tab>
        ))}
      </Tabs>

      <StorybookSubHeading>
        Tabs Horizontal With Scroll Overridies via Props
      </StorybookSubHeading>
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
          <Tab label={`Tab text here ${i}`}>
            <LoremIpsum textNumber={1} />
          </Tab>
        ))}
      </Tabs>
    </MainContainer>
  );
};
StoryTabsWithScrollOverrides.storyName = 'tabs-with-scroll-overrides';
StoryTabsWithScrollOverrides.parameters = {
  percy: {skip: true},
};

// const transitionTheme = createTheme({
//   name: 'my-custom-tab-theme',
//   overrides: {
//     transitionPresets: {
//       customBackgroundColorChange: {
//         base: {
//           transitionProperty: 'background-color',
//           transitionDuration: '100ms',
//           transitionDelay: '500ms',
//           transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
//         },
//       },
//       customFontColorChange: {
//         base: {
//           transitionProperty: 'color',
//           transitionDuration: '100ms',
//           transitionDelay: '500ms',
//           transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
//         },
//       },
//     },
//     stylePresets: {
//       tabCustomPreset: {
//         base: {
//           backgroundColor: '{{colors.transparent}}',
//         },
//         hover: {
//           backgroundColor: '{{colors.amber070}}',
//           color: '{{colors.green040}}',
//         },
//       },
//     },
//   },
// });

export const StoryTabsTransitions = () => (
  <>
    <StorybookHeading>Tabs item with Transition Presets</StorybookHeading>
    <StorybookSubHeading>Default Transition Preset</StorybookSubHeading>
    <Tabs>
      <Tab label="One transition preset">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="two transition presets">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>
      Tab items with Transition Preset overrides
    </StorybookSubHeading>
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
    <StorybookSubHeading>
      Tab items with overrides using extend on transitionDuration
    </StorybookSubHeading>
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
    <StorybookSubHeading>
      Tab items with overrides on two presets using extend
    </StorybookSubHeading>
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
  </>
);
StoryTabsTransitions.storyName = 'tabs-transitions';
StoryTabsTransitions.parameters = {percy: {skip: true}};

export const StoryTagLogicalProps = () => (
  <>
    <StorybookHeading>Tabs with Logical Props overrides</StorybookHeading>

    <StorybookSubHeading>marginInline & marginBlock</StorybookSubHeading>
    <Tabs
      overrides={{
        marginBlock: 'space060',
        marginInline: 'space080',
      }}
    >
      <Tab label="Content 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Content 2">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>

    <br />

    <StorybookSubHeading>paddingInline & paddingBlock</StorybookSubHeading>
    <Tabs
      overrides={{
        paddingBlock: 'space060',
        paddingInline: 'space080',
      }}
    >
      <Tab label="Content 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Content 2">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>

    <br />
    <StorybookSubHeading>
      marginInline & marginBlock & paddingInline & paddingBlock
    </StorybookSubHeading>
    <Tabs
      overrides={{
        marginBlock: 'space060',
        marginInline: 'space080',
        paddingBlock: 'space060',
        paddingInline: 'space080',
      }}
    >
      <Tab label="<LoremIpsum textNumber={1} />">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="<LoremIpsum textNumber={1} />">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTagLogicalProps.storyName = 'tabs-logical-props';
StoryTagLogicalProps.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsOutlineOverride = () => (
  <>
    <StorybookHeading>Tabs Outline Overrides</StorybookHeading>

    <StorybookSubHeading>Custom Color</StorybookSubHeading>
    <Tabs size="small" distribution="start" divider initialSelectedIndex={10}>
      <Tab
        label="Tab one"
        key="tab-1"
        overrides={{stylePreset: 'customOutlineColor'}}
      >
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleCanHaveIcons} key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab three" key="tab-3">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Custom Style</StorybookSubHeading>
    <Tabs size="small" distribution="start" divider initialSelectedIndex={10}>
      <Tab
        label="Tab one"
        key="tab-1"
        overrides={{stylePreset: 'customOutlineStyle'}}
      >
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleCanHaveIcons} key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab three" key="tab-3">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Custom Width</StorybookSubHeading>
    <Tabs size="small" distribution="start" divider initialSelectedIndex={10}>
      <Tab
        label="Tab one"
        key="tab-1"
        overrides={{stylePreset: 'customOutlineWidth'}}
      >
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleCanHaveIcons} key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab three" key="tab-3">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Custom Offset</StorybookSubHeading>
    <Tabs size="small" distribution="start" divider initialSelectedIndex={10}>
      <Tab
        label="Tab one"
        key="tab-1"
        overrides={{stylePreset: 'customOutlineOffset'}}
      >
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleCanHaveIcons} key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab three" key="tab-3">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />
  </>
);
StoryTabsOutlineOverride.storyName = 'tabs-outline-overrides';
StoryTabsOutlineOverride.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export default {
  title: 'Components/tabs',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          tabsCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
