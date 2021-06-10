import React from 'react';
import {StructuredListCellProps, StructuredListItemProps} from './types';
import {Cell, Grid} from '../grid';
import {StyledGrid, StyledListItemContainer, StyledWrapper} from './styled';

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
  overrides,
}) => {
  const childrenArray = React.Children.toArray(children);
  const cellCount = childrenArray.length;
  const pullRightOnFirst =
    React.isValidElement(childrenArray[0]) && childrenArray[0].props.pullRight;
  const pullRightOnSecond =
    React.isValidElement(childrenArray[1]) && childrenArray[1].props.pullRight;

  if (cellCount === 3) {
    return (
      <StyledListItemContainer aria-label={ariaLabel} overrides={overrides}>
        <StyledGrid
          xsRowGutter="space000"
          xsMargin="space000"
          overrides={overrides}
        >
          <Cell xs={10}>
            <Grid
              xsRowGutter="space040"
              xsColumnGutter="space000"
              xsMargin="space000"
            >
              <Cell xs={12} md={5}>
                {childrenArray[0]}
              </Cell>
              <Cell xs={12} md={7}>
                {childrenArray[1]}
              </Cell>
            </Grid>
          </Cell>
          <Cell xs={2}>{childrenArray[2]}</Cell>
        </StyledGrid>
      </StyledListItemContainer>
    );
  }
  if (cellCount === 2) {
    return (
      <StyledListItemContainer aria-label={ariaLabel} overrides={overrides}>
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
      </StyledListItemContainer>
    );
  }
  if (cellCount === 1) {
    return (
      <StyledListItemContainer aria-label={ariaLabel} overrides={overrides}>
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
      </StyledListItemContainer>
    );
  }
  return <></>;
};
