import React from 'react';
import {
  StructuredListCellProps,
  StructuredListItemProps,
  StructuredListProps,
} from './types';
import {StyledListWrapper, StyledWrapper} from './styled';
import {Divider} from '../divider';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

export const StructuredListCell: React.FC<StructuredListCellProps> = ({
  children,
}) => (
  <>
    {React.Children.map(children, child => (
      <StyledWrapper>{child}</StyledWrapper>
    ))}
  </>
);

const ThemelessStructuredList: React.FC<StructuredListProps> = ({
  children,
  ariaLabel,
  divider,
  overrides = {},
  ...props
}) => {
  const structuredListChildren = React.Children.toArray(
    children,
  ) as React.ReactElement<StructuredListItemProps>[];
  return (
    <StyledListWrapper overrides={overrides} aria-label={ariaLabel} {...props}>
      {structuredListChildren.reduce(
        (acc: React.ReactElement[], listItem, index, array) => {
          acc.push(listItem);
          if (divider && index < array.length - 1) {
            acc.push(
              <li aria-hidden="true" key={`divider-${index || listItem.key}`}>
                <Divider overrides={overrides.divider} />
              </li>,
            );
          }
          return acc;
        },
        [],
      )}
    </StyledListWrapper>
  );
};

export const StructuredList = withOwnTheme(ThemelessStructuredList)({
  defaults,
  stylePresets,
});
