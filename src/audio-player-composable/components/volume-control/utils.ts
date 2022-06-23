import {useEffect} from 'react';

// This hook sets the initial volume. If `newskit-audioplayer-volume` is present
// it's value will be used. If not, the initialVolume will.
export const useInitialVolume = ({
  onChange,
  initialVolume,
}: {
  onChange: (value: number) => void;
  initialVolume: number;
}) => {
  useEffect(() => {
    const storedVolume = parseFloat(
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('newskit-audioplayer-volume')) ||
        '',
    );
    onChange(Number.isNaN(storedVolume) ? initialVolume : storedVolume);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
