import * as React from 'react';
import {GridLayoutItem, GridLayout, getSSRId, LinkStandalone} from 'newskit';
import {SectionIntroductionGrid} from '../../section-introduction-grid';
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
} from '../../illustrations/brands';

const SUPPORTED_BRANDS = [
  {icon: <Barrons />, url: 'https://www.barrons.com/'},
  {icon: <MansionGlobal />, url: 'https://www.mansionglobal.com/'},
  {icon: <Marketwatch />, url: 'https://www.marketwatch.com/'},
  {icon: <Sun />, url: 'https://www.thesun.co.uk/'},
  {icon: <TalkRadio />, url: 'https://talkradio.co.uk/frontpage'},
  {icon: <TalkSport />, url: 'https://www.talksport.com/'},
  {icon: <TalkTV />, url: 'https://www.talk.tv/'},
  {icon: <Times />, url: 'https://www.thetimes.co.uk/'},
  {icon: <TimesTravel />, url: 'https://www.thetimes.co.uk/travel/'},
  {icon: <Virgin />, url: 'https://www.virginradio.co.uk/'},
  {icon: <WSJ />, url: 'https://www.wsj.com/'},
];

const randomiseBrands = (
  count: number,
  brands: {icon: JSX.Element; url: string}[],
) => {
  const shuffled = [...brands].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const brandsLogos = randomiseBrands(6, SUPPORTED_BRANDS);

export const SupportedBrands = () => (
  <>
    <SectionIntroductionGrid title="Supported brands">
      World-class brands trust NewsKit to build their products:
    </SectionIntroductionGrid>
    <GridLayout columns="repeat(6, 1fr)" justifyItems="center">
      {brandsLogos.map(({icon, url}) => (
        <GridLayoutItem column={{xs: `span 2`, md: `span 1`}} key={getSSRId()}>
          <LinkStandalone target="_blank" external={false} href={url}>
            {icon}
          </LinkStandalone>
        </GridLayoutItem>
      ))}
    </GridLayout>
  </>
);
