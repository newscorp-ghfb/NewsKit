/* istanbul ignore file */

import * as React from 'react';
import {ComponentType, useEffect, useState} from 'react';
import {AudioPlayerComposableProps} from '../audio-player-composable/types';
import {AudioPlayerProps} from '../audio-player';
import {isVisualTest} from '../test/test-utils';

type Props = AudioPlayerProps | AudioPlayerComposableProps;
type Component =
  | ComponentType<AudioPlayerProps>
  | ComponentType<AudioPlayerComposableProps>;

// We need a way to make sure all Audio Players are no longer in loading state
// before taking the snaphot. One way is to conditionally show / hide an invisible
// element on the page based on loading state, and pass this to the waitBeforeCapture
// config for the test. But because Applitools only supports one selector in
// waitBeforeCapture (and because runBefore doesn't work as documented), we cannot
// have an element for each Player in a story. Instead, we need to count the number
// of players in a story, and conditionally render the element when all are loaded.
export const useAllPlayersCanPlayCheck = (nbPlayers: number) => {
  const [nbLoaded, setNbLoaded] = useState<number>(0);
  const onCanPlay = () => setNbLoaded(latest => latest + 1);
  return {
    allPlayersCanPlay: nbLoaded >= nbPlayers || !isVisualTest,
    onCanPlay,
  };
};

// The length of the buffer bar is controlled by the browser. The behaviour
// is inconsistent, which makes tests flaky. As a solution, we prefetch src for
// all Audio Players when running in visual tests so that the progress bar is
// always full. There are separate visual tests for the loading / unbuffered state.
const AudioPlayerBuffered = ({
  comp: Comp,
  props: {src, children, ...rest},
}: {
  comp: Component;
  props: Props;
}) => {
  const [prefetchedSrc, setPrefetchedSrc] = useState<string | undefined>();
  useEffect(() => {
    fetch(src!)
      .then(response => response.blob())
      .then(b => URL.createObjectURL(b))
      .then(url => setPrefetchedSrc(url));
  }, [src]);
  if (!prefetchedSrc) {
    return null;
  }
  return (
    <Comp src={prefetchedSrc} {...rest}>
      {children}
    </Comp>
  );
};

// This is a wrapper component that allows us to use the prefetching logic in
// the AudioPlayer and AudioPlayerComposable tests.
export const VisualTestAudioPlayer = ({
  comp: Comp,
  props: {src, live, children, ...rest},
}: {
  comp: Component;
  props: Props;
}) => {
  if (src && !live && isVisualTest) {
    return (
      <AudioPlayerBuffered comp={Comp} props={{src, live, children, ...rest}} />
    );
  }
  return (
    <Comp src={src!} live={live} {...rest}>
      {children}
    </Comp>
  );
};
