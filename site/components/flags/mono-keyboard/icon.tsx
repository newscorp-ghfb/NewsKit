import React from 'react';
import {NewsKitIcon, toNewsKitIcon} from 'newskit';

import {Add as FilledAdd} from '@emotion-icons/material/Add';
import {KeyboardArrowDown as OutlinedKeyboardArrowDown} from '@emotion-icons/material-outlined/KeyboardArrowDown';
import {KeyboardArrowLeft as OutlinedKeyboardArrowLeft} from '@emotion-icons/material-outlined/KeyboardArrowLeft';
import {KeyboardArrowRight as OutlinedKeyboardArrowRight} from '@emotion-icons/material-outlined/KeyboardArrowRight';
import {KeyboardArrowUp as OutlinedKeyboardArrowUp} from '@emotion-icons/material-outlined/KeyboardArrowUp';
import {KeyboardBackspace as OutlinedKeyboardBackspace} from '@emotion-icons/material-outlined/KeyboardBackspace';
import {KeyboardReturn as OutlinedKeyboardReturn} from '@emotion-icons/material-outlined/KeyboardReturn';
import {KeyboardTab as OutlinedKeyboardTab} from '@emotion-icons/material-outlined/KeyboardTab';
import {SpaceBar as OutlinedSpaceBar} from '@emotion-icons/material-outlined/SpaceBar';

const IconFilledAdd = toNewsKitIcon(FilledAdd);
const IconOutlinedKeyboardArrowDown = toNewsKitIcon(OutlinedKeyboardArrowDown);
const IconOutlinedKeyboardArrowLeft = toNewsKitIcon(OutlinedKeyboardArrowLeft);
const IconOutlinedKeyboardArrowRight = toNewsKitIcon(
  OutlinedKeyboardArrowRight,
);
const IconOutlinedKeyboardArrowUp = toNewsKitIcon(OutlinedKeyboardArrowUp);
const IconOutlinedKeyboardBackspace = toNewsKitIcon(OutlinedKeyboardBackspace);
const IconOutlinedKeyboardReturn = toNewsKitIcon(OutlinedKeyboardReturn);
const IconOutlinedKeyboardTab = toNewsKitIcon(OutlinedKeyboardTab);
const IconOutlinedSpaceBar = toNewsKitIcon(OutlinedSpaceBar);

const keyboardIcons: Record<string, NewsKitIcon> = {
  Backspace: IconOutlinedKeyboardBackspace,
  Down: IconOutlinedKeyboardArrowDown,
  Left: IconOutlinedKeyboardArrowLeft,
  Right: IconOutlinedKeyboardArrowRight,
  Rtn: IconOutlinedKeyboardReturn,
  Space: IconOutlinedSpaceBar,
  Tab: IconOutlinedKeyboardTab,
  Up: IconOutlinedKeyboardArrowUp,
};

export const KeyboardIcon: React.FC<{
  v: string;
}> = ({v}) => {
  const Icon = keyboardIcons[v as string];
  if (!Icon) {
    return null;
  }
  return <Icon overrides={{stylePreset: 'inkBrand010', size: 'iconSize010'}} />;
};

export const AddIcon: React.FC = () => (
  <IconFilledAdd overrides={{size: 'iconSize010'}} />
);
