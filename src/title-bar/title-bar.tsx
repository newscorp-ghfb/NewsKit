import React from 'react';
import {
  styled,
  getColorFromTheme,
  getFontsFromTheme,
  getBorderFromTheme,
  getSizingFromTheme,
} from '../utils/style';
import {Heading2} from '../typography';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';
import {
  TitleBarProps,
  ContainerProps,
  TitleContainerProps,
  TitleAlignment,
  TitleBarBorder,
} from './types';

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${getSizingFromTheme('sizing050')};
  padding-right: ${({$paddingRight, theme}) =>
    $paddingRight ? getSizingFromTheme('sizing050')({theme}) : null};
  padding-bottom: ${getSizingFromTheme('sizing050')};
  padding-left: ${({$paddingLeft, theme}) =>
    $paddingLeft ? getSizingFromTheme('sizing050')({theme}) : null};
  box-sizing: border-box;
  border-color: ${getColorFromTheme('titleBarBorder')};
  border-width: ${getBorderFromTheme('titleBarBorderWidth')};
  border-style: none;
  border-top-style: ${({$containerBorder}) =>
    $containerBorder &&
    ($containerBorder === TitleBarBorder.Top ||
      $containerBorder === TitleBarBorder.TopAndBottom)
      ? 'solid'
      : 'none'};
  border-bottom-style: ${({$containerBorder}) =>
    $containerBorder &&
    ($containerBorder === TitleBarBorder.Bottom ||
      $containerBorder === TitleBarBorder.TopAndBottom)
      ? 'solid'
      : 'none'};
`;

const TitleContainer = styled.div<TitleContainerProps>`
  flex: 1;
  text-align: ${({$titleAlignment}) => $titleAlignment};
  font-family: ${getFontsFromTheme('fontFamily1')};
  color: ${getColorFromTheme('titleBarTextColor')};
`;

const ActionItemsContainer = styled.div`
  padding-left: ${getSizingFromTheme('sizing050')};
  display: none;
  ${getMediaQueryFromTheme('sm')} {
    display: block;
  }
`;

export const TitleBar: React.FC<TitleBarProps> = props => {
  const {
    children,
    headingComponent: HeadingComponent = Heading2,
    actionItem: ActionItem,
    $titleAlignment = TitleAlignment.Left,
    $containerBorder,
    $paddingLeft = false,
    $paddingRight = false,
  } = props;
  return (
    <Container
      $containerBorder={$containerBorder}
      $paddingLeft={$paddingLeft}
      $paddingRight={$paddingRight}
    >
      <TitleContainer $titleAlignment={$titleAlignment}>
        <HeadingComponent>{children}</HeadingComponent>
      </TitleContainer>
      {ActionItem ? (
        <ActionItemsContainer>
          <ActionItem />
        </ActionItemsContainer>
      ) : null}
    </Container>
  );
};
