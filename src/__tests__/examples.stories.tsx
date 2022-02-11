import * as React from 'react';
import {CSSTransition} from 'react-transition-group';
import {createTheme, ThemeProvider} from '../theme';
import {
  getTransitionPresetFromTheme,
  getStylePresetFromTheme,
  styled,
} from '../utils/style';
import {Button} from '../button';

const myCustomTheme = createTheme({
  name: 'my-custom',
  overrides: {
    transitionPresets: {},
    stylePresets: {
      box: {
        base: {
          backgroundColor: '{{colors.purple030}}',
          borderWidth: '{{borders.borderWidth030}}',
          borderStyle: 'solid',
          borderColor: '{{colors.green020}}',
        },
        hover: {
          backgroundColor: '{{colors.purple070}}',
          borderColor: '{{colors.green040}}',
        },
      },
      ball: {
        base: {
          backgroundColor: '{{colors.purple030}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
        },
      },
    },
  },
});

const Container = styled.div`
  margin: 40px;
  border: 1px solid black;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
  margin-top: 100px;
  height: 300px;
`;

const Box = styled.div`
  ${getStylePresetFromTheme('box')}
  ${getTransitionPresetFromTheme([
    'backgroundColorChange',
    'borderColorChange',
  ])}
  width: 100px;
  height: 100px;
`;

const StyledBall = styled.div`
  ${getStylePresetFromTheme('ball')}
  ${getTransitionPresetFromTheme('slideBottom', 'nk-ball')}
  width: 100px;
  height: 100px;
`;

const Ball = () => {
  const [isActive, setIsActive] = React.useState(false);

  const doStuff = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 2000);
  };

  return (
    <CSSTransition in={isActive} timeout={3000} classNames="nk-ball">
      <StyledBall onClick={() => doStuff()} />
    </CSSTransition>
  );
};

export default {
  title: 'NewsKit Light/examples',
  component: () => 'None',
};

export const StoryExample = () => (
  <ThemeProvider theme={myCustomTheme}>
    <Container>
      <Box />
    </Container>
  </ThemeProvider>
);
StoryExample.storyName = 'example-example';

export const StoryExampleMountUnmout = () => (
  <ThemeProvider theme={myCustomTheme}>
    <Center>
      <Ball />
    </Center>
  </ThemeProvider>
);
StoryExampleMountUnmout.storyName = 'example-mount-unmount';
