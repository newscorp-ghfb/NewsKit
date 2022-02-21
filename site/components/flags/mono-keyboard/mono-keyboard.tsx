import React from 'react';
import {Stack} from 'newskit';
import {Mono} from '../mono';
import {arrayify} from '../../../utils/arrayify';
import {KeyboardIcon, AddIcon} from './icon';

export const MonoKeyboard: React.FC<{
  children: string | string[];
}> = ({children}) => (
  <Stack flow="horizontal-center" spaceInline="space020">
    {arrayify(children).reduce((acc: React.ReactNode[], v, i, arr) => {
      acc.push(
        <Mono key={v}>
          <KeyboardIcon v={v} />
          {v}
        </Mono>,
      );
      if (arr.length > 1 && i < arr.length - 1) {
        acc.push(<AddIcon key={`${v}-${arr[i + 1]}`} />);
      }
      return acc;
    }, [])}
  </Stack>
);
