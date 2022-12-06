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
    label: 'The Times & The Sunday Times',
  },
  {
    icon: <BrandIllustration path="brands/talk-tv" />,
    url: 'https://www.talk.tv/',
    label: 'Talk TV',
  },
  {
    icon: <BrandIllustration path="brands/talk-radio" />,
    url: 'https://www.thetimes.co.uk/radio',
    label: 'Times Radio',
  },
  {
    icon: <BrandIllustration path="brands/times-travel" />,
    url: 'https://www.thetimes.co.uk/travel/',
    label: 'Times Travel',
  },
  {
    icon: <BrandIllustration path="brands/sun" />,
    url: 'https://www.thesun.co.uk/',
    label: 'The Sun',
  },
  {
    icon: <BrandIllustration path="brands/virgin" />,
    url: 'https://www.virginradio.co.uk/',
    label: 'Virgin Radio',
  },
  {
    icon: <BrandIllustration path="brands/barrons" />,
    url: 'https://www.barrons.com/',
    label: "Barron's",
  },
  {
    icon: <BrandIllustration path="brands/wsj" />,
    url: 'https://www.wsj.com/',
    label: 'The Wall Street Journal',
  },
  {
    icon: <BrandIllustration path="brands/mansion-global" />,
    url: 'https://www.mansionglobal.com/',
    label: 'Mansion Global',
  },
  {
    icon: <BrandIllustration path="brands/talk-sport" />,
    url: 'https://www.talksport.com/',
    label: 'Talk Sport',
  },
  {
    icon: <BrandIllustration path="brands/factiva" />,
    url: 'https://www.dowjones.com/professional/factiva/',
    label: 'Factiva - Dow Jones',
  },
  {
    icon: <BrandIllustration path="brands/marketwatch" />,
    url: 'https://www.marketwatch.com/',
    label: 'MarketWatch',
  },
];

export const SupportedBrands = () => (
  <ContentPrimary headline="Supported brands">
    <GridLayout
      columns={{xs: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)'}}
      justifyItems="center"
    >
      {SUPPORTED_BRANDS.map(({icon, url, label}) => (
        <GridLayoutItem key={url}>
          <LinkStandalone
            target="_blank"
            external={false}
            href={url}
            aria-label={label}
          >
            {icon}
          </LinkStandalone>
        </GridLayoutItem>
      ))}
    </GridLayout>
  </ContentPrimary>
);
