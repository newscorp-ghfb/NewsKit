import React from 'react';
import {StructuredListCellProps, StructuredListItemProps} from './types';
import {Cell, Grid} from '../grid';
import {
  StyledGrid,
  StyledIconWrapper,
  StyledLink,
  StyledListItemContainer,
  StyledWrapper,
} from './styled';
import {IconFilledLaunch, IconOutlinedArrowForwardIos} from '../icons';
import {isLinkExternal} from '../link/utils';

export const StructuredListCell: React.FC<StructuredListCellProps> = ({
  children,
}) => (
  <>
    {React.Children.map(children, child => (
      <StyledWrapper>{child}</StyledWrapper>
    ))}
  </>
);

const iconOverrides = {
  size: 'iconSize010',
  stylePreset: 'inkContrast',
};

export const StructuredListItem: React.FC<StructuredListItemProps> = ({
  children,
  ariaLabel,
  disabled,
  overrides,
  href,
}) => {
  const childrenArray = React.Children.toArray(children);
  const cellCount = childrenArray.length;
  const pullRightOnFirst =
    React.isValidElement(childrenArray[0]) && childrenArray[0].props.pullRight;
  const pullRightOnSecond =
    React.isValidElement(childrenArray[1]) && childrenArray[1].props.pullRight;

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
    if (
      // custom icon
      cellCount === 3 ||
      (cellCount === 2 && pullRightOnSecond)
    ) {
      return (
        <>
          <Cell xs={10}>{cellCount === 3 ? innerGrid : childrenArray[0]}</Cell>
          <Cell xs={2}>
            {childrenArray[2] ? childrenArray[2] : childrenArray[1]}
          </Cell>
        </>
      );
    }
    if (
      // default icon
      (cellCount === 2 && !pullRightOnFirst && !pullRightOnSecond) ||
      (cellCount === 1 && !pullRightOnSecond)
    ) {
      return (
        <>
          <Cell xs={10}>{cellCount === 2 ? innerGrid : childrenArray[0]}</Cell>
          <Cell xs={2}>
            <StyledWrapper>
              <StyledIconWrapper>
                {href && isLinkExternal(href) ? (
                  <IconFilledLaunch overrides={iconOverrides} />
                ) : (
                  <IconOutlinedArrowForwardIos overrides={iconOverrides} />
                )}
              </StyledIconWrapper>
            </StyledWrapper>
          </Cell>
        </>
      );
    }
    return <></>;
  };

  const renderListItemWithHref = () => (
    <StyledLink
      as={disabled ? 'span' : 'a'}
      href={href}
      aria-disabled={disabled && 'true'}
    >
      <StyledGrid
        xsRowGutter="space000"
        xsMargin="space000"
        overrides={overrides}
      >
        {renderCells()}
      </StyledGrid>
    </StyledLink>
  );

  const renderListItemWithoutHref = () => {
    if (cellCount === 3) {
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
    if (cellCount === 2) {
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
    if (cellCount === 1) {
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
      {href ? renderListItemWithHref() : renderListItemWithoutHref()}
    </StyledListItemContainer>
  );
};
