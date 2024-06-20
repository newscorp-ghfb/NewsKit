import * as React from 'react';
import {Image} from '..';
import {styled} from '../../utils/style';

const ImageContainer = styled.div`
  margin-top: 300vh;
`;

export default {
  title: 'Components/image-e2e-hidden',
  component: () => 'None',
};

export const StoryE2eTest = () => (
  <ImageContainer>
    <p>Scroll down</p>
    <Image
      src="https://placekitten.com/200/300"
      overrides={{width: '200px', height: '300px'}}
      loadingAspectRatio="2:3"
      loading="lazy"
      alt="Cat image"
      placeholderIcon
    />
  </ImageContainer>
);
StoryE2eTest.storyName = 'e2e-test';
StoryE2eTest.parameters = {percy: {skip: true}};
