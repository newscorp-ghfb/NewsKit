import * as React from 'react';
import {AspectRatio} from '..';
import {styled, getColorCssFromTheme} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ChildContainer = styled.div`
  width: 98%;
  height: 98%;
  border: dashed red;
  ${getColorCssFromTheme('color', 'inkBase')};
`;

export default {
  title: 'Deprecated/Aspect Ratio',
  component: () => 'None',
};

export const Story11AspectRatio = () => (
  <Container>
    <StorybookHeading>1:1 aspect ratio</StorybookHeading>
    <AspectRatio aspectRatio="1:1">
      <ChildContainer>1 by 1 aspect ratio</ChildContainer>
    </AspectRatio>
  </Container>
);
Story11AspectRatio.storyName = '1:1 aspect ratio';

export const Story32AspectRatio = () => (
  <Container>
    <StorybookHeading>3:2 ratio</StorybookHeading>
    <AspectRatio aspectRatio="3:2">
      <ChildContainer>3 by 2 aspect ratio</ChildContainer>
    </AspectRatio>
  </Container>
);
Story32AspectRatio.storyName = '3:2 aspect ratio';

export const Story54AspectRatio = () => (
  <Container>
    <StorybookHeading>5:4 aspect ratio</StorybookHeading>
    <AspectRatio aspectRatio="5:4">
      <ChildContainer>5 by 4 aspect ratio</ChildContainer>
    </AspectRatio>
  </Container>
);
Story54AspectRatio.storyName = '5:4 aspect ratio';

export const Story11AspectRatioWith32Image = () => (
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
);
Story11AspectRatioWith32Image.storyName = '1:1 aspect ratio with 3:2 image';

export const Story32AspectRatioWith11Image = () => (
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
);
Story32AspectRatioWith11Image.storyName = '3:2 aspect ratio with 1:1 image';
