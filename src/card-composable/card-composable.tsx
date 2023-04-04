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
      <StyledCard areas={areas} {...props} overrides={overrides} ref={ref}>
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
    return (
      <StyledMedia
        ref={ref}
        areaName={useAreas ? 'media' : undefined}
        {...props}
      >
        {children || <Image {...media} />}
      </StyledMedia>
    );
  },
);

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  (props, ref) => {
    const {useAreas} = useCardContext();
    return (
      <StyledContent
        ref={ref}
        areaName={useAreas ? 'content' : undefined}
        justifyItems="start"
        {...props}
      />
    );
  },
);

export const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  (props, ref) => {
    const {useAreas} = useCardContext();
    return (
      <StyledActions
        ref={ref}
        areaName={useAreas ? 'actions' : undefined}
        justifyContent="start"
        {...props}
      />
    );
  },
);

// TODO: use Link component or attach event data/context
export const CardLink = React.forwardRef<HTMLDivElement, CardLinkProps>(
  (props, ref) => <StyledLink as="a" ref={ref} {...props} />,
);
