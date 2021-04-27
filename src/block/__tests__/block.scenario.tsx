import React from 'react';
import {Block} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {Visible} from '../../grid/visibility';

// The style presets are added for easier visualization of the spacings around the Block component
const myCustomTheme = createTheme({
  name: 'my-custom-block-theme',
  overrides: {
    stylePresets: {
      blockOuter: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'solid',
          borderColor: '{{colors.blue060}}',
        },
      },
      blockInner: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'solid',
          borderColor: '{{colors.red060}}',
        },
      },
      customBlock: {
        base: {
          backgroundColor: '{{colors.interfaceInformative010}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
    },
  },
});

const StyledHr = styled.hr`
  border: 1px solid dashed;
`;

export default {
  title: 'block',
  children: [
    {
      storyName: 'block',
      storyFn: () => (
        <React.Fragment>
          <ThemeProvider theme={myCustomTheme}>
            <StorybookHeading>Block</StorybookHeading>
            <StyledHr />
            <Block stylePreset="blockOuter">
              <Block stylePreset="blockInner">
                <span>Block default without padding or margin</span>
              </Block>
            </Block>
            <StyledHr />
            <Block as="span">
              <span> Block as span </span>
            </Block>
            <StyledHr />
            <Block stylePreset="blockOuter">
              <Block
                spaceStack="space030"
                spaceInset="spaceInset030"
                stylePreset="customBlock"
              >
                <span>
                  Block with margin spaceStack030, padding spaceInset030, style
                  customBlock
                </span>
              </Block>
            </Block>
            <StyledHr />
            <Block stylePreset="blockOuter">
              <Block
                stylePreset="blockInner"
                spaceStack={{
                  xs: 'space010',
                  sm: 'space020',
                  md: 'space030',
                  lg: 'space040',
                }}
              >
                <Visible xs>
                  <span>Block with margin spaceStack010 at xs breakpoint</span>
                </Visible>
                <Visible sm>
                  <span>Block with margin spaceStack020 at sm breakpoint</span>
                </Visible>
                <Visible md>
                  <span>Block with margin spaceStack030 at md breakpoint</span>
                </Visible>
                <Visible lg>
                  <span>Block with margin spaceStack040 at lg breakpoint</span>
                </Visible>
                <Visible xl>
                  <span>Block with margin spaceStack050 at xl breakpoint</span>
                </Visible>
              </Block>
            </Block>
            <StyledHr />
            <Block stylePreset="blockOuter">
              <Block spaceInline="space030" stylePreset="blockInner">
                <span>Block with margin spaceInline030</span>
              </Block>
            </Block>
            <StyledHr />
          </ThemeProvider>
        </React.Fragment>
      ),
    },
  ],
};
