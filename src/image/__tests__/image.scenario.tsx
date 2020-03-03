import * as React from 'react';
import {Image} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';

export const name = 'image';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const component = () => (
  <React.Fragment>
    <StorybookHeading>Image with sharp border-radius</StorybookHeading>
    <div>
      <Container>
        <Image
          src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
          aspectWidth={3}
          aspectHeight={2}
          alt="Example Image"
        />
      </Container>
    </div>
    <StorybookHeading>Invalid image reference</StorybookHeading>
    <div>
      <Container>
        <Image
          src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.pngx"
          aspectWidth={3}
          aspectHeight={2}
          alt="Example Image"
        />
      </Container>
    </div>
    <StorybookHeading>Invalid image reference hiding logo</StorybookHeading>
    <div>
      <Container>
        <Image
          src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.pngx"
          aspectWidth={3}
          aspectHeight={2}
          alt="Example Image"
          hideLoadingIcon
        />
      </Container>
    </div>
    <StorybookHeading>Image with rounded border-radius</StorybookHeading>
    <div>
      <Container>
        <Image
          src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
          aspectWidth={3}
          aspectHeight={2}
          alt="Example Image"
          hideLoadingIcon
          $stylePreset="imageRounded"
        />
      </Container>
    </div>
    <StorybookHeading>Image with circle border-radius</StorybookHeading>
    <div>
      <Container>
        <Image
          src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-1-1.png"
          aspectWidth={1}
          aspectHeight={1}
          alt="Example Image"
          hideLoadingIcon
          $stylePreset="imageCircle"
        />
      </Container>
    </div>
  </React.Fragment>
);
