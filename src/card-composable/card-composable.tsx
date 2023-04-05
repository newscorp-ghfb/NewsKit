import * as React from 'react';
import {Image} from '../image';

import {
  StyledActions,
  StyledCard,
  StyledContent,
  StyledLink,
  StyledMedia,
} from './styled';

import {
  CardComposableProps,
  CardMediaProps,
  CardContentProps,
  CardActionsProps,
  CardLinkProps,
  ComponentWithOverrides,
} from './types';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {withOwnTheme} from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {CardProvider, useCardContext} from './context';

const useGetOverrides = <TCO extends ComponentWithOverrides>(
  {overrides}: TCO,
  componentName: string,
) => {
  const theme = useTheme();

  return {
    ...theme.componentDefaults[componentName],
    ...filterOutFalsyProperties(overrides),
  };
};

const defaultAreas = `
            media
            content
            actions
          `;

const ThemelessCardComposable = React.forwardRef<
  HTMLDivElement,
  CardComposableProps
>(({children, areas = defaultAreas, ...props}, ref) => {
  const overrides = useGetOverrides<CardComposableProps>(
    props,
    'cardComposable',
  );

  return (
    <CardProvider value={{useAreas: Boolean(areas)}}>
      <StyledCard ref={ref} areas={areas} {...props} overrides={overrides}>
        {children}
      </StyledCard>
    </CardProvider>
  );
});

export const CardComposable = withOwnTheme(ThemelessCardComposable)({
  defaults,
  stylePresets,
});

export const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({media, children, ...props}, ref) => {
    const {useAreas} = useCardContext();
    const overrides = useGetOverrides<CardComposableProps>(props, 'cardMedia');
    return (
      <StyledMedia
        ref={ref}
        areaName={useAreas ? 'media' : undefined}
        overrides={overrides}
        {...props}
      >
        {children || <Image alt="" {...media} />}
      </StyledMedia>
    );
  },
);

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  (props, ref) => {
    const {useAreas} = useCardContext();
    const overrides = useGetOverrides<CardComposableProps>(
      props,
      'cardContent',
    );
    return (
      <StyledContent
        ref={ref}
        areaName={useAreas ? 'content' : undefined}
        justifyItems="start"
        alignItems="start"
        overrides={overrides}
        {...props}
      />
    );
  },
);

export const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  (props, ref) => {
    const {useAreas} = useCardContext();
    const overrides = useGetOverrides<CardComposableProps>(
      props,
      'cardActions',
    );
    return (
      <StyledActions
        ref={ref}
        areaName={useAreas ? 'actions' : undefined}
        justifyContent="start"
        alignItems="start"
        overrides={overrides}
        {...props}
      />
    );
  },
);

export const CardLink = React.forwardRef<HTMLAnchorElement, CardLinkProps>(
  (props, ref) => <StyledLink ref={ref} {...props} />,
);
