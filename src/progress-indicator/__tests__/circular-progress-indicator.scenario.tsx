import * as React from 'react';
import {CircularProgressIndicator} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {IconSizeKeys} from '../../themes';

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

export default {
  name: 'circular-progress-indicator',
  children: [
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Default</StorybookHeading>
          <CircularProgressIndicator />
        </React.Fragment>
      ),
      name: 'progress-indicator-default',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Sizes</StorybookHeading>
          {sizes.map(size => (
            <CircularProgressIndicator $size={size as IconSizeKeys} />
          ))}
        </React.Fragment>
      ),
      name: 'progress-indicator-size',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
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
        </React.Fragment>
      ),
      name: 'progress-indicator-inverse',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Without track</StorybookHeading>
          {sizes.map(size => (
            <CircularProgressIndicator $size={size as IconSizeKeys} hideTrack />
          ))}
        </React.Fragment>
      ),
      name: 'progress-indicator-without-track',
      type: 'story',
    },
  ],
};
