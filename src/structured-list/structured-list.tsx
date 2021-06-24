import React from 'react';
import {
  StructuredListCellProps,
  StructuredListItemProps,
  StructuredListProps,
} from './types';
import {Cell, Grid} from '../grid';
import {
  StyledGrid,
  StyledLink,
  StyledListItemContainer,
  StyledListWrapper,
  StyledWrapper,
} from './styled';
import {Divider} from '../divider';
import {StructuredListIcon} from './structured-list-icon';

export const StructuredListCell: React.FC<StructuredListCellProps> = ({
  children,
}) => (
  <>
    {React.Children.map(children, child => (
      <StyledWrapper>{child}</StyledWrapper>
    ))}
  </>
);

export const StructuredListItem: React.FC<StructuredListItemProps> = ({
  children,
  ariaLabel,
  disabled,
  overrides,
  href,
}) => {
  const childrenArray = React.Children.toArray(children);
  const pullRightOnFirst =
    React.isValidElement(childrenArray[0]) && childrenArray[0].props.pullRight;
  const pullRightOnSecond =
    React.isValidElement(childrenArray[1]) && childrenArray[1].props.pullRight;

  if (href && childrenArray.length === 2 && !pullRightOnSecond) {
    childrenArray.push(
      <StructuredListCell>
        <StructuredListIcon href={href} overrides={overrides} />
      </StructuredListCell>,
    );
  }
  if (href && childrenArray.length === 1) {
    childrenArray.push(
      <StructuredListCell pullRight>
        <StructuredListIcon href={href} overrides={overrides} />
      </StructuredListCell>,
    );
  }

  const innerGrid = (
    <Grid xsRowGutter="space040" xsColumnGutter="space000" xsMargin="space000">
      <Cell xs={12} md={5}>
        {childrenArray[0]}
      </Cell>
      <Cell xs={12} md={7}>
        {childrenArray[1]}
      </Cell>
    </Grid>
  );

  const renderCells = () => {
    if (childrenArray.length === 3) {
      return (
        <StyledGrid
          xsRowGutter="space000"
          xsMargin="space000"
          overrides={overrides}
        >
          <Cell xs={10}>{innerGrid}</Cell>
          <Cell xs={2}>{childrenArray[2]}</Cell>
        </StyledGrid>
      );
    }
    if (childrenArray.length === 2) {
      return (
        <StyledGrid
          xsRowGutter="space040"
          mdRowGutter="space000"
          xsMargin="space000"
          overrides={overrides}
        >
          <Cell
            xs={12}
            md={!(pullRightOnFirst || pullRightOnSecond) ? 4 : 6}
            mdOffset={pullRightOnFirst && 4}
          >
            {childrenArray[0]}
          </Cell>
          <Cell
            xs={12}
            md={!(pullRightOnFirst || pullRightOnSecond) ? 8 : 2}
            mdOffset={pullRightOnSecond && 4}
          >
            {childrenArray[1]}
          </Cell>
        </StyledGrid>
      );
    }
    if (childrenArray.length === 1) {
      return (
        <StyledGrid
          xsRowGutter="space000"
          xsMargin="space000"
          overrides={overrides}
        >
          <Cell
            xs={12}
            md={pullRightOnFirst && 2}
            mdOffset={pullRightOnFirst && 10}
          >
            {childrenArray[0]}
          </Cell>
        </StyledGrid>
      );
    }
    return <></>;
  };

  return (
    <StyledListItemContainer
      aria-label={ariaLabel}
      overrides={overrides}
      disabled={disabled}
    >
      {href ? (
        <StyledLink
          as={disabled ? 'span' : 'a'}
          href={href}
          aria-disabled={disabled && 'true'}
        >
          {renderCells()}
        </StyledLink>
      ) : (
        renderCells()
      )}
    </StyledListItemContainer>
  );
};

export const StructuredList: React.FC<StructuredListProps> = ({
  children,
  ariaLabel,
  divider,
  overrides = {},
}) => {
  const structuredListChildren = React.Children.toArray(children);
  return (
    <StyledListWrapper overrides={overrides} aria-label={ariaLabel}>
      {structuredListChildren.reduce(
        (acc: React.ReactNode[], listItem, index, array) => {
          acc.push(listItem);
          if (divider && index < array.length - 1) {
            acc.push(<Divider overrides={overrides.divider} />);
          }
          return acc;
        },
        [],
      )}
    </StyledListWrapper>
  );
};
