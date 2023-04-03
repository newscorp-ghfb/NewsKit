import * as React from 'react';
import {Image} from '../image';

// remove above ones
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
} from './types';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';

const CardContext = React.createContext({useAreas: false});
const useCardContext = () => React.useContext(CardContext);

export type ComponentOverrides = {
  overrides?: object;
};

const useGetOverrides = <TCO extends ComponentOverrides>(
  {overrides}: TCO,
  componentName: string,
) => {
  const theme = useTheme();

  return {
    ...theme.componentDefaults[componentName],
    ...filterOutFalsyProperties(overrides),
  };
};

export const CardComposable = ({children, ...props}: CardComposableProps) => {
  const {areas} = props;

  const overrides = useGetOverrides<CardComposableProps>(
    props,
    'cardComposable',
  );

  return (
    <CardContext.Provider value={{useAreas: Boolean(areas)}}>
      <StyledCard {...props} overrides={overrides}>
        {children}
      </StyledCard>
    </CardContext.Provider>
  );
};

export const CardMedia = ({media, children, ...props}: CardMediaProps) => {
  const {useAreas} = useCardContext();
  return (
    <StyledMedia areaName={useAreas ? 'media' : undefined} {...props}>
      {children || <Image {...media} />}
    </StyledMedia>
  );
};

export const CardContent = (props: CardContentProps) => {
  const {useAreas} = useCardContext();
  return (
    <StyledContent areaName={useAreas ? 'content' : undefined} {...props} />
  );
};

export const CardActions = (props: CardActionsProps) => {
  const {useAreas} = useCardContext();
  return (
    <StyledActions
      areaName={useAreas ? 'actions' : undefined}
      justifyContent="start"
      {...props}
    />
  );
};

export const CardLink = (props: CardLinkProps) => (
  <StyledLink as="a" {...props} />
);
