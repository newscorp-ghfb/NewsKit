import * as React from 'react';
import {GridLayoutItem, GridLayout, LinkStandalone} from 'newskit';
import {ContentPrimary} from '../../content-structure';
import {Illustration} from '../../illustrations/illustration-loader';

const BrandIllustration = ({path}: {path: string}) => (
  <Illustration path={path} viewBox="0 0 1344 759" width="100%" height="auto" />
);

const SUPPORTED_BRANDS = [
  {
    icon: <BrandIllustration path="brands/times" />,
    url: 'https://www.thetimes.co.uk/',
  },
  {
    icon: <BrandIllustration path="brands/talk-tv" />,
    url: 'https://www.talk.tv/',
  },
  {
    icon: <BrandIllustration path="brands/talk-radio" />,
    url: 'https://talkradio.co.uk/frontpage',
  },
  {
    icon: <BrandIllustration path="brands/times-travel" />,
    url: 'https://www.thetimes.co.uk/travel/',
  },
  {
    icon: <BrandIllustration path="brands/sun" />,
    url: 'https://www.thesun.co.uk/',
  },
  {
    icon: <BrandIllustration path="brands/virgin" />,
    url: 'https://www.virginradio.co.uk/',
  },
  {
    icon: <BrandIllustration path="brands/barrons" />,
    url: 'https://www.barrons.com/',
  },
  {icon: <BrandIllustration path="brands/wsj" />, url: 'https://www.wsj.com/'},
  {
    icon: <BrandIllustration path="brands/mansion-global" />,
    url: 'https://www.mansionglobal.com/',
  },
  {
    icon: <BrandIllustration path="brands/talk-sport" />,
    url: 'https://www.talksport.com/',
  },
  {
    icon: <BrandIllustration path="brands/factiva" />,
    url: 'https://www.dowjones.com/professional/factiva/',
  },

  {
    icon: <BrandIllustration path="brands/marketwatch" />,
    url: 'https://www.marketwatch.com/',
  },
];

export const SupportedBrands = () => (
  <ContentPrimary headline="Supported brands">
    <GridLayout
      columns={{xs: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)'}}
      justifyItems="center"
    >
      {SUPPORTED_BRANDS.map(({icon, url}) => (
        <GridLayoutItem key={url}>
          <LinkStandalone target="_blank" external={false} href={url}>
            {icon}
          </LinkStandalone>
        </GridLayoutItem>
      ))}
    </GridLayout>
  </ContentPrimary>
);
