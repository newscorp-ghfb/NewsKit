import * as React from 'react';
import {Image} from '..';
import {styled} from '../../utils/style';

const ImageContainer = styled.div`
  margin-top: 300vh;
`;

export default {
  title: 'image-e2e',
  children: [
    {
      storyName: 'e2e-test',
      parameters: {eyes: {include: false}},
      storyFn: () => (
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
      ),
    },
  ],
};
