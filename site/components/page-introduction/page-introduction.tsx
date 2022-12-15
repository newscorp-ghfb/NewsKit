import React from 'react';
import {
  Block,
  TextBlock,
  Image,
  ImageProps,
  AudioPlayerComposable,
  GridLayout,
  AudioPlayerVolumeControl,
  AudioPlayerPlayPauseButton,
  AudioPlayerTimeDisplay,
  AudioPlayerSeekBar,
  AudioPlayerPlaybackSpeedControl,
  calculateTime,
} from 'newskit';
import {Separator} from '../separator';
import {Illustration} from '../illustrations/illustration-loader';
import {PageIntroductionProps} from './types';
import {ComponentPageCell, ComponentPageCellCompact} from '../layout-cells';

const heroIsImage = (hero: PageIntroductionProps['hero']): hero is ImageProps =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Boolean(hero && (hero as any).src);

const NarrationAudioPlayer = (props: {url: string}) => {
  const {url} = props;
  const breakpointKey = 'xs';
  return (
    <AudioPlayerComposable src={url} {...props}>
      <TextBlock
        stylePreset="inkContrast"
        typographyPreset={{
          xs: 'editorialLabel010',
          md: 'editorialLabel030',
        }}
        marginBlockStart="space060"
        marginBlockEnd="space040"
      >
        Listen to this article
      </TextBlock>
      <GridLayout
        columns="auto auto 40px 1fr auto auto"
        columnGap="space040"
        alignItems="center"
      >
        <AudioPlayerVolumeControl
          layout={breakpointKey === 'xs' ? 'collapsed' : 'horizontal'}
        />
        <AudioPlayerPlayPauseButton size="small" />
        <AudioPlayerTimeDisplay
          format={({currentTime}) => calculateTime(currentTime)}
        />
        <AudioPlayerSeekBar />
        <AudioPlayerTimeDisplay
          format={({duration}) => calculateTime(duration)}
        />
        <AudioPlayerPlaybackSpeedControl useModal={{xs: true, md: true}} />
      </GridLayout>
    </AudioPlayerComposable>
  );
};

export const PageIntroduction: React.FC<PageIntroductionProps> = ({
  type,
  name,
  introduction,
  hero,
  showSeparator,
  narrationUrl,
}) => (
  <>
    <ComponentPageCell>
      <Block spaceStack={{xs: 'space060', md: 'space070'}}>
        <TextBlock
          stylePreset="inkBrand010"
          typographyPreset={{
            xs: 'editorialHeadline010',
            md: 'editorialHeadline030',
          }}
        >
          {type}
        </TextBlock>
      </Block>
      <Block spaceStack={{xs: 'space050', md: 'space070'}}>
        <TextBlock
          as="h1"
          stylePreset="inkContrast"
          typographyPreset={{
            xs: 'editorialHeadline060',
            md: 'editorialHeadline070',
            lg: 'editorialHeadline080',
          }}
        >
          {name}
        </TextBlock>
      </Block>
    </ComponentPageCell>
    <ComponentPageCellCompact>
      <Block spaceStack={{xs: 'space070', md: 'space080'}}>
        <TextBlock
          stylePreset="inkBase"
          typographyPreset={{
            xs: 'editorialSubheadline010',
            md: 'editorialSubheadline020',
          }}
        >
          {introduction}
        </TextBlock>
      </Block>
    </ComponentPageCellCompact>
    <ComponentPageCell>
      <Block
        stylePreset="blockRoundedMedium"
        spaceStack={{xs: 'space000', md: 'space030', lg: 'space010'}}
      >
        {heroIsImage(hero) ? (
          <Image loadingAspectRatio="16:9" alt="" {...hero} />
        ) : (
          hero && (
            <Illustration
              path={hero.illustration}
              {...hero.illustrationProps}
            />
          )
        )}
      </Block>
      {narrationUrl && (
        <NarrationAudioPlayer key="narrationUrl" url={narrationUrl} />
      )}
      {showSeparator && <Separator />}
    </ComponentPageCell>
  </>
);
