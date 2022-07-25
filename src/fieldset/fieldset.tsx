import * as React from 'react';
import {FormInputContext} from '../form/context';
import {TextFieldSize} from '../text-field';
import {getComponentOverrides} from '../utils/overrides';

import {Legend as DefaultLegend} from './legend';
import {StyledFieldset} from './styled';
import {FieldsetProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessFieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({legend, size = 'medium', children, overrides, ...props}, ref) => {
    const value = React.useContext(FormInputContext);

    const formInputContextWithSize = {
      ...value,
      size: size as TextFieldSize,
    };

    const [Legend, legendProps] = getComponentOverrides(
      overrides?.legend,
      DefaultLegend,
      {
        size,
      },
    );

    return (
      <StyledFieldset overrides={overrides} {...props} ref={ref}>
        {legend && (
          <Legend {...legendProps}>
            {typeof legend === 'function' ? legend() : legend}
          </Legend>
        )}
        <FormInputContext.Provider value={formInputContextWithSize}>
          {children}
        </FormInputContext.Provider>
      </StyledFieldset>
    );
  },
);

export const Fieldset = withOwnTheme(ThemelessFieldset)({
  defaults,
  stylePresets,
});
