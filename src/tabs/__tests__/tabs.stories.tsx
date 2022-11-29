import * as React from 'react';
import {Story as StoryType} from '@storybook/react';

import {styled, Scroll, TextBlock, getColorCssFromTheme} from '../..';
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

const LoremIpsumText = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda
ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae di
rem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora in
cidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercit
ationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iu
re reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugi
at quo voluptas nulla pariatur?`,
  `But I must explain to you how all this mistaken idea of denouncing plea
sure and praising pain was born and I will give you a complete account of the system, and expound the actu
al teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects
 nally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial exa
 mple, which of us ever undertakes laborious physical exercise, except to obtain some advantage from
  it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoy
  ing consequences, or one who avoids a pain that produces no resultant pleasure?`,
];

const LoremIpsumText2 = [
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
  <Block spaceInset="spaceInset040">
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
    can have Icons <IconFilledEmail />
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
    <StorybookHeading>Tabs Distribution Start</StorybookHeading>

    <StorybookSubHeading>Horizontal</StorybookSubHeading>
    <Tabs size="small" distribution="start" divider initialSelectedIndex={10}>
      <Tab label="H tab 1" key="tab-1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleCanHaveIcons} key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="H tab 3, three" key="tab-3">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <Tabs size="medium" divider>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>

    <Spacer />

    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs size="small" vertical divider distribution="start">
      <Tab label="V tab 1">
        <LoremIpsum textNumber={1} text={LoremIpsumText2} />
      </Tab>
      <Tab label="V tab 2">
        <LoremIpsum textNumber={2} />
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="V tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsDistributionStart.storyName = 'tabs-distribution-start';
StoryTabsDistributionStart.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryControlledTabs = () => {
  const [selectedIndex, setSelected] = React.useState(0);
  return (
    <>
      <StorybookHeading>Controlled Tabs Index selection</StorybookHeading>
      <Block spaceInset="spaceInset040">
        <Button onClick={() => setSelected(state => Math.min(2, state + 1))}>
          +
        </Button>
        <Block spaceInset="spaceInset040" />
        <Button onClick={() => setSelected(state => Math.max(0, state - 1))}>
          -
        </Button>
      </Block>
      <Tabs
        size="small"
        distribution="start"
        divider
        selectedIndex={selectedIndex}
        onChange={setSelected}
      >
        <Tab label="H tab 1" key="tab-1">
          <LoremIpsum textNumber={1} />
        </Tab>
        <Tab label={titleCanHaveIcons} key="tab-2">
          <LoremIpsum textNumber={2} />
        </Tab>
        <Tab label="H tab 3, three" key="tab-3">
          <LoremIpsum textNumber={3} />
        </Tab>
      </Tabs>
    </>
  );
};
StoryControlledTabs.storyName = 'tabs-controlled';
StoryControlledTabs.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsDistributionGrow = () => (
  <>
    <StorybookHeading>Tabs Distribution - Grow</StorybookHeading>

    <StorybookSubHeading>Horizontal</StorybookSubHeading>
    <Tabs size="small" distribution="grow" divider>
      <Tab label="H tab 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="H tab 2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="H tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs size="small" vertical divider distribution="grow">
      <Tab label="V tab 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="V tab 2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="V tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsDistributionGrow.storyName = 'tabs-distribution-grow';
StoryTabsDistributionGrow.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsDistributionEqual = () => (
  <>
    <StorybookHeading>Tabs Distribution - Equal</StorybookHeading>

    <StorybookSubHeading>Horizontal</StorybookSubHeading>
    <Tabs size="small" divider distribution="equal">
      <Tab label="H tab 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="H tab 2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="H tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs size="small" vertical divider distribution="equal">
      <Tab label="V tab 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="V tab 2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="V tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsDistributionEqual.storyName = 'tabs-distribution-equal';
StoryTabsDistributionEqual.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithScroll = () => (
  <>
    <StorybookHeading>
      Tabs with fixed height in container and scroll
    </StorybookHeading>

    <StorybookSubHeading>Horizontal</StorybookSubHeading>
    <Tabs size="small" divider distribution="equal">
      <Tab label="H tab 1">
        <ScrollBox>
          <LoremIpsum textNumber={1} />
        </ScrollBox>
      </Tab>
      <Tab label="H tab 2">
        <ScrollBox>
          <LoremIpsum textNumber={2} />
        </ScrollBox>
      </Tab>
      <Tab label="H tab 3, three">
        <ScrollBox>
          <LoremIpsum textNumber={3} />
        </ScrollBox>
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs size="small" vertical divider distribution="equal">
      <Tab label="V tab 1">
        <ScrollBox>
          <LoremIpsum textNumber={1} />
        </ScrollBox>
      </Tab>
      <Tab label="V tab 2">
        <ScrollBox>
          <LoremIpsum textNumber={2} />
        </ScrollBox>
      </Tab>
      <Tab label="V tab 3, three">
        <ScrollBox>
          <LoremIpsum textNumber={3} />
        </ScrollBox>
      </Tab>
    </Tabs>
  </>
);
StoryTabsWithScroll.storyName = 'tabs-with-scroll';
StoryTabsWithScroll.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsHorizontal = () => (
  <>
    <StorybookHeading>Tabs Horizontal</StorybookHeading>
    <StorybookSubHeading>Small</StorybookSubHeading>

    <Tabs size="small">
      <Tab label="Small tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Small tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Small tab">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>

    <StorybookSubHeading>Medium</StorybookSubHeading>

    <Tabs size="medium">
      <Tab label="Medium tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Medium tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Medium tab">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>

    <StorybookSubHeading>Large</StorybookSubHeading>

    <Tabs size="large">
      <Tab label="Large tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Large tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Large tab">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsHorizontal.storyName = 'tabs-horizontal';
StoryTabsHorizontal.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsHorizontalIconLabel = () => (
  <>
    <StorybookHeading>Tabs Horizontal Label / Icon</StorybookHeading>
    <StorybookSubHeading>Label Only</StorybookSubHeading>
    <Tabs size="medium" divider>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Icon Only</StorybookSubHeading>
    <Tabs size="medium" divider>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsHorizontalIconLabel.storyName = 'tabs-horizontal-icon-label';
StoryTabsHorizontalIconLabel.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsVerticalIconLabel = () => (
  <>
    <StorybookHeading>Tabs Vertical Label / Icon</StorybookHeading>
    <StorybookSubHeading>Label Only</StorybookSubHeading>
    <Tabs size="medium" divider vertical>
      <Tab ariaLabel="tab label" label="Medium tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label="Medium tab" disabled>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label="Medium tab">
        <LoremIpsum textNumber={3} />
      </Tab>
      <Tab ariaLabel="tab label" label="Medium tab">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Icon Only</StorybookSubHeading>
    <Tabs size="medium" divider vertical>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />} disabled>
        <LoremIpsum textNumber={3} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={4} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsVerticalIconLabel.storyName = 'tabs-vertical-icon-label';
StoryTabsVerticalIconLabel.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsHorizontalIconAndLabel = () => (
  <>
    <StorybookHeading>Tabs Horizontal Icon and Label</StorybookHeading>
    <StorybookSubHeading>Trailing Icon and Label</StorybookSubHeading>
    <Tabs size="small" divider>
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
    <Tabs size="medium" divider>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab ariaLabel="tab label" label={titleBetweenIcons}>
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsHorizontalIconAndLabel.storyName = 'tabs-horizontal-icon-and-label';
StoryTabsHorizontalIconAndLabel.parameters = {
  percy: {
    enableJavaScript: true,
  },
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

export const StoryTabsVertical = () => (
  <>
    <StorybookHeading>Tabs Vertical</StorybookHeading>
    <StorybookSubHeading>Small</StorybookSubHeading>
    <Tabs size="small" vertical>
      <Tab label="Small tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Small tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Small tab">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Medium</StorybookSubHeading>
    <Tabs size="medium" vertical>
      <Tab label="Medium tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Medium tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Medium tab">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Large</StorybookSubHeading>
    <Tabs size="large" vertical>
      <Tab label="Large tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Large tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Large tab">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsVertical.storyName = 'tabs-vertical';
StoryTabsVertical.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsVerticalVariantsLabelOrIcon = () => (
  <>
    <StorybookHeading>Tabs Vertical Variants (Label or Icon)</StorybookHeading>
    <StorybookSubHeading>Label Only</StorybookSubHeading>
    <Tabs size="medium" vertical divider>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Icon Only</StorybookSubHeading>
    <Tabs size="medium" vertical divider>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab ariaLabel="tab label" label={<IconFilledEmail />}>
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsVerticalVariantsLabelOrIcon.storyName =
  'tabs-vertical-variants-label-or-icon';
StoryTabsVerticalVariantsLabelOrIcon.parameters = {
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
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position End (default)</StorybookSubHeading>
    <Tabs size="medium">
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position None</StorybookSubHeading>
    <Tabs size="medium" indicatorPosition="none">
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
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
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position End (default)</StorybookSubHeading>
    <Tabs size="medium" vertical>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Indicator position None</StorybookSubHeading>
    <Tabs size="medium" vertical indicatorPosition="none">
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
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

export const StoryTabsContent = () => (
  <>
    <StorybookHeading>Tabs Content</StorybookHeading>
    <StorybookSubHeading>Tab with content</StorybookSubHeading>
    <Tabs size="medium" divider>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tab vertical with content</StorybookSubHeading>
    <Tabs size="medium" vertical divider>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsContent.storyName = 'tabs-content';
StoryTabsContent.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithDisabledTab = () => (
  <>
    <StorybookHeading>Tabs With Disabled Tab</StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal</StorybookSubHeading>
    <Tabs>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two" disabled>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs vertical>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two" disabled>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
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
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs
      vertical
      overrides={{selectionIndicator: {indicator: {size: 'sizing030'}}}}
    >
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
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
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs vertical overrides={{selectionIndicator: {indicator: {size: '75%'}}}}>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
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
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical</StorybookSubHeading>
    <Tabs
      vertical
      overrides={{selectionIndicator: {indicator: {size: '30px'}}}}
    >
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
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
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
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
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
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
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
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
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
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

export const StoryTabsWithPresetsOverrides = () => (
  <>
    <StorybookHeading>Tabs with presets overides</StorybookHeading>
    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs
      size="small"
      overrides={{
        spaceInline: {
          xs: 'space010',
          lg: 'space080',
        },
        tab: {
          spaceInline: 'space020',
        },
        selectionIndicator: {
          track: {
            stylePreset: 'tabsBarTrackCustomPreset',
            weight: 'borderWidth030',
          },
          indicator: {
            stylePreset: 'tabsBarIndicatorCustomPreset',
            weight: 'borderWidth030',
          },
        },
        divider: {
          stylePreset: 'dividerCustomPreset',
        },
      }}
      vertical
      divider
      distribution="grow"
    >
      <Tab label="V tab 1">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="V tab 2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="V tab 3, three">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsWithPresetsOverrides.storyName = 'tabs-with-presets-overrides';
StoryTabsWithPresetsOverrides.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithPresetsOverridesShadows = () => {
  const CustomScroll = styled.div`
    max-width: 100%;
  `;

  const TabsContainer = styled.div`
    padding: 30px;
    background: #e9e9e9;
  `;

  const TabPaneCutter = styled.div`
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: relative;
  `;

  const TabPanel = styled.div`
    box-shadow: 0px -1px 3px 1px #999999;
    background: #fff;
    margin-top: -1px;
  `;

  return (
    <>
      <StorybookHeading>Tabs with Box Shadow</StorybookHeading>
      <TabsContainer>
        <Tabs
          size="medium"
          overrides={{
            scroll: props => <CustomScroll {...props} />,
            spaceInline: 'space000',
            tab: {
              spaceInline: '30px',
            },
          }}
          indicatorPosition="none"
        >
          <Tab label="V tab 1" overrides={{stylePreset: 'shadowTab'}}>
            <TabPanel>
              <TabPaneCutter />
              <LoremIpsum textNumber={1} />
            </TabPanel>
          </Tab>
          <Tab label="V tab 2" overrides={{stylePreset: 'shadowTab'}}>
            <TabPanel>
              <TabPaneCutter />
              <LoremIpsum textNumber={2} />
            </TabPanel>
          </Tab>
          <Tab label="V tab 3, three" overrides={{stylePreset: 'shadowTab'}}>
            <TabPanel>
              <TabPaneCutter />
              <LoremIpsum textNumber={3} />
            </TabPanel>
          </Tab>
        </Tabs>
      </TabsContainer>
    </>
  );
};
StoryTabsWithPresetsOverridesShadows.storyName = 'tabs-with-presets-shadows';
StoryTabsWithPresetsOverridesShadows.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithPresetsOverridesOnIndividualTab = () => (
  <>
    <StorybookHeading>
      Tabs with presets overides on individual tab
    </StorybookHeading>
    <StorybookSubHeading>Vertical</StorybookSubHeading>
    <Tabs size="small" vertical divider distribution="grow">
      <Tab label="V tab 1" overrides={{stylePreset: 'tabCustomPreset'}}>
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="V tab 2" overrides={{stylePreset: 'tabCustomPreset'}}>
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="V tab 3, three" overrides={{stylePreset: 'tabCustomPreset'}}>
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

export const StoryTabsWithAlign = () => (
  <>
    <StorybookHeading>Tabs With Align</StorybookHeading>
    <StorybookSubHeading>Tabs Horizontal Align Left</StorybookSubHeading>
    <Tabs align="start" distribution="grow">
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>

    <StorybookSubHeading>Tabs Horizontal Align Right</StorybookSubHeading>
    <Tabs align="end" distribution="grow">
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>

    <StorybookSubHeading>Tabs Vertical Align Left</StorybookSubHeading>
    <Tabs align="start" distribution="grow" vertical>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
    <StorybookSubHeading>Tabs Vertical Align Right</StorybookSubHeading>
    <Tabs align="end" distribution="grow" vertical>
      <Tab label="Tab">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Two">
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label="Tab Three is Long">
        <LoremIpsum textNumber={1} />
      </Tab>
    </Tabs>
  </>
);
StoryTabsWithAlign.storyName = 'tabs-with-align';
StoryTabsWithAlign.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StoryTabsWithOverflowAndScroll = () => (
  <MainContainer>
    <StorybookHeading>Tabs With Overflow and Scroll</StorybookHeading>
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
StoryTabsWithOverflowAndScroll.storyName = 'tabs-with-overflow-and-scroll';
StoryTabsWithOverflowAndScroll.parameters = {
  percy: {skip: true},
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
      <Tab label="Two transition presets">
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
        label="Two transition presets"
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
        label="H tab 1"
        key="tab-1"
        overrides={{stylePreset: 'customOutlineColor'}}
      >
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleCanHaveIcons} key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="H tab 3, three" key="tab-3">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Custom Style</StorybookSubHeading>
    <Tabs size="small" distribution="start" divider initialSelectedIndex={10}>
      <Tab
        label="H tab 1"
        key="tab-1"
        overrides={{stylePreset: 'customOutlineStyle'}}
      >
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleCanHaveIcons} key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="H tab 3, three" key="tab-3">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Custom Width</StorybookSubHeading>
    <Tabs size="small" distribution="start" divider initialSelectedIndex={10}>
      <Tab
        label="H tab 1"
        key="tab-1"
        overrides={{stylePreset: 'customOutlineWidth'}}
      >
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleCanHaveIcons} key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="H tab 3, three" key="tab-3">
        <LoremIpsum textNumber={3} />
      </Tab>
    </Tabs>
    <Spacer />

    <StorybookSubHeading>Custom Offset</StorybookSubHeading>
    <Tabs size="small" distribution="start" divider initialSelectedIndex={10}>
      <Tab
        label="H tab 1"
        key="tab-1"
        overrides={{stylePreset: 'customOutlineOffset'}}
      >
        <LoremIpsum textNumber={1} />
      </Tab>
      <Tab label={titleCanHaveIcons} key="tab-2">
        <LoremIpsum textNumber={2} />
      </Tab>
      <Tab label="H tab 3, three" key="tab-3">
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
