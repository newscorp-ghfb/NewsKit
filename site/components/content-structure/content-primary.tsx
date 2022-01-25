import React from 'react';
import {Cell, Grid, useTheme, withDefaultProps} from 'newskit';
import {ContentBase} from './content-base';
import {ContentPrimaryProps} from './types';

// export const ContentPrimary = withDefaultProps<ContentPrimaryProps>(
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   ContentBase as any,
//   {},
//   'contentPrimary',
// );

export const ContentPrimary: React.FC<ContentPrimaryProps> = props => {
  const theme = useTheme();

  return (
    <ContentBase
      overrides={theme.componentDefaults.contentPrimary}
      render={({
        renderDescription,
        renderHeader,
        renderBody,
        renderSeparator,
      }) => (
        <>
          <Grid
            style={{border: '1px solid blue'}}
            xsMargin="space000"
            xsRowGutter="space000"
            xsColumnGutter="space000"
          >
            <Cell xs={12} md={10}>
              {renderHeader()}
              {renderDescription()}
            </Cell>
          </Grid>
          {renderBody()}
          {renderSeparator()}
        </>
      )}
      {...props}
    />
  );
};

ContentPrimary.displayName = 'ContentPrimary';
