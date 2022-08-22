import * as React from 'react';
import {useState} from 'react';
import {IconFilledAdd} from '../../icons';
import {Stack} from '../../stack';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {styled} from '../../utils';
import {SelectionList, SelectionListOption} from '../index';

export default {
  title: 'NewsKit Light/selection-list',
  component: () => 'None',
};

const ITEMS = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
const SELECTED_INDEX = 0;

const Container = styled.div`
  width: 320px;
`;

export const StorySelectionList = () => {
  const [selectedOption, setSelectedOption] = useState(SELECTED_INDEX);
  return (
    <>
      <StorybookHeading>Selection List</StorybookHeading>
      <Stack stackDistribution="space-between" flow="horizontal-top">
        <Container>
          <StorybookSubHeading>
            Selected option (interactive)
          </StorybookSubHeading>
          <SelectionList>
            {ITEMS.map((item, index) => (
              <SelectionListOption
                onClick={() => setSelectedOption(index)}
                selected={selectedOption === index}
                key={item}
              >
                {item}
              </SelectionListOption>
            ))}
          </SelectionList>
        </Container>
        <Container>
          <StorybookSubHeading>
            Selected option (non-interactive)
          </StorybookSubHeading>
          <SelectionList aria-label="selection-list-story">
            {ITEMS.map((item, index) => (
              <SelectionListOption key={item} selected={index === 0}>
                {item}
              </SelectionListOption>
            ))}
          </SelectionList>
        </Container>
        <Container>
          <StorybookSubHeading>JSX options</StorybookSubHeading>
          <SelectionList>
            <SelectionListOption selected>
              <Stack>
                <div>Multiple line</div>
                <div>option 1</div>
              </Stack>
            </SelectionListOption>
            <SelectionListOption>
              <Stack>
                <div>Multiple line</div>
                <div>option 2</div>
              </Stack>
            </SelectionListOption>
          </SelectionList>
        </Container>
      </Stack>
    </>
  );
};
StorySelectionList.storyName = 'selection-list';

export const StorySelectionListWithOverrides = () => {
  // eslint-disable-next-line no-console
  const onClickHandler = () => console.log('clicked');
  return (
    <div>
      <StorybookHeading>Selection List With Overrides</StorybookHeading>
      <Stack stackDistribution="space-between" flow="horizontal-top">
        <Container>
          <StorybookSubHeading>Options overrides</StorybookSubHeading>
          <SelectionList>
            {ITEMS.map((item, index) => (
              <SelectionListOption
                key={item}
                selected={SELECTED_INDEX === index}
                overrides={{
                  typographyPreset: 'editorialHeadline030',
                  minHeight: 'sizing090',
                  icon: {iconSize: 'iconSize030'},
                }}
              >
                {item}
              </SelectionListOption>
            ))}
          </SelectionList>
        </Container>
        <Container>
          <StorybookSubHeading>Single option overrides</StorybookSubHeading>
          <SelectionList>
            <SelectionListOption>Selection 1</SelectionListOption>
            <SelectionListOption>Selection 2</SelectionListOption>
            <SelectionListOption
              selected
              overrides={{
                marginBlock: 'space070',
                typographyPreset: 'editorialHeadline030',
                minHeight: 'sizing090',
                icon: {iconSize: 'iconSize030'},
              }}
            >
              Selection 3
            </SelectionListOption>
            <SelectionListOption onClick={onClickHandler}>
              Selection 4
            </SelectionListOption>
          </SelectionList>
        </Container>

        <Container>
          <StorybookSubHeading>Icon overrides</StorybookSubHeading>
          <SelectionList>
            {ITEMS.map((item, index) => (
              <SelectionListOption
                key={item}
                selected={SELECTED_INDEX === index}
                selectedIcon={
                  <IconFilledAdd overrides={{size: 'iconSize030'}} />
                }
                overrides={{
                  minHeight: 'sizing090',
                  icon: {iconSize: 'iconSize030'},
                }}
              >
                {item}
              </SelectionListOption>
            ))}
          </SelectionList>
        </Container>
      </Stack>
    </div>
  );
};
StorySelectionListWithOverrides.storyName = 'selection-list-with-overrides';

export const StorySelectionListWithLogicalProps = () => (
  <>
    <StorybookHeading>Selection List With Logical Props</StorybookHeading>
    <Stack stackDistribution="space-between" flow="horizontal-top">
      <Container>
        <StorybookSubHeading>Logical Props overrides (all)</StorybookSubHeading>
        <SelectionList
          overrides={{
            marginBlock: 'space040',
            marginInline: 'space040',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {ITEMS.map((item, index) => (
            <SelectionListOption key={item} selected={SELECTED_INDEX === index}>
              {item}
            </SelectionListOption>
          ))}
        </SelectionList>
      </Container>
      <Container>
        <StorybookSubHeading>
          Logical Props overrides (margin)
        </StorybookSubHeading>
        <SelectionList
          overrides={{
            marginBlock: 'space040',
            marginInline: 'space040',
          }}
        >
          {ITEMS.map((item, index) => (
            <SelectionListOption key={item} selected={SELECTED_INDEX === index}>
              {item}
            </SelectionListOption>
          ))}
        </SelectionList>
      </Container>
      <Container>
        <StorybookSubHeading>
          Logical Props overrides (padding)
        </StorybookSubHeading>
        <SelectionList
          overrides={{
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {ITEMS.map((item, index) => (
            <SelectionListOption key={item} selected={SELECTED_INDEX === index}>
              {item}
            </SelectionListOption>
          ))}
        </SelectionList>
      </Container>
    </Stack>
  </>
);
StorySelectionListWithLogicalProps.storyName =
  'selection-list-with-logical-props';
