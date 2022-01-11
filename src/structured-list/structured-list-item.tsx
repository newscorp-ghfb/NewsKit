import React from 'react';
import {StructuredListCellAlign, StructuredListItemProps} from './types';
import {Cell, Grid} from '../grid';
import {
  StyledGrid,
  StyledLink,
  StyledListItemContainer,
  StyledCell,
} from './styled';
import {StructuredListIcon} from './structured-list-icon';
import {StructuredListCell} from './structured-list';

const getCellAlign = (child: React.ReactNode): StructuredListCellAlign =>
  React.isValidElement(child) && child.props.align;

const getPullRight = (child: React.ReactNode): boolean =>
  React.isValidElement(child) && child.props.pullRight;

export const StructuredListItem = React.forwardRef<
  HTMLAnchorElement,
  StructuredListItemProps
>(
  (
    {children, ariaLabel, disabled, overrides, href, linkIconAlign, ...props},
    ref,
  ) => {
    const childrenArray = React.Children.toArray(children);
    const hasHref = Boolean(href);

    if (
      hasHref &&
      childrenArray.length === 2 &&
      !getPullRight(childrenArray[1])
    ) {
      childrenArray.push(
        <StructuredListCell align={linkIconAlign} key="link-icon">
          <StructuredListIcon href={href} overrides={overrides} />
        </StructuredListCell>,
      );
    }
    if (hasHref && childrenArray.length === 1) {
      childrenArray.push(
        <StructuredListCell pullRight align={linkIconAlign} key="link-icon">
          <StructuredListIcon href={href} overrides={overrides} />
        </StructuredListCell>,
      );
    }

    const alignCell1 = getCellAlign(childrenArray[0]);
    const alignCell2 = getCellAlign(childrenArray[1]);
    const alignCell3 = getCellAlign(childrenArray[2]);

    const innerGrid = (
      <Grid
        xsRowGutter="space040"
        xsColumnGutter="space000"
        xsMargin="space000"
      >
        <StyledCell xs={12} md={5} align={alignCell1}>
          {childrenArray[0]}
        </StyledCell>
        <StyledCell xs={12} md={7} align={alignCell2}>
          {childrenArray[1]}
        </StyledCell>
      </Grid>
    );

    const renderCells = () => {
      if (childrenArray.length === 3) {
        return (
          <StyledGrid
            xsRowGutter="space000"
            xsMargin="space020"
            lgMargin="space030"
            overrides={overrides}
            hasHref={hasHref}
          >
            <Cell xs={10}>{innerGrid}</Cell>
            <StyledCell xs={2} align={alignCell3}>
              {childrenArray[2]}
            </StyledCell>
          </StyledGrid>
        );
      }
      if (childrenArray.length === 2) {
        const pullRightOnSecond = getPullRight(childrenArray[1]);
        return (
          <StyledGrid
            xsRowGutter="space040"
            mdRowGutter="space000"
            xsMargin="space020"
            lgMargin="space030"
            overrides={overrides}
            hasHref={hasHref}
          >
            <StyledCell
              xs={12}
              md={pullRightOnSecond ? 10 : 4}
              align={alignCell1}
            >
              {childrenArray[0]}
            </StyledCell>
            <StyledCell
              xs={12}
              md={pullRightOnSecond ? 2 : 8}
              align={alignCell2}
            >
              {childrenArray[1]}
            </StyledCell>
          </StyledGrid>
        );
      }
      if (childrenArray.length === 1) {
        return (
          <StyledGrid
            xsRowGutter="space000"
            xsMargin="space020"
            lgMargin="space030"
            overrides={overrides}
            hasHref={hasHref}
          >
            <StyledCell xs={12} align={alignCell1}>
              {childrenArray[0]}
            </StyledCell>
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
        {hasHref ? (
          <StyledLink
            as={disabled ? 'span' : 'a'}
            href={href}
            data-testid="list-item-link"
            aria-disabled={disabled && 'true'}
            ref={ref}
            {...props}
          >
            {renderCells()}
          </StyledLink>
        ) : (
          renderCells()
        )}
      </StyledListItemContainer>
    );
  },
);
