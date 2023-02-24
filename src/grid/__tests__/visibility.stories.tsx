import * as React from 'react';
import {Visible, Hidden} from '..';
import {
  styled,
  getColorCssFromTheme,
  getTypographyPresetFromTheme,
} from '../../utils/style';

const Container = styled.span<{highlight?: boolean}>`
  width: 114.64px;
  height: 64px;
  margin-right: 24px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${getTypographyPresetFromTheme('utilityLabel030')}
  ${getColorCssFromTheme('background-color', 'interactivePrimary010')};
  ${getColorCssFromTheme('borderColor', 'interfaceBrand010')};
  ${getColorCssFromTheme('color', 'inkBase')};
  ${({highlight}) => {
    if (!highlight) {
      return {};
    }
    return {
      'border-width': '2px',
      'border-style': 'solid',
    };
  }}
`;

export default {
  title: 'Components/Visibility',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Visibility',
      url: 'https://newskit.co.uk/components/visibility',
      description:
        'The collection of these three components can be used to show and hide content at different breakpoints.',
    },
  },
};

export const StoryVisibilityComponent = () => (
  <>
    <Visible display="inline-block" xs>
      <Container highlight>xs</Container>
    </Visible>
    <Hidden display="inline-block" xs>
      <Container>xs</Container>
    </Hidden>

    <Visible display="inline-block" sm>
      <Container highlight>sm</Container>
    </Visible>
    <Hidden display="inline-block" sm>
      <Container>sm</Container>
    </Hidden>

    <Visible display="inline-block" md>
      <Container highlight>md</Container>
    </Visible>
    <Hidden display="inline-block" md>
      <Container>md</Container>
    </Hidden>

    <Visible display="inline-block" lg>
      <Container highlight>lg</Container>
    </Visible>
    <Hidden display="inline-block" lg>
      <Container>lg</Container>
    </Hidden>

    <Visible display="inline-block" xl>
      <Container highlight>xl</Container>
    </Visible>
    <Hidden display="inline-block" xl>
      <Container>xl</Container>
    </Hidden>
  </>
);
StoryVisibilityComponent.storyName = 'Default';
