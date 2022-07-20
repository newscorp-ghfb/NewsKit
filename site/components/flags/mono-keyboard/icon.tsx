import React from 'react';
import {NewsKitIcon, toNewsKitIcon} from 'newskit';

import {Add as AddFilled} from '@emotion-icons/material/Add';
import {KeyboardArrowDown as KeyboardArrowDownOutlined} from '@emotion-icons/material-outlined/KeyboardArrowDown';
import {KeyboardArrowLeft as KeyboardArrowLeftOutlined} from '@emotion-icons/material-outlined/KeyboardArrowLeft';
import {KeyboardArrowRight as KeyboardArrowRightOutlined} from '@emotion-icons/material-outlined/KeyboardArrowRight';
import {KeyboardArrowUp as KeyboardArrowUpOutlined} from '@emotion-icons/material-outlined/KeyboardArrowUp';
import {KeyboardBackspace as KeyboardBackspaceOutlined} from '@emotion-icons/material-outlined/KeyboardBackspace';
import {KeyboardReturn as KeyboardReturnOutlined} from '@emotion-icons/material-outlined/KeyboardReturn';
import {KeyboardTab as KeyboardTabOutlined} from '@emotion-icons/material-outlined/KeyboardTab';
import {SpaceBar as SpaceBarOutlined} from '@emotion-icons/material-outlined/SpaceBar';

const IconFilledAdd = toNewsKitIcon(AddFilled);
const IconOutlinedKeyboardArrowDown = toNewsKitIcon(KeyboardArrowDownOutlined);
const IconOutlinedKeyboardArrowLeft = toNewsKitIcon(KeyboardArrowLeftOutlined);
const IconOutlinedKeyboardArrowRight = toNewsKitIcon(
  KeyboardArrowRightOutlined,
);
const IconOutlinedKeyboardArrowUp = toNewsKitIcon(KeyboardArrowUpOutlined);
const IconOutlinedKeyboardBackspace = toNewsKitIcon(KeyboardBackspaceOutlined);
const IconOutlinedKeyboardReturn = toNewsKitIcon(KeyboardReturnOutlined);
const IconOutlinedKeyboardTab = toNewsKitIcon(KeyboardTabOutlined);
const IconOutlinedSpaceBar = toNewsKitIcon(SpaceBarOutlined);

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
