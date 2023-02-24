import * as React from 'react';
import {Flag} from '..';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {IconFilledAddCircle} from '../../icons';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {useBreakpointKey} from '../../utils/hooks';

const InverseContainer = styled.div`
  margin: -16px;
  ${getColorCssFromTheme('backgroundColor', 'inkContrast')};
  ${getColorCssFromTheme('color', 'inkInverse')};
`;

const MarginOverridesWrapper = styled.div`
  width: min-content;
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

const autoFlagCols = `repeat(auto-fill, minmax(150px, max-content))`;
const twoFlagCols = {
  xs: 'repeat(1, minmax(150px, max-content))',
  sm: 'repeat(2, minmax(150px, max-content))',
};
const threeFlagCols = {
  xs: 'repeat(1, minmax(150px, max-content))',
  sm: 'repeat(3, minmax(150px, max-content))',
};

const presets = [
  'Primary',
  'Neutral',
  'Informative',
  'Notice',
  'Positive',
  'Negative',
];

export const StoryFlagDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <Flag>Flag</Flag>
    </StorybookCase>
  </StorybookPage>
);
StoryFlagDefault.storyName = 'Default';

export const StoryIntents = () => {
  const bp = useBreakpointKey();
  return (
    <StorybookPage
      columns={twoFlagCols}
      rowGap={{xs: 'space050', sm: 'space080'}}
    >
      {bp === 'xs' && <StorybookCase title="Solid and minimal" />}
      {presets.map((presetSuffix, index) => (
        <React.Fragment key={presetSuffix}>
          <StorybookCase
            title={index === 0 && bp !== 'xs' ? 'Solid' : undefined}
          >
            <Flag overrides={{stylePreset: `flagSolid${presetSuffix}`}}>
              {presetSuffix}
            </Flag>
          </StorybookCase>
          <StorybookCase
            title={index === 0 && bp !== 'xs' ? 'Minimal' : undefined}
          >
            <Flag overrides={{stylePreset: `flagMinimal${presetSuffix}`}}>
              {presetSuffix}
            </Flag>
          </StorybookCase>
        </React.Fragment>
      ))}
    </StorybookPage>
  );
};
StoryIntents.storyName = 'Intents';

export const StorySize = () => (
  <StorybookPage columns={autoFlagCols}>
    <StorybookCase title="Small">
      <Flag size="small">Flag</Flag>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Flag size="medium">Flag</Flag>
    </StorybookCase>
    <StorybookCase title="Large">
      <Flag size="large">Flag</Flag>
    </StorybookCase>
  </StorybookPage>
);
StorySize.storyName = 'Size';

export const StoryInverse = () => (
  <InverseContainer>
    <StorybookPage
      columns={autoFlagCols}
      overrides={{
        paddingBlock: 'space070',
        marginInline: 'space020',
        paddingInline: 'space050',
      }}
    >
      <StorybookCase inverse title="Solid">
        <Flag overrides={{stylePreset: 'flagSolidInverse'}}>Flag</Flag>
      </StorybookCase>
      <StorybookCase inverse title="Minimal">
        <Flag overrides={{stylePreset: 'flagMinimalInverse'}}>Flag</Flag>
      </StorybookCase>
    </StorybookPage>
  </InverseContainer>
);
StoryInverse.storyName = 'Inverse flag';

export const StoryVariations = () => (
  <StorybookPage columns={threeFlagCols}>
    <StorybookCase title="Leading">
      <Flag>
        <IconFilledAddCircle />
        Flag
      </Flag>
    </StorybookCase>
    <StorybookCase title="Trailing">
      <Flag>
        Flag
        <IconFilledAddCircle />
      </Flag>
    </StorybookCase>
    <StorybookCase title="Leading and trailing">
      <Flag>
        <IconFilledAddCircle />
        Flag
        <IconFilledAddCircle />
      </Flag>
    </StorybookCase>
    <StorybookCase title="Leading minimal">
      <Flag overrides={{stylePreset: 'flagMinimalPrimary'}}>
        <IconFilledAddCircle />
        Flag
      </Flag>
    </StorybookCase>
    <StorybookCase title="Trailing minimal">
      <Flag overrides={{stylePreset: 'flagMinimalPrimary'}}>
        Flag
        <IconFilledAddCircle />
      </Flag>
    </StorybookCase>
    <StorybookCase title="Leading and trailing minimal">
      <Flag overrides={{stylePreset: 'flagMinimalPrimary'}}>
        <IconFilledAddCircle />
        Flag
        <IconFilledAddCircle />
      </Flag>
    </StorybookCase>
  </StorybookPage>
);
StoryVariations.storyName = 'Variations';

export const StoryLogicalProps = () => (
  <StorybookPage columns={autoFlagCols}>
    <StorybookCase title="Logical padding overrides">
      <Flag overrides={{paddingBlock: 'space060', paddingInline: 'space060'}}>
        Flag
      </Flag>
    </StorybookCase>
    <StorybookCase title="Logical margin overrides">
      <MarginOverridesWrapper>
        <Flag overrides={{marginBlock: 'space045', marginInline: 'space045'}}>
          Flag
        </Flag>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';

export const StoryOverrides = () => (
  <StorybookPage columns={twoFlagCols}>
    <StorybookCase title="Icon and inline overridden size">
      <Flag>
        <IconFilledAddCircle />
        Flag
        <IconFilledAddCircle overrides={{size: 'iconSize020'}} />
      </Flag>
    </StorybookCase>
    <StorybookCase title="Icon and inline overridden size">
      <Flag>
        <IconFilledAddCircle overrides={{size: 'iconSize020'}} />
        Flag
        <IconFilledAddCircle overrides={{size: 'iconSize030'}} />
      </Flag>
    </StorybookCase>
  </StorybookPage>
);
StoryOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Flag',
  component: Flag,
  parameters: {
    nkDocs: {
      title: 'Flag',
      url: 'https://newskit.co.uk/components/flag',
      description:
        'The flag element is used to show the status of the content.',
    },
  },
};
