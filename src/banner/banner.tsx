import React from 'react';
import {BannerInternalProps, BannerProps} from './types';
import {Visible} from '../grid/visibility';
import {BannerInternal} from './banner-internal';
import {useTheme} from '../theme';
import {MQ} from '../utils';
import {getVisibleBreakpointsForLayout} from './utils';

export const Banner: React.FC<BannerProps> = ({
  layout = {
    xs: 'vertical',
    md: 'horizontal',
  },
  ...restProps
}) => {
  let layoutHasMQ = false;
  const theme = useTheme();

  let horizontalBreakpoints: MQ<boolean> = {};
  let verticalBreakpoints: MQ<boolean> = {};
  if (typeof layout === 'object') {
    layoutHasMQ = true;
    ({
      verticalBreakpoints,
      horizontalBreakpoints,
    } = getVisibleBreakpointsForLayout(layout, theme));
  }

  return (
    <>
      {layoutHasMQ ? (
        <>
          <Visible {...verticalBreakpoints}>
            <BannerInternal {...restProps} layout="vertical" />
          </Visible>
          <Visible {...horizontalBreakpoints}>
            <BannerInternal {...restProps} layout="horizontal" />
          </Visible>
        </>
      ) : (
        <BannerInternal
          {...restProps}
          layout={layout as BannerInternalProps['layout']}
        />
      )}
    </>
  );
};
