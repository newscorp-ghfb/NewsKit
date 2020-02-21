import * as React from 'react';
import {CircularProgressIndicator} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {IconSizeKeys} from '../../themes';

export const name = 'circular-progress-indicator';

const Container = styled.div`
  background: black;
`;

const sizes = [
  'iconSize010',
  'iconSize020',
  'iconSize030',
  'iconSize040',
  'iconSize050',
];

export const component = () => (
  <>
    <StorybookHeading>Default</StorybookHeading>
    <CircularProgressIndicator />

    <StorybookHeading>Sizes</StorybookHeading>
    {sizes.map(size => (
      <CircularProgressIndicator $size={size as IconSizeKeys} />
    ))}

    <StorybookHeading>Inverse</StorybookHeading>
    <Container>
      {sizes.map(size => (
        <CircularProgressIndicator
          $size={size as IconSizeKeys}
          $sliderTrackStylePreset="circularProgressIndicatorTrackInverse"
          $sliderIndicatorTrackStylePreset="circularProgressIndicatorIndicatorInverse"
        />
      ))}
    </Container>

    <StorybookHeading>Without track</StorybookHeading>
    {sizes.map(size => (
      <CircularProgressIndicator $size={size as IconSizeKeys} hideTrack />
    ))}
  </>
);
