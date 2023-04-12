import {createContext, useContext} from 'react';

const CardContext = createContext({useAreas: false});

export const CardProvider = CardContext.Provider;

export const useCardContext = () => {
  const context = useContext(CardContext);

  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' &&
    Object.keys(context).length === 0
  ) {
    // eslint-disable-next-line no-console
    console.error(
      'You are using a component which needs to be a child of <CardComposable />',
    );
  }

  return context;
};
