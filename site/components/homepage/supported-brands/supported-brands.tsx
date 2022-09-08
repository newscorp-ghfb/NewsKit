import * as React from 'react';
import {GridLayoutItem, GridLayout, LinkStandalone} from 'newskit';
import {ContentPrimary} from '../../content-structure';
import {
  Sun,
  Barrons,
  MansionGlobal,
  Marketwatch,
  TalkRadio,
  TalkSport,
  TalkTV,
  Times,
  Virgin,
  WSJ,
  TimesTravel,
  Factiva,
} from '../../illustrations/brands';

const SUPPORTED_BRANDS = [
  {icon: <Times />, url: 'https://www.thetimes.co.uk/'},
  {icon: <TalkTV />, url: 'https://www.talk.tv/'},
  {icon: <TalkRadio />, url: 'https://talkradio.co.uk/frontpage'},
  {icon: <TimesTravel />, url: 'https://www.thetimes.co.uk/travel/'},
  {icon: <Sun />, url: 'https://www.thesun.co.uk/'},
  {icon: <Virgin />, url: 'https://www.virginradio.co.uk/'},
  {icon: <Barrons />, url: 'https://www.barrons.com/'},
  {icon: <WSJ />, url: 'https://www.wsj.com/'},
  {icon: <MansionGlobal />, url: 'https://www.mansionglobal.com/'},
  {icon: <TalkSport />, url: 'https://www.talksport.com/'},
  {icon: <Factiva />, url: 'https://www.dowjones.com/professional/factiva/'},
  {icon: <Marketwatch />, url: 'https://www.marketwatch.com/'},
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
