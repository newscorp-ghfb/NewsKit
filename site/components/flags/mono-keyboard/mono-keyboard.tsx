import React from 'react';
import {Stack} from 'newskit';
import {Mono} from '../mono';
import {arrayify} from '../../../utils/arrayify';
import {KeyboardIcon, AddIcon} from './icon';

export const MonoKeyboard: React.FC<{
  children: string | string[];
}> = ({children}) => (
  <Stack flow="horizontal-center" spaceInline="space020">
    {arrayify(children).reduce(
      (acc: React.ReactNode[], v: string, i, andArr) => [
        ...acc,
        ...v.split('|').reduce(
          (prev: React.ReactNode[], next: string, j, orArr) => [
            ...prev,
            <Mono key={next}>
              <KeyboardIcon v={next} />
              {next}
            </Mono>,
            ...(orArr.length > 1 && j < orArr.length - 1 ? [<>or</>] : []),
          ],
          [],
        ),
        ...(andArr.length > 1 && i < andArr.length - 1
          ? [<AddIcon key={`${v}-${andArr[i + 1]}`} />]
          : []),
      ],
      [],
    )}
  </Stack>
);
