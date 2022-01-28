import React, {useState} from 'react';

import {states} from '../checkbox/__tests__/helpers';
import {FormInputState} from '../form/types';
import {
  Box,
  Container,
  ContainerWithBorder,
  ContainerWithFixedHeight,
  ContainerWithFixedWidth,
  DrawerContainer,
  InverseContainer,
  ModalWrapper,
  StyledBlock,
} from './styled';
import {Tag} from '../tag';
import {LinkInline, LinkStandalone} from '../link';
import {IconButton} from '../icon-button';
import {Button, ButtonSize} from '../button';
import {
  IconFilledAccountBalance,
  IconFilledError,
  IconFilledFacebook,
  IconFilledFigma,
  IconFilledInfo,
  IconFilledMood,
  IconFilledPause,
  IconFilledTwitter,
  IconFilledWhatsApp,
} from '../icons';
import {Flow, Stack} from '../stack';
import {AssistiveText} from '../assistive-text';
import {Banner} from '../banner';
import {getSSRId, MQ} from '../utils';
import {Byline} from '../byline';
import {Caption, CaptionInset} from '../caption';
import {Cell, Grid} from '../grid';
import {Card} from '../card';
import {Block} from '../block';
import {TextBlock} from '../text-block';
import {Headline} from '../headline';
import {DateTime} from '../date-time';
import {Divider} from '../divider';
import {AlignSelfValues, StackChild} from '../stack-child';
import {EmailInput} from '../email-input';
import {Fieldset} from '../fieldset';
import {Checkbox} from '../checkbox';
import {Flag} from '../flag';
import {Image} from '../image';
import {
  FormInput,
  FormInputAssistiveText,
  FormInputLabel,
  FormInputTextField,
} from '../form';
import {TextField, TextFieldSize} from '../text-field';
import {InlineMessage} from '../inline-message';
import {Menu, MenuItem} from '../menu';
import {OrderedList} from '../ordered-list';
import {Scroll} from '../scroll';
import {Select, SelectOption} from '../select';
import {ShareBar} from '../share-bar';
import {StatefulSlider} from '../slider';
import {Tab, Tabs, TabsDistribution, TabSize} from '../tabs';
import {TitleBar} from '../title-bar';
import {Toast} from '../toast';
import {UnorderedList} from '../unordered-list';
import {AudioPlayer} from '../audio-player';
import {VolumeControl} from '../volume-control';
import {Drawer} from '../drawer';
import {Modal} from '../modal';
import {H1, P} from '../typography';
import {Label} from '../label';

interface ComponentData {
  name: string;
  component: ({stylePreset}: {stylePreset?: MQ<string>}) => JSX.Element;
}

const listData = [`alpha`, `bravo`, `charlie`, `delta`, `echo`, `foxtrot`];
const textFieldStates: [string, {state?: FormInputState}][] = [
  ['default', {state: undefined}],
  ['disabled', {state: 'disabled'}],
  ['invalid', {state: 'invalid'}],
  ['valid', {state: 'valid'}],
];

const tags = [
  'This',
  'Is',
  'A',
  'Stack',
  'Example',
  'showing',
  'multiple',
  'tags',
].map(item => <Tag key={getSSRId()}>{item}</Tag>);

const loremIpsum = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis erat sed velit tincidunt tincidunt. Sed gravida erat sit amet vulputate euismod. In id quam et sem dignissim mattis. Nullam sit amet ex maximus, egestas ligula vitae, pulvinar magna. Quisque nisi elit, mollis ut mauris dapibus, efficitur aliquam dui. Quisque auctor volutpat feugiat. Maecenas pretium elit ex, at condimentum leo luctus eu. Vivamus eget facilisis dolor, eu semper elit. Etiam rhoncus semper ex tincidunt ultrices. Nulla libero orci, egestas sed lectus ac, laoreet lacinia ipsum.',
  'Suspendisse faucibus non ipsum id elementum. Quisque porta quam vitae gravida tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis lacinia risus rutrum lectus sodales maximus. Curabitur tempor suscipit congue. Sed auctor, ante ut hendrerit ornare, ipsum sem malesuada diam, in dictum metus massa vel urna. Sed eget massa ac odio hendrerit pulvinar. Vestibulum ex sem, venenatis sed nibh ac, dictum hendrerit magna. Etiam porta nulla vitae fermentum iaculis. Ut vitae metus sit amet ante congue dapibus. Sed commodo augue justo, dignissim hendrerit nisl sollicitudin et. Proin faucibus porta elementum. Morbi finibus, massa lobortis convallis bibendum, neque erat venenatis felis, ut tempor enim dui vitae dolor. Donec eget facilisis lacus.',
  'Maecenas pharetra nisl eu quam vulputate, eu dignissim nisi ornare. Aliquam eu odio venenatis, ultricies urna in, luctus eros. Proin bibendum massa non justo luctus, sed ultricies eros molestie. Sed non porta erat. Donec nunc nisl, mattis sit amet lacus quis, aliquam sodales leo. Donec quis lectus faucibus, dignissim urna interdum, iaculis ipsum. Aenean porta est ut dignissim ultricies. Sed sit amet dictum sapien. Praesent placerat pellentesque lorem a ornare. Sed eu lectus faucibus, venenatis nibh at, pellentesque massa. Etiam et mi euismod, posuere sapien nec, pharetra neque. Nunc vel pretium dui. Praesent facilisis suscipit est vitae tincidunt. Proin in mauris at massa fringilla vulputate pretium in mauris. Ut non nunc placerat lacus tristique viverra. Morbi accumsan nunc in eros pellentesque fringilla.',
  'Quisque suscipit magna quis consectetur venenatis. Suspendisse ultrices elit diam, non ultricies lacus molestie eget. Phasellus mi tortor, egestas nec massa vel, ultrices pharetra ligula. Ut nec quam malesuada, pretium ex eget, condimentum tellus. Nam egestas justo vitae lectus convallis faucibus. Nulla nulla enim, blandit sed accumsan ut, laoreet id nisl. Curabitur egestas eleifend leo sed pretium. Suspendisse nec tortor eget risus congue varius et et arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus id mattis leo. Aliquam sed erat a est euismod mattis et vel nisi. Aenean velit dui, semper consectetur eleifend vel, tempus quis nunc. Praesent at placerat mauris. Etiam ante nisl, sagittis vel sapien et, viverra sodales lacus. Maecenas vel eleifend magna. Mauris elementum nunc sed erat vulputate, at venenatis nisl porttitor.',
];

const link = () => <LinkInline href="/">Link</LinkInline>;

const ShareOnTwitterBtn = () => (
  <IconButton
    aria-label="Share on Twitter"
    size={ButtonSize.Large}
    overrides={{
      stylePreset: 'iconButtonMinimalSecondary',
    }}
  >
    <IconFilledTwitter />
  </IconButton>
);

const ShareOnFacebookBtn = () => (
  <IconButton
    aria-label="Share on Facebook"
    size={ButtonSize.Large}
    overrides={{
      stylePreset: 'iconButtonMinimalSecondary',
    }}
  >
    <IconFilledFacebook />
  </IconButton>
);
const DrawerContent = () => (
  <>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
      scelerisque sapien. Praesent mollis vestibulum nunc at blandit. Donec
      vitae venenatis mi. Aenean ut ornare diam, non facilisis diam.
      Pellentesque consequat mi in imperdiet ultrices. Sed vitae erat ac urna{' '}
      <LinkInline href="/">Test link</LinkInline> rutrum aliquet eu mattis
      ligula. Sed dapibus, enim sed tristique gravida, nisl dolor malesuada
      lacus, quis auctor dui mauris eu odio. Vivamus eu augue et enim varius
      viverra. Vivamus ut tellus iaculis, ullamcorper ligula sit amet, posuere
      ipsum.
    </P>
    <div>
      <Button>Remind me later</Button>
      <Button>Ok</Button>
    </div>
  </>
);

const useActiveState = (
  initial = false,
): [boolean, () => void, () => void, () => void] => {
  const [isActive, setIsActive] = useState(initial);

  /* istanbul ignore next */ const open = () => setIsActive(true);
  /* istanbul ignore next */ const close = () => setIsActive(false);
  /* istanbul ignore next */ const toggle = () => (isActive ? close() : open());

  return [isActive, open, close, toggle];
};

const modalContent = (
  <Stack
    flow="vertical-center"
    stackDistribution="center"
    spaceInline="space020"
  >
    <H1>You need an account</H1>
    <P>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. (Double click for more text :) )
    </P>
    <Button>Register for a free account</Button>
    <P>Already have an account?</P>
    <LinkInline href="/">Sign in here</LinkInline>
  </Stack>
);

export const scenarios: Array<ComponentData> = [
  {
    name: 'Assistive Text',
    component: () => (
      <Stack
        spaceInline="space040"
        spaceStack="space100"
        flow="horizontal-top"
        wrap
      >
        {textFieldStates.map(([id, {state}]) => (
          <Container key={id}>
            <Label htmlFor={id}>{id}</Label>
            <AssistiveText state={state}>Assistive Text</AssistiveText>
          </Container>
        ))}
      </Stack>
    ),
  },
  {
    name: 'Audio Player',
    component: () => (
      <AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        title="The Breakfast Show with Giles Coren"
        captionSrc="captions.vtt"
        ariaLandmark="audio player default"
      />
    ),
  },
  {
    name: 'Banner',
    component: ({stylePreset}) => (
      <Stack spaceInline="space020">
        <TextBlock typographyPreset="utilityLabel010" stylePreset="inkContrast">
          {stylePreset}
        </TextBlock>
        <Banner
          icon={
            <IconFilledInfo
              overrides={{
                size: 'iconSize020',
                stylePreset: 'inkInverse',
              }}
            />
          }
          overrides={{stylePreset}}
        >
          {loremIpsum[0]}
        </Banner>
      </Stack>
    ),
  },
  {
    name: 'Block',
    component: () => (
      <Block stylePreset="inkSubtle">This is a block component</Block>
    ),
  },
  {
    name: 'Button',
    component: ({stylePreset}) => (
      <Stack spaceInline="space020">
        <TextBlock typographyPreset="utilityLabel010" stylePreset="inkContrast">
          {stylePreset}
        </TextBlock>
        <StyledBlock spaceStack="space020">
          <Button key={getSSRId()} overrides={{stylePreset}}>
            Button
          </Button>
        </StyledBlock>
      </Stack>
    ),
  },
  {
    name: 'Byline',
    component: () => (
      <Byline
        bylineData={[
          {
            author: 'Richard Lloyd Parry',
            href: 'https://www.thetimes.co.uk/profile/richard-lloyd-parry',
          },
          {
            author: 'Callum Jones',
            href: 'https://www.thetimes.co.uk/profile/callum-jones?',
          },
        ]}
      />
    ),
  },
  {
    name: 'Caption',
    component: () => (
      <Stack flow={Flow.HorizontalTop} spaceInline="space020">
        <Stack spaceInline="space020">
          <Image
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '300px', height: '200px'}}
          />
          <Caption creditText="Credit text">Image with Caption</Caption>
        </Stack>
        <Stack spaceInline="space020">
          <Image
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '300px', height: '200px'}}
          />
          <CaptionInset creditText="Credit text">
            Image with Caption Inset
          </CaptionInset>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Card',
    component: () => (
      <>
        <Grid>
          <Cell xs={12} md={5}>
            <Card
              href="#"
              media={{
                src: '/placeholder-3x2.png',
                alt: 'Card Media',
                loadingAspectRatio: '3:2',
              }}
              actions={() => <Tag href="/">News</Tag>}
            >
              <Block
                spaceStack={{xs: 'space040', md: 'space045', lg: 'space050'}}
              >
                <Headline>dolor sit amet consectetur adipiscing</Headline>
              </Block>
              <Block spaceStack="space010">
                <TextBlock
                  typographyPreset="editorialParagraph010"
                  stylePreset="inkContrast"
                >
                  {loremIpsum[1].slice(0, 144)}
                </TextBlock>
              </Block>
            </Card>
          </Cell>
          <Cell xs={12} md={7}>
            <Stack
              spaceInline="space030"
              stackDistribution="space-between"
              flow="vertical-stretch"
            >
              <Card
                layout="horizontal-reverse"
                href="#"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                  loadingAspectRatio: '3:2',
                }}
                overrides={{
                  horizontalRatio: '1:2',
                }}
              >
                <Block
                  spaceStack={{
                    xs: 'space040',
                    md: 'space045',
                    lg: 'space050',
                  }}
                >
                  <Headline
                    overrides={{typographyPreset: 'editorialHeadline020'}}
                  >
                    Lorem dolor sit amet consectetur adipiscing
                  </Headline>
                </Block>
                <Block spaceStack="space010">
                  <TextBlock
                    stylePreset="cardTeaserLead"
                    typographyPreset="editorialParagraph010"
                  >
                    {loremIpsum[1].slice(0, 40)}
                  </TextBlock>
                </Block>
              </Card>
              <Card
                layout="horizontal-reverse"
                href="#"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                  loadingAspectRatio: '3:2',
                }}
              >
                <Block
                  spaceStack={{
                    xs: 'space040',
                    md: 'space045',
                    lg: 'space050',
                  }}
                >
                  <Headline
                    overrides={{typographyPreset: 'editorialHeadline020'}}
                  >
                    Sed velit tincidunt aliquam eu odio venenati.
                  </Headline>
                </Block>
                <Block spaceStack="space010">
                  <TextBlock
                    stylePreset="inkSubtle"
                    typographyPreset="editorialParagraph010"
                  >
                    {loremIpsum[2].slice(0, 59)}
                  </TextBlock>
                </Block>
              </Card>
            </Stack>
          </Cell>
        </Grid>
      </>
    ),
  },
  {
    name: 'Checkbox',
    component: () => (
      <Stack
        spaceInline="space040"
        spaceStack="space100"
        flow="horizontal-top"
        wrap
      >
        {states.map(([id, {checked, ...props}]) => (
          <Container key={id}>
            <Checkbox {...props} defaultChecked={checked} label={id} />
          </Container>
        ))}
      </Stack>
    ),
  },
  {
    name: 'Date Time',
    component: () => (
      <Stack
        spaceInline="space040"
        spaceStack="space100"
        flow="horizontal-top"
        wrap
      >
        <DateTime date="2017-01-01T04:32:00.000Z" />
        <DateTime date="2017-01-01T04:32:00.000Z" prefix="Updated:" />
        <DateTime date="2017-01-01T04:32:00.000Z" suffix="The Times" />
        <DateTime
          date="2017-01-01T04:32:00.000Z"
          suffix="The Times"
          prefix="Updated:"
        />
      </Stack>
    ),
  },
  {
    name: 'Divider',
    component: () => (
      <>
        <ContainerWithBorder>
          <Stack stackDistribution="center" flow="vertical-center">
            <IconFilledFacebook overrides={{size: 'iconSize040'}} />
            <Divider />
            <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
          </Stack>
        </ContainerWithBorder>
        <ContainerWithBorder>
          <Stack flow="horizontal-center" stackDistribution="center">
            <IconFilledFacebook overrides={{size: 'iconSize040'}} />
            <StackChild alignSelf={AlignSelfValues.Stretch}>
              <Divider vertical />
            </StackChild>
            <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
          </Stack>
        </ContainerWithBorder>
      </>
    ),
  },
  {
    name: 'Email Input',
    component: () => (
      <Stack
        spaceInline="space040"
        spaceStack="space100"
        flow="horizontal-top"
        wrap
      >
        <ContainerWithFixedWidth>
          <EmailInput
            label="Label"
            placeholder="Enter your email address."
            assistiveText="Assistive text"
          />
        </ContainerWithFixedWidth>
        <ContainerWithFixedWidth>
          <EmailInput hideLabel label="Label" assistiveText="Assistive text" />
        </ContainerWithFixedWidth>
        <ContainerWithFixedWidth>
          <EmailInput label="Label" />
        </ContainerWithFixedWidth>
      </Stack>
    ),
  },
  {
    name: 'Fieldset',
    component: () => (
      <ContainerWithFixedWidth>
        <Fieldset legend="Legend">
          <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
          <AssistiveText>Assistive Text</AssistiveText>
        </Fieldset>
      </ContainerWithFixedWidth>
    ),
  },
  {
    name: 'Flag',
    component: ({stylePreset}) => (
      <Stack spaceInline="space020">
        <TextBlock typographyPreset="utilityLabel010" stylePreset="inkContrast">
          {stylePreset}
        </TextBlock>
        <StyledBlock spaceStack="space020">
          <Flag overrides={{stylePreset}} key={getSSRId()}>
            Flag
          </Flag>
        </StyledBlock>
      </Stack>
    ),
  },
  {
    name: 'FormInput',
    component: () => (
      <ContainerWithFixedWidth>
        <FormInput
          name="email-valid"
          rules={{
            required: 'Required field',
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: 'Please provide a valid email',
            },
          }}
        >
          <FormInputLabel>E-mail</FormInputLabel>
          <FormInputTextField
            size={'small' as TextFieldSize}
            startEnhancer={
              <>
                <IconFilledAccountBalance overrides={{size: '20px'}} />
              </>
            }
          />
          <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
        </FormInput>
      </ContainerWithFixedWidth>
    ),
  },
  {
    name: 'Headline',
    component: () => <Headline kickerText="Kicker">Headline text</Headline>,
  },
  {
    name: 'Icon Button',
    component: ({stylePreset}) => (
      <Stack spaceInline="space020">
        <TextBlock typographyPreset="utilityLabel010" stylePreset="inkContrast">
          {stylePreset}
        </TextBlock>
        <StyledBlock spaceStack="space020">
          <IconButton
            aria-label="Email icon"
            overrides={{stylePreset}}
            key={getSSRId()}
          >
            <IconFilledPause />
          </IconButton>
        </StyledBlock>
      </Stack>
    ),
  },
  {
    name: 'Inline Drawer',
    component: () =>
      React.createElement(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [isActive, open, close, toggle] = useActiveState();
        const [placement, setPlacement] = useState('left');

        /* istanbul ignore next */
        const onChangeValue = (ev: React.ChangeEvent<HTMLDivElement>) =>
          setPlacement((ev.target as HTMLInputElement).value);

        return (
          <div data-testid="scrollable-drawer">
            <Button onClick={toggle} data-testid="drawer-open-button">
              Open Drawer
            </Button>
            <Block
              as="span"
              spaceInset="space030"
              onChange={onChangeValue}
              stylePreset="inkSubtle"
            >
              <label htmlFor="drawer-inline_top">
                top:
                <input
                  type="radio"
                  value="top"
                  id="drawer-inline_top"
                  name="placement"
                />
              </label>
              <label htmlFor="drawer-inline_left">
                left:
                <input
                  type="radio"
                  value="left"
                  id="drawer-inline_left"
                  name="placement"
                  defaultChecked
                />
              </label>
              <label htmlFor="drawer-inline_bottom">
                bottom:
                <input
                  type="radio"
                  value="bottom"
                  id="drawer-inline_bottom"
                  name="placement"
                />
              </label>
              <label htmlFor="drawer-inline_right">
                right:
                <input
                  type="radio"
                  value="right"
                  id="drawer-inline_right"
                  name="placement"
                />
              </label>
            </Block>

            <DrawerContainer>
              <Drawer
                aria-label="Drawer example"
                open={isActive}
                onDismiss={close}
                inline
                disableFocusTrap
                hideOverlay
                placement={placement as 'top' | 'left' | 'right' | 'bottom'}
                header={
                  <P>
                    This is a drawer header. Content is passed as string. Should
                    be a long one so that the icon button is vertically
                    centered.
                  </P>
                }
                overrides={{
                  panel: {minSize: '20vh', maxSize: '50%'},
                }}
              >
                <DrawerContent />
              </Drawer>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                aliquet lorem massa, et lacinia ipsum tristique id. Phasellus
                sed posuere lacus. Pellentesque eu odio{' '}
                <LinkInline href="/">Test link 1</LinkInline> sapien. Donec
                finibus pellentesque est porta dictum. Suspendisse venenatis
                vitae augue nec hendrerit. In ut quam tempus, feugiat risus
                quis, porta eros. Aliquam ultricies ac orci viverra gravida. Ut
                sodales odio tempor sodales viverra. In condimentum tincidunt
                fermentum. Nullam imperdiet est vel tincidunt suscipit.
                Vestibulum vel pulvinar nibh, at molestie lectus. Curabitur
                ultricies massa eu sem varius volutpat. Ut vitae purus et enim
                imperdiet finibus. Quisque posuere lacus a nunc tempor accumsan.
                Aliquam odio nunc, interdum.
              </P>
            </DrawerContainer>
          </div>
        );
      }),
  },
  {
    name: 'Inline Message',
    component: ({stylePreset}) => (
      <Stack spaceInline="space020">
        <TextBlock typographyPreset="utilityLabel010" stylePreset="inkContrast">
          {stylePreset}
        </TextBlock>
        <InlineMessage
          title="lorem ipsum"
          aria-label={`${stylePreset}`}
          icon={
            <IconFilledInfo
              overrides={{
                size: 'iconSize020',
              }}
            />
          }
          overrides={{stylePreset}}
          key={getSSRId()}
        >
          {loremIpsum[0].slice(0, 55)}
        </InlineMessage>
      </Stack>
    ),
  },
  {
    name: 'Inline Modal',
    component: () =>
      React.createElement(() => {
        const [isActive, open, close] = useActiveState();

        return (
          <div data-testid="scrollable-modal">
            <ModalWrapper>
              <Button onClick={open} data-testid="modal-open-button">
                Open Modal
              </Button>
              <p>SCROLL DOWN </p>

              <Box>
                <P>{loremIpsum[0]}</P>
                <P>{loremIpsum[1]}</P>
                <P>{loremIpsum[2]}</P>
              </Box>
              <Modal
                open={isActive}
                onDismiss={close}
                header={
                  <P>
                    This is a modal header. Content is passed as string. Should
                    be a long one so that the icon button is vertically
                    centered.
                  </P>
                }
                hideOverlay
                disableFocusTrap
                inline
              >
                {modalContent}
              </Modal>
            </ModalWrapper>
          </div>
        );
      }),
  },
  {
    name: 'Link',
    component: () => (
      <Stack
        spaceInline="space040"
        spaceStack="space100"
        flow="horizontal-top"
        wrap
      >
        <LinkInline href="/">Inline link</LinkInline>
        <LinkStandalone href="/">Standalone link</LinkStandalone>
        <LinkInline href="/" overrides={{stylePreset: 'linkInlineInverse'}}>
          Inline Link Inverse
        </LinkInline>
        <LinkStandalone
          href="/"
          overrides={{stylePreset: 'linkStandaloneInverse'}}
        >
          LinkStandalone Inverse
        </LinkStandalone>
      </Stack>
    ),
  },
  {
    name: 'Menu',
    component: () => (
      <Stack spaceInline="space040" spaceStack="space100" flow="horizontal-top">
        <ContainerWithBorder>
          <Menu aria-label={`Menu ${getSSRId()}`}>
            <MenuItem href="/">item 1</MenuItem>
            <MenuItem href="/">item 2</MenuItem>
            <MenuItem href="/">item 3</MenuItem>
          </Menu>
        </ContainerWithBorder>
        <ContainerWithBorder>
          <Menu vertical aria-label={`Menu ${getSSRId()}`}>
            <MenuItem href="/">item 1</MenuItem>
            <MenuItem href="/">item 2</MenuItem>
            <MenuItem href="/">item 3</MenuItem>
          </Menu>
        </ContainerWithBorder>
      </Stack>
    ),
  },
  {
    name: 'OrderedList',
    component: () => <OrderedList>{listData}</OrderedList>,
  },
  {
    name: 'Scroll',
    component: () => (
      <ContainerWithFixedWidth>
        <Scroll controls="static">
          <Stack flow="horizontal-center" spaceInline="space020">
            {tags}
          </Stack>
        </Scroll>
      </ContainerWithFixedWidth>
    ),
  },
  {
    name: 'Select',
    component: () => (
      <Select>
        {listData.map(item => (
          <SelectOption key={getSSRId()} value={item}>
            {item}
          </SelectOption>
        ))}
      </Select>
    ),
  },
  {
    name: 'Share Bar',
    component: () => (
      <Stack spaceInline="space040" spaceStack="space100" flow="horizontal-top">
        <ContainerWithBorder>
          <ShareBar label="Share" role="region">
            <ShareOnTwitterBtn />
            <ShareOnFacebookBtn />
            <Button>More options</Button>
          </ShareBar>
        </ContainerWithBorder>
        <ContainerWithBorder>
          <ShareBar
            vertical
            label="Share"
            role="region"
            aria-label="share bar with vertical items and label"
          >
            <ShareOnTwitterBtn />
            <ShareOnFacebookBtn />
          </ShareBar>
        </ContainerWithBorder>
      </Stack>
    ),
  },
  {
    name: 'Slider',
    component: () => (
      <ContainerWithFixedWidth>
        <StatefulSlider values={[50]} max={100} min={0} />
      </ContainerWithFixedWidth>
    ),
  },
  {
    name: 'Tabs',
    component: () => (
      <Tabs size={TabSize.Small} divider distribution={TabsDistribution.Equal}>
        <Tab label="Lorem ipsum">
          <TextBlock stylePreset="inkSubtle">{loremIpsum[1]}</TextBlock>
        </Tab>
        <Tab label="Consectetur adipiscing">
          <TextBlock stylePreset="inkSubtle">{loremIpsum[2]}</TextBlock>
        </Tab>
        <Tab label="Magna">
          <TextBlock stylePreset="inkSubtle">{loremIpsum[3]}</TextBlock>
        </Tab>
      </Tabs>
    ),
  },
  {
    name: 'Tag',
    component: () => (
      <Stack
        flow="horizontal-center"
        spaceStack="space020"
        spaceInline="space020"
        wrap="wrap"
      >
        <Tag href="http://example.com">Text</Tag>
        <InverseContainer>
          <Tag overrides={{stylePreset: 'tagPrimaryInverse'}}>Text</Tag>
        </InverseContainer>
      </Stack>
    ),
  },
  {
    name: 'Text Block',
    component: () => (
      <TextBlock stylePreset="inkSubtle">
        {loremIpsum[0].slice(0, 55)}
      </TextBlock>
    ),
  },
  {
    name: 'Text Field',
    component: () => (
      <Stack
        spaceInline="space040"
        spaceStack="space100"
        flow="horizontal-top"
        wrap
      >
        {textFieldStates.map(([id, {state}]) => (
          <Container key={id}>
            <Label htmlFor={id}>{id}</Label>
            <TextField state={state} aria-describedby={`${id}-at`} id={id} />
          </Container>
        ))}
      </Stack>
    ),
  },
  {
    name: 'Title Bar',
    component: () => (
      <Stack
        spaceInline="space040"
        spaceStack="space100"
        flow="horizontal-top"
        wrap
      >
        <TitleBar>Title bar default state</TitleBar>
        <TitleBar actionItem={link}>Title bar with link</TitleBar>
        <TitleBar actionItem={() => <Button>Default button</Button>}>
          Title bar with button
        </TitleBar>
        <TitleBar>
          Title bar with Icon <IconFilledFigma height="30px" />
        </TitleBar>
      </Stack>
    ),
  },
  {
    name: 'Toast',
    component: ({stylePreset}) => (
      <Toast
        overrides={{stylePreset, maxWidth: '100%'}}
        key={getSSRId()}
        title="lorem ipsum"
        actions={() => (
          <Button
            size="small"
            overrides={{stylePreset: 'buttonMinimalInverse'}}
          >
            dismiss
          </Button>
        )}
        icon={
          <IconFilledError
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
      >
        {loremIpsum[0].slice(0, 55)}
      </Toast>
    ),
  },
  {
    name: 'UnorderedList',
    component: () => (
      <Stack spaceInline="space100" flow="horizontal-top">
        <UnorderedList>{listData}</UnorderedList>
        <UnorderedList listItemMarker={IconFilledMood}>
          {listData}
        </UnorderedList>
      </Stack>
    ),
  },
  {
    name: 'Volume Control',
    component: () =>
      React.createElement(() => {
        const [stateVolume, setVolume] = useState(0);
        const [stateVerticalVolume, setVerticalVolume] = useState(0);
        return (
          <Stack
            spaceInline="space040"
            spaceStack="space100"
            flow="horizontal-top"
          >
            <ContainerWithFixedWidth>
              <VolumeControl
                volume={stateVolume}
                onChange={
                  /* istanbul ignore next */ newValues => {
                    /* istanbul ignore next */
                    setVolume(newValues);
                  }
                }
              />
            </ContainerWithFixedWidth>
            <ContainerWithFixedHeight>
              <VolumeControl
                vertical
                volume={stateVerticalVolume}
                onChange={
                  /* istanbul ignore next */ newValues => {
                    /* istanbul ignore next */
                    setVerticalVolume(newValues);
                  }
                }
              />
            </ContainerWithFixedHeight>
          </Stack>
        );
      }),
  },
];
