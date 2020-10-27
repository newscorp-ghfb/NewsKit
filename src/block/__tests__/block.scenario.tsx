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
    },
  },
});

const StyledHr = styled.hr`
  border: 1px solid dashed;
`;

export default {
  name: 'block',
  children: [
    {
      name: 'block',
      type: 'story',
      component: () => (
        <React.Fragment>
          <ThemeProvider theme={myCustomTheme}>
            <StorybookHeading>Block</StorybookHeading>
            <StyledHr />
            <Block
              overrides={{
                stylePreset: 'blockOuter',
              }}
            >
              <Block overrides={{stylePreset: 'blockInner'}}>
                <span>Block default without padding or margin</span>
              </Block>
            </Block>
            <StyledHr />
            <Block as="span">
              <span> Block as span </span>
            </Block>
            <StyledHr />
            <Block
              overrides={{
                stylePreset: 'blockOuter',
              }}
            >
              <Block
                overrides={{
                  spaceStack: 'space030',
                  spaceInset: 'spaceInset030',
                  stylePreset: 'flagSolid',
                }}
              >
                <span>
                  Block with margin spaceStack030, padding spaceInset030, style
                  flagSolid, type display010
                </span>
              </Block>
            </Block>
            <StyledHr />
            <Block
              overrides={{
                stylePreset: 'blockOuter',
              }}
            >
              <Block
                overrides={{
                  stylePreset: 'blockInner',
                  spaceStack: {
                    xs: 'space010',
                    sm: 'space020',
                    md: 'space030',
                    lg: 'space040',
                  },
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
              </Block>
            </Block>
            <StyledHr />
            <Block
              overrides={{
                stylePreset: 'blockOuter',
              }}
            >
              <Block
                overrides={{
                  spaceInline: 'space030',
                  stylePreset: 'blockInner',
                }}
              >
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
