import {
  TitleBar,
  P,
  Block,
  useTheme,
  styled,
  H2,
  GridLayout,
  CardComposable,
  CardMedia,
  CardContent,
  useBreakpointKey,
  AudioPlayerComposable,
  AudioPlayerVolumeControl,
  AudioPlayerPlayPauseButton,
  AudioPlayerTimeDisplay,
  AudioPlayerSeekBar,
  AudioPlayerPlaybackSpeedControl,
  TextBlock,
} from 'newskit';
import CodeTemplate from '../../components/demo/code-template';
import Page7 from '../../public/static/demo/page7';

export const pageTitle = 'Step 8: Full Page Example';

const cards = [
  'EF476F/FFFFFF',
  'FFD166/000000',
  '06D6A0/FFFFFF',
  '118AB2/FFFFFF',
].map(colours => ({
  media: {
    src: `https://via.placeholder.com/300/${colours}?text=A Great Podcast`,
  },
  title: 'A Great Podcast',
  text:
    'In this podcast we lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}));

const PublicationName = () => {
  const theme = useTheme();
  return <>{theme.name ? `${theme.name} Daily` : 'The NewsKit Daily'}</>;
};

const AudioPlayerInline = () => {
  const breakpointKey = useBreakpointKey();
  return (
    <AudioPlayerComposable src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3">
      <GridLayout
        columns="auto auto 84px 1fr auto auto"
        columnGap="space040"
        alignItems="center"
      >
        <AudioPlayerVolumeControl
          layout={breakpointKey === 'xs' ? 'collapsed' : 'horizontal'}
        />
        <AudioPlayerPlayPauseButton size="small" />
        <AudioPlayerTimeDisplay />
        <AudioPlayerSeekBar />
        <AudioPlayerPlaybackSpeedControl useModal={{xs: true, md: true}} />
      </GridLayout>
    </AudioPlayerComposable>
  );
};

const areas = {
  xs: `
    podcast
    pricing
    list  
  `,
  md: `
    podcast pricing
    list    list
  `,
};

const Content = () => (
  <GridLayout
    columns={{xs: '1fr', md: '1fr auto'}}
    rowGap="space050"
    areas={areas}
    overrides={{
      width: {md: '67%'},
      maxWidth: '1920px',
      marginInline: 'auto',
    }}
  >
    {Area => (
      <>
        <Area.Podcast paddingInline="space040">
          <Block>
            <TitleBar>
              <PublicationName /> Podcasts
            </TitleBar>
          </Block>

          {/* Podcast Card */}
          <CardComposable
            overrides={{
              paddingInline: 'space050',
              paddingBlock: 'space050',
              marginBlockEnd: 'space020',
            }}
            columnGap="space050"
            rowGap="space050"
            areas={{
              xs: `media 
              content`,
              md: `media content`,
            }}
          >
            <CardMedia
              media={{
                src:
                  'https://via.placeholder.com/300/011936/FFFFFF?text=A Great Presenter Image',
                alt: 'A Great Presenter',
                overrides: {
                  stylePreset: 'audioPlayerImage',
                  maxWidth: {
                    xs: '300px',
                    md: '120px',
                    lg: '180px',
                    xl: '210px',
                  },
                },
              }}
            />
            <CardContent rowGap="space050" alignContent="start">
              <H2>A Great Podcast</H2>
              <P>
                This week on A Great Podcast we have lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </P>
            </CardContent>
          </CardComposable>

          {/* Podcast AudioPlayer */}
          <AudioPlayerInline />
        </Area.Podcast>
        <Area.Pricing justifySelf="center">
          {/* Page7 is our Pricing Card Component */}
          <Page7 />
        </Area.Pricing>
        <Area.List>
          <Block marginBlockEnd="space040" marginBlockStart="space030">
            <TitleBar
              overrides={{
                heading: {
                  typographyPreset: {
                    xs: 'utilityHeading030',
                    md: 'utilityHeading040',
                    lg: 'utilityHeading050',
                  },
                },
              }}
            >
              Popular Podcasts
            </TitleBar>
          </Block>
          <GridLayout
            columns={{
              xs: '1fr 1fr',
              sm: '1fr 1fr 1fr',
              md: '1fr 1fr 1fr 1fr',
            }}
            columnGap="space050"
            rowGap="space060"
          >
            {[...cards, ...[...cards].reverse()].map(({media, text}, i) => (
              <CardComposable rowGap="space030">
                <CardMedia media={media} />
                <CardContent
                  rowGap="space030"
                  overrides={{paddingInline: 'space030'}}
                >
                  <P>{text}</P>
                </CardContent>
              </CardComposable>
            ))}
          </GridLayout>
        </Area.List>
      </>
    )}
  </GridLayout>
);

export default function DemoPage8() {
  return (
    <CodeTemplate
      title={pageTitle}
      nextPage="page9"
      prevPage="page7"
      PageComponent={Content}
      showThemeSwitcher
    />
  );
}
