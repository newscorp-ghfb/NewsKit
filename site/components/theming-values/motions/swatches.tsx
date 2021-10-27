import React, {useEffect, useRef} from 'react';
import {newskitLightTheme, useTheme, getMotionDurationValue} from 'newskit';
import {MotionDurationSwatchProps, MotionTimingSwitchProps} from './types';
import {
  MotionDurationSwatchBox,
  MotionDurationSwatchCircle,
  MotionTimingSwatchAxis,
  MotionTimingSwatchDot,
} from './styled';
import {getTokenType} from '../../../utils/get-token-type';
import {updateCanvas, CANVAS_SIZE} from './utils';

const [maxDuration] = getTokenType(newskitLightTheme.motions, 'motionDuration')
  .map(({tokenValue}) => getMotionDurationValue(tokenValue))
  .sort()
  .reverse();

export const MotionDurationSwatch = ({duration}: MotionDurationSwatchProps) => (
  <MotionDurationSwatchBox>
    {[
      {name: 'light', color: 'illustrationPalette030'},
      {name: 'mid', color: 'illustrationPalette040'},
      {name: 'dark', color: 'illustrationPalette060'},
    ].map(({name, color}) => (
      <MotionDurationSwatchCircle
        key={name}
        name={name}
        color={color}
        duration={duration}
        maxDuration={maxDuration}
      />
    ))}
  </MotionDurationSwatchBox>
);

export const MotionTimingSwatch = ({timing}: MotionTimingSwitchProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();
  useEffect(() => {
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement?.getContext('2d');
    if (canvasCtx) {
      updateCanvas(canvasCtx, timing, theme.colors.illustrationHighlight010);
    }
  }, [canvasRef, timing, theme]);

  return (
    <MotionDurationSwatchBox>
      <MotionTimingSwatchAxis>
        <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} />
      </MotionTimingSwatchAxis>
      <MotionTimingSwatchDot timing={timing} />
    </MotionDurationSwatchBox>
  );
};
