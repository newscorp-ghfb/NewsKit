import React from 'react';
import {TagProps, TagSize} from './types';
import {Flag} from '../flag';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {as as emotionAs} from '../utils/component';
import {useTheme} from '../theme';
import {styled} from '../utils/style';

const StyledFlag = styled(Flag)`
  ${({href, disabled}: TagProps) => href && !disabled && {cursor: 'pointer'}}
`;

export const Tag: React.FC<TagProps> = ({
  overrides = {},
  disabled,
  href,
  ...props
}) => {
  const theme = useTheme();
  const {size = TagSize.Medium} = props;

  return (
    <StyledFlag
      data-testid="tag"
      disabled={disabled}
      href={disabled ? undefined : href}
      {...emotionAs(href && !disabled ? 'a' : 'div')}
      {...props}
      overrides={{
        ...theme.componentDefaults.tag[size],
        ...filterOutFalsyProperties(overrides),
      }}
    />
  );
};
