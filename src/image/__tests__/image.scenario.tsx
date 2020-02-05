import * as React from 'react';
import {Image} from '..';
import {styled} from '../../utils/style';
import {createTheme, Theme} from '../../themes/creator';
import {
  BorderRadiusShape,
  borderRadiusPrimitives,
} from '../../themes/newskit-light/border-radius';
import {colorPrimitives} from '../../themes/newskit-light/colors';
import {ThemeProvider, StylePresetStates} from '../../themes';
import {StorybookHeading} from '../../test/storybook-comps';

const customTheme: Theme = createTheme('awesome-theme', {
  themeOverrider: () => ({
    stylePresets: {
      myAwesomeCustomStyle: {
        base: {
          backgroundColor: colorPrimitives.blue040,
          borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
          iconColor: colorPrimitives.green040,
          borderWidth: '3px',
          borderStyle: 'dotted',
          borderColor: 'red',
        },
      } as StylePresetStates,
    },
  }),
});

export const name = 'image';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const component = () => (
  <React.Fragment>
    <StorybookHeading>Default theme</StorybookHeading>
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
    <StorybookHeading>
      Default theme with invalid image reference
    </StorybookHeading>
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
    <StorybookHeading>
      Default theme with invalid image reference hiding logo
    </StorybookHeading>
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
    <StorybookHeading>Using custom style preset</StorybookHeading>
    <div>
      <ThemeProvider theme={customTheme}>
        <Container>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
            aspectWidth={3}
            aspectHeight={2}
            alt="Example Image"
            $stylePreset="myAwesomeCustomStyle"
          />
        </Container>
      </ThemeProvider>
    </div>
    <StorybookHeading>
      Using custom style preset with invalid image reference
    </StorybookHeading>
    <div>
      <ThemeProvider theme={customTheme}>
        <Container>
          <Image
            src="invalid-image"
            aspectWidth={3}
            aspectHeight={2}
            alt="Example Image"
            $stylePreset="myAwesomeCustomStyle"
          />
        </Container>
      </ThemeProvider>
    </div>
    <StorybookHeading>
      Using custom style preset with invalid image reference hiding logo
    </StorybookHeading>
    <div>
      <ThemeProvider theme={customTheme}>
        <Container>
          <Image
            src="invalid-image"
            aspectWidth={3}
            aspectHeight={2}
            alt="Example Image"
            $stylePreset="myAwesomeCustomStyle"
            hideLoadingIcon
          />
        </Container>
      </ThemeProvider>
    </div>
  </React.Fragment>
);
