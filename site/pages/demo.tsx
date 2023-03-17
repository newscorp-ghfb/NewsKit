import React from 'react';
// import {
//   AudioPlayerComposable,
//   AudioPlayerVolumeControl,
//   AudioPlayerPlayPauseButton,
//   AudioPlayerForwardButton,
// } from 'newskit';

const Buttons = React.lazy(() => import('../components/buttons-comp'));

// @ts-ignore
const Demo = ({toggleTheme}) => (
  <React.Suspense>
    <h1>DEMO</h1>
    {/* <AudioPlayerComposable src="">
      <AudioPlayerForwardButton />
      <AudioPlayerVolumeControl />
      <AudioPlayerPlayPauseButton />
    </AudioPlayerComposable> */}
    <Buttons toggleTheme={toggleTheme} />
  </React.Suspense>
);

export default Demo;
