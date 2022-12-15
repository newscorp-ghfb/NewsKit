import React from 'react';
import {CardProps} from './types';
import {Image, ImageProps} from '../../../image';
import {
  StyledCardContainer,
  StyledCardContainerMedia,
} from '../../styled';
import {GridLayout, GridLayoutItem} from '../../../grid-layout';
import {
  renderIfReactComponent,
} from '../../../utils/component';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from '../../style-presets';
import {omitLogicalPropsFromOverrides} from '../../../utils/logical-properties';
import {EventData, EventTrigger, useInstrumentation} from '../../../instrumentation';
// This key is needed to for the card headline (and to the link when it is wrapped)
// to avoid missing key prop warning from react.
// There is no need for the key to be automatically generated for now
// as we only support one Headline per card
// https://nidigitalsolutions.jira.com/browse/PPDSC-1527
const cardHeadlineKey = '1';

// const renderMedia = (media: CardProps['media']) =>
//   renderIfReactComponent(media) || (
//     <Image loadingAspectRatio="3:2" {...(media as ImageProps)} />
//   );


const renderMedia = (media: CardProps['media']) =>
  renderIfReactComponent(media) || (
    <Image loadingAspectRatio="3:2" {...(media as ImageProps)} />
  );


const ThemelessCardMedia = React.forwardRef<HTMLDivElement, CardProps>((
  {
    media,
    mediaInteractive = false,
    layout = 'vertical',
    href,

    overrides = {},
  },
  ref,
) => {
  const hasHref = Boolean(href);

  return (
    <GridLayout>
      {media && (
        <StyledCardContainerMedia
          layout={layout}
          mediaInteractive={mediaInteractive}
          hasHref={hasHref}
          overrides={overrides}
        >
          {renderMedia(media)}
        </StyledCardContainerMedia>
      )}
    </GridLayout>
  );
},
);

export const CardMedia = withOwnTheme(ThemelessCardMedia)({defaults, stylePresets});

CardMedia.displayName = 'Card Media';
