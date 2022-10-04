import * as React from 'react';
import {Image} from '..';
import {styled} from '../../utils/style';

const ImageContainer = styled.div`
  margin-top: 300vh;
`;

export default {
  title: 'Components/image-e2e',
  component: () => 'None',
};

export const StoryE2eTest = () => (
  <ImageContainer>
    <p>Scroll down</p>
    <Image
      src="https://placekitten.com/400/400"
      overrides={{width: '400px', height: '400px'}}
      loadingAspectRatio="1:1"
      loading="lazy"
      alt="Cat image"
      placeholderIcon
    />
  </ImageContainer>
);
StoryE2eTest.storyName = 'e2e-test';
StoryE2eTest.parameters = {eyes: {include: false}};
