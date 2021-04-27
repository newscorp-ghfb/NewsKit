import * as React from 'react';
import {AspectRatio} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ChildContainer = styled.div`
  width: 98%;
  height: 98%;
  border: dashed red;
`;

export default {
  title: 'aspect-ratio',
  children: [
    {
      storyName: '1:1 aspect ratio',
      storyFn: () => (
        <Container>
          <StorybookHeading>1:1 aspect ratio</StorybookHeading>
          <AspectRatio aspectRatio="1:1">
            <ChildContainer>1 by 1 aspect ratio</ChildContainer>
          </AspectRatio>
        </Container>
      ),
    },
    {
      storyName: '3:2 aspect ratio',
      storyFn: () => (
        <Container>
          <StorybookHeading>3:2 ratio</StorybookHeading>
          <AspectRatio aspectRatio="3:2">
            <ChildContainer>3 by 2 aspect ratio</ChildContainer>
          </AspectRatio>
        </Container>
      ),
    },
    {
      storyName: '5:4 aspect ratio',
      storyFn: () => (
        <Container>
          <StorybookHeading>5:4 aspect ratio</StorybookHeading>
          <AspectRatio aspectRatio="5:4">
            <ChildContainer>5 by 4 aspect ratio</ChildContainer>
          </AspectRatio>
        </Container>
      ),
    },
    {
      storyName: '1:1 aspect ratio with 3:2 image',
      storyFn: () => (
        <Container>
          <StorybookHeading>1:1 aspect ratio with 3:2 image</StorybookHeading>
          <AspectRatio aspectRatio="1:1">
            <img
              src="/placeholder-3x2.png"
              alt="3:2 test"
              height="400px"
              width="600px"
            />
          </AspectRatio>
        </Container>
      ),
    },
    {
      storyName: '3:2 aspect ratio with 1:1 image',
      storyFn: () => (
        <Container>
          <StorybookHeading>3:2 aspect ratio with 1:1 image</StorybookHeading>
          <AspectRatio aspectRatio="3:2">
            <img
              src="/placeholder-1x1.png"
              alt="1:1 test"
              height="600px"
              width="600px"
            />
          </AspectRatio>
        </Container>
      ),
    },
  ],
};
