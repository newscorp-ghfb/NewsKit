import React from 'react';
import {
  IconFilledAdd,
  IconOutlinedKeyboardArrowDown,
  IconOutlinedKeyboardArrowLeft,
  IconOutlinedKeyboardArrowRight,
  IconOutlinedKeyboardArrowUp,
  IconOutlinedKeyboardBackspace,
  IconOutlinedKeyboardReturn,
  IconOutlinedKeyboardTab,
  IconOutlinedSpaceBar,
  NewsKitIcon,
} from 'newskit';

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
