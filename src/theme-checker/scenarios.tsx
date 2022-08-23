/* istanbul ignore file */
import React, {useState} from 'react';
import {FormInputState} from '../form/types';
import {
  AudioPlayerContainer,
  Box,
  Container,
  DrawerContainer,
  ModalWrapper,
  StyledFullWidthVisible,
  StyledInput,
  StyledLabel,
} from './styled';
import {Tag} from '../tag';
import {LinkInline, LinkStandalone} from '../link';
import {IconButton} from '../icon-button';
import {Button} from '../button';
import {
  IconFilledAddCircle,
  IconFilledEmail,
  IconFilledError,
  IconFilledFacebook,
  IconFilledInfo,
  IconFilledInstagram,
  IconFilledTwitter,
  IconOutlinedArrowForwardIos,
} from '../icons';
import {Stack} from '../stack';
import {AssistiveText} from '../assistive-text';
import {Banner} from '../banner';
import {getSSRId, MQ} from '../utils';
import {Byline} from '../byline';
import {Caption, CaptionInset} from '../caption';
import {Block} from '../block';
import {TextBlock} from '../text-block';
import {Headline} from '../headline';
import {DateTime} from '../date-time';
import {Divider} from '../divider';
import {StackChild} from '../stack-child';
import {EmailInput} from '../email-input';
import {Fieldset} from '../fieldset';
import {Checkbox} from '../checkbox';
import {Switch} from '../switch';
import {Flag} from '../flag';
import {Image} from '../image';
import {
  Form,
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
import {Tab, Tabs, TabsDistribution} from '../tabs';
import {TitleBar} from '../title-bar';
import {Toast} from '../toast';
import {UnorderedList} from '../unordered-list';
import {AudioPlayer} from '../audio-player';
import {VolumeControl} from '../volume-control';
import {Drawer} from '../drawer';
import {Modal} from '../modal';
import {H1, P} from '../typography';
import {
  LabelFlag,
  returnLastLetterInCamelCase,
  renderCard,
  renderCardInset,
  useActiveState,
  CTABtn,
} from './helper';
import {
  StructuredList,
  StructuredListCell,
  StructuredListItem,
} from '../structured-list';
import {Cell, Grid} from '../grid';
import {Label} from '../label';
import {CheckboxState} from '../checkbox/types';
import {BaseSwitchState} from '../base-switch/types';
import {RadioButton} from '../radio-button';
import {
  AudioPlayerComposable,
  AudioPlayerPlayPauseButton,
  AudioPlayerSkipPreviousButton,
  AudioPlayerSkipNextButton,
  AudioPlayerSeekBar,
  AudioPlayerTimeDisplay,
  AudioPlayerReplayButton,
  AudioPlayerForwardButton,
} from '../audio-player-composable/index';
import {calculateTime} from '../audio-player-composable/components/time-display/utils';

import {GridLayout} from '../grid-layout';
import {SwitchState} from '../switch/types';
import {Tooltip} from '../tooltip';

export const checkboxStates: [
  string,
  {checked?: boolean; state?: CheckboxState},
][] = [
  ['default', {}],
  ['checked', {checked: true}],
  ['disabled', {state: 'disabled'}],
  ['checked-disabled', {checked: true, state: 'disabled'}],
  ['invalid', {state: 'invalid'}],
  ['invalid-checked', {state: 'invalid', checked: true}],
  ['valid', {state: 'valid'}],
  ['valid-checked', {state: 'valid', checked: true}],
];

export const switchStates: [
  string,
  {checked?: boolean; state?: SwitchState},
][] = [
  ['default', {}],
  ['checked', {checked: true}],
  ['disabled', {state: 'disabled'}],
  ['checked-disabled', {checked: true, state: 'disabled'}],
];

export const radioButtonStates: [
  string,
  {checked?: boolean; state?: BaseSwitchState},
][] = [
  ['default', {checked: false}],
  ['checked', {checked: true}],
  ['disabled', {state: 'disabled'}],
  ['checked-disabled', {checked: true, state: 'disabled'}],
  ['invalid', {checked: false, state: 'invalid'}],
  ['invalid-checked', {checked: true, state: 'invalid'}],
  ['valid', {checked: false, state: 'valid'}],
  ['valid-checked', {checked: true, state: 'valid'}],
];

interface ComponentData {
  name: string;
  component: ({stylePreset}: {stylePreset?: MQ<string>}) => JSX.Element;
}

const listData = [`alpha`, `bravo`, `charlie`, `delta`, `echo`, `foxtrot`];

const textFieldStates: [string, {state?: FormInputState}][] = [
  ['Default', {state: undefined}],
  ['Disabled', {state: 'disabled'}],
  ['Invalid', {state: 'invalid'}],
  ['Valid', {state: 'valid'}],
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
].map(item => <Tag key={item}>{item}</Tag>);

const loremIpsum = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis erat sed velit tincidunt tincidunt. Sed gravida erat sit amet vulputate euismod. In id quam et sem dignissim mattis. Nullam sit amet ex maximus, egestas ligula vitae, pulvinar magna. Quisque nisi elit, mollis ut mauris dapibus, efficitur aliquam dui. Quisque auctor volutpat feugiat. Maecenas pretium elit ex, at condimentum leo luctus eu. Vivamus eget facilisis dolor, eu semper elit. Etiam rhoncus semper ex tincidunt ultrices. Nulla libero orci, egestas sed lectus ac, laoreet lacinia ipsum.',
];

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
  </Stack>
);

const arrowIcon = (
  <Stack stackDistribution="flex-end" flow="horizontal-center">
    <IconOutlinedArrowForwardIos
      overrides={{
        size: 'iconSize010',
        stylePreset: 'inkContrast',
      }}
    />
  </Stack>
);
const listItemWithThreeCells = (
  <StructuredListItem ariaLabel="list item">
    <StructuredListCell>
      <TextBlock stylePreset="inkContrast" typographyPreset="utilityHeading010">
        Label
      </TextBlock>
    </StructuredListCell>
    <StructuredListCell>
      <TextBlock stylePreset="inkSubtle" typographyPreset="utilityBody020">
        A short description of the label
      </TextBlock>
    </StructuredListCell>
    <StructuredListCell>{arrowIcon}</StructuredListCell>
  </StructuredListItem>
);

const buttonPresets = [
  'Primary',
  'Secondary',
  'Positive',
  'Negative',
  'Inverse',
];
const buttonKinds = ['Solid', 'Outlined', 'Minimal'];

const flagPresets = [
  'Primary',
  'Positive',
  'Negative',
  'Neutral',
  'Notice',
  'Informative',
  'Inverse',
];
const flagKinds = ['Solid', 'Minimal'];
const fullAudioPlayerAreas = `
  seekBar seekBar seekBar 
  currentTime none totalTime  
  volume controls link
 `;

/* istanbul ignore next */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
/* istanbul ignore next */
const onSubmit = async () => {
  await sleep(2000);
};
/* istanbul ignore next */
const validateUserName = async (value: string) => {
  await sleep(1000);
  return value !== 'newskit' || 'This username is already taken';
};

export const scenarios: Array<ComponentData> = [
  {
    name: 'Assistive Text',
    component: () => (
      <Stack
        spaceInline="space110"
        spaceStack="space060"
        flow="horizontal-top"
        wrap="wrap"
      >
        {textFieldStates.map(([id, {state}]) => (
          <Stack key={`${id}-assistive-text`} spaceInline="space050">
            <LabelFlag>{id}</LabelFlag>
            <AssistiveText state={state}>Assistive Text</AssistiveText>
          </Stack>
        ))}
      </Stack>
    ),
  },
  {
    name: 'Audio Player',
    component: () => (
      <>
        <>
          <Block spaceStack="space050">
            <LabelFlag>Default</LabelFlag>
          </Block>
          <AudioPlayerContainer>
            <AudioPlayer
              src="https://ncu-newskit-docs.s3.eu-west-1.amazonaws.com/storybook-assets/audio_file_1.mp3"
              title="The Breakfast Show with Giles Coren"
              captionSrc="captions.vtt"
              ariaLandmark="audio player default"
            />
          </AudioPlayerContainer>
        </>
        <>
          <Block spaceStack="space050">
            <LabelFlag>Live</LabelFlag>
          </Block>
          <AudioPlayerContainer>
            <AudioPlayer
              src="https://radio.talkradio.co.uk/stream"
              title="The Breakfast Show with Giles Coren"
              live
              captionSrc="captions.vtt"
              ariaLandmark="audio player live"
            />
          </AudioPlayerContainer>
        </>
      </>
    ),
  },

  {
    name: 'Audio Player Composable',
    component: () => (
      <>
        <>
          <AudioPlayerComposable
            src="https://ncu-newskit-docs.s3.eu-west-1.amazonaws.com/storybook-assets/audio_file_1.mp3"
            ariaLandmark="audio player skip buttons"
          >
            <GridLayout rowGap="20px" areas={fullAudioPlayerAreas}>
              {Areas => (
                <>
                  <Areas.SeekBar>
                    <AudioPlayerSeekBar />
                  </Areas.SeekBar>
                  <Areas.CurrentTime>
                    <AudioPlayerTimeDisplay
                      format={({currentTime}) => calculateTime(currentTime)}
                    />
                  </Areas.CurrentTime>
                  <Areas.TotalTime justifySelf="end">
                    <AudioPlayerTimeDisplay
                      format={({duration}) => calculateTime(duration)}
                    />
                  </Areas.TotalTime>
                  <Areas.Volume alignSelf="center" justifySelf="start">
                    Not yet
                  </Areas.Volume>
                  <Areas.Link alignSelf="center" justifySelf="end">
                    Not yet
                  </Areas.Link>
                  <Areas.Controls>
                    <GridLayout
                      columns="repeat(5, auto)"
                      columnGap="20px"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <AudioPlayerSkipPreviousButton />
                      <AudioPlayerReplayButton />
                      <AudioPlayerPlayPauseButton />
                      <AudioPlayerForwardButton />
                      <AudioPlayerSkipNextButton />
                    </GridLayout>
                  </Areas.Controls>
                </>
              )}
            </GridLayout>
          </AudioPlayerComposable>
        </>
      </>
    ),
  },
  {
    name: 'Banner',
    component: ({stylePreset}) =>
      React.createElement(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [isActive, setIsActive] = React.useState(true);
        /* istanbul ignore next */
        const close = () => setIsActive(false);
        /* istanbul ignore next */
        const action = () => {
          /* istanbul ignore next */
          console.log('CTA Called!');
        };
        return (
          <Stack spaceInline="space050" key={`${stylePreset}-banner`}>
            <LabelFlag>
              {returnLastLetterInCamelCase(stylePreset as string)}
            </LabelFlag>
            <Banner
              aria-label={`Banner with ${stylePreset}`}
              title="Banner title"
              icon={
                <IconFilledInfo
                  overrides={{
                    size: 'iconSize020',
                    stylePreset: 'inkInverse',
                  }}
                />
              }
              actions={[
                () => (
                  <>
                    <StyledFullWidthVisible xs sm>
                      <CTABtn
                        onClick={
                          /* istanbul ignore next */ () => {
                            action();
                          }
                        }
                      >
                        CTA button
                      </CTABtn>
                    </StyledFullWidthVisible>
                    <StyledFullWidthVisible md lg xl>
                      <CTABtn
                        size="small"
                        onClick={
                          /* istanbul ignore next */ () => {
                            action();
                          }
                        }
                      >
                        CTA button
                      </CTABtn>
                    </StyledFullWidthVisible>
                  </>
                ),
              ]}
              onClose={close}
              overrides={{stylePreset}}
            >
              Here goes a brief line or two describing the toast information.
            </Banner>
          </Stack>
        );
      }),
  },
  {
    name: 'Block',
    component: () => (
      <Container border height="15px">
        <Block stylePreset="inkSubtle">
          Block default without padding or margin
        </Block>
      </Container>
    ),
  },
  {
    name: 'Button',
    component: () => (
      <Stack
        spaceInline="space110"
        spaceStack="space060"
        flow="horizontal-top"
        wrap="wrap"
      >
        {buttonPresets.map(preset => (
          <Stack spaceInline="space050" key={`${preset}-button`}>
            <LabelFlag>{preset}</LabelFlag>
            <Stack flow="horizontal-top" spaceInline="space090">
              {buttonKinds.map(kind => (
                <Stack spaceInline="space050" key={`${kind}-button`}>
                  <LabelFlag key="flag" prefix="secondary">
                    {kind}
                  </LabelFlag>
                  <Button
                    key="button"
                    overrides={{stylePreset: `button${kind}${preset}`}}
                  >
                    Button
                  </Button>
                </Stack>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    ),
  },
  {
    name: 'Byline',
    component: () => (
      <Byline
        bylineData={[
          {
            author: 'Author',
            href: 'https://www.thetimes.co.uk/profile/richard-lloyd-parry',
            title: 'Job Title',
            location: 'Location',
            key: 1,
          },
        ]}
      />
    ),
  },
  {
    name: 'Caption',
    component: () => (
      <Stack
        flow="horizontal-top"
        spaceInline="space110"
        spaceStack="space060"
        wrap="wrap"
      >
        <Stack spaceInline="space020">
          <Image
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '300px', height: '200px'}}
            placeholderIcon
          />
          <Caption creditText="Credit text">Image with Caption</Caption>
        </Stack>
        <Stack spaceInline="space020">
          <Image
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '300px', height: '200px'}}
            placeholderIcon
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
      <Stack spaceInline="space050">
        <Stack spaceInline="space050">
          <LabelFlag>Vertical</LabelFlag>
          <Grid xsMargin="space000">
            <Cell xs={12} sm={6} md={5}>
              <Stack spaceInline="space050">
                <LabelFlag prefix="secondary">Default</LabelFlag>
                {renderCard('vertical')}
              </Stack>
            </Cell>
            <Cell xs={12} sm={6} md={5}>
              <Stack spaceInline="space050">
                <LabelFlag prefix="secondary">Inset</LabelFlag>
                {renderCardInset('vertical')}
              </Stack>
            </Cell>
          </Grid>
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Horizontal</LabelFlag>
          <Grid xsMargin="space000">
            <Cell xs={12} sm={6} md={5}>
              <Stack spaceInline="space050">
                <LabelFlag prefix="secondary">Default</LabelFlag>
                {renderCard('horizontal')}
              </Stack>
            </Cell>
            <Cell xs={12} sm={6} md={5}>
              <Stack spaceInline="space050">
                <LabelFlag prefix="secondary">Inset</LabelFlag>
                {renderCardInset('horizontal')}
              </Stack>
            </Cell>
          </Grid>
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Reverse</LabelFlag>
          <Grid xsMargin="space000">
            <Cell xs={12} sm={6} md={5}>
              {renderCard('horizontal-reverse')}
            </Cell>
          </Grid>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Checkbox',
    component: () => (
      <Stack
        spaceInline="space100"
        spaceStack="space060"
        flow="horizontal-top"
        wrap="wrap"
      >
        {checkboxStates.map(([id, {checked, ...props}]) => (
          <Stack key={`${id}-checkbox`} spaceInline="space050">
            <LabelFlag>{id[0].toUpperCase() + id.slice(1)}</LabelFlag>
            <Checkbox
              {...props}
              defaultChecked={checked}
              label={id}
              size="medium"
            />
          </Stack>
        ))}
      </Stack>
    ),
  },
  {
    name: 'Switch',
    component: () => (
      <Stack
        spaceInline="space100"
        spaceStack="space060"
        flow="horizontal-top"
        wrap="wrap"
      >
        {switchStates.map(([id, {checked, ...props}]) => (
          <Stack key={`${id}-checkbox`} spaceInline="space050">
            <LabelFlag>{id[0].toUpperCase() + id.slice(1)}</LabelFlag>
            <Switch
              {...props}
              defaultChecked={checked}
              label={id}
              size="medium"
            />
          </Stack>
        ))}
      </Stack>
    ),
  },
  {
    name: 'RadioButton',
    component: () => (
      <Stack
        spaceInline="space100"
        spaceStack="space060"
        flow="horizontal-top"
        wrap="wrap"
      >
        {radioButtonStates.map(([id, {checked, ...props}]) => (
          <Stack key={`${id}-radiobutton`} spaceInline="space050">
            <LabelFlag>{id[0].toUpperCase() + id.slice(1)}</LabelFlag>
            <RadioButton
              {...props}
              checked={checked}
              label={id}
              size="medium"
            />
          </Stack>
        ))}
      </Stack>
    ),
  },
  {
    name: 'Date Time',
    component: () => (
      <Stack
        spaceInline="space110"
        spaceStack="space060"
        flow="horizontal-top"
        wrap="wrap"
      >
        <Stack spaceInline="space050">
          <LabelFlag>Default</LabelFlag>
          <DateTime date="2017-01-01T04:32:00.000Z" />
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Prefix</LabelFlag>
          <DateTime date="2017-01-01T04:32:00.000Z" prefix="Updated:" />
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Suffix</LabelFlag>
          <DateTime date="2017-01-01T04:32:00.000Z" suffix="The Times" />
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Prefix and Suffix</LabelFlag>
          <DateTime
            date="2017-01-01T04:32:00.000Z"
            suffix="The Times"
            prefix="Updated:"
          />
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Divider',
    component: () => (
      <Stack spaceInline="space110" flow="horizontal-top" wrap="wrap">
        <Stack spaceInline="space050">
          <LabelFlag>Horizontal</LabelFlag>
          <Container border height="50px" width="">
            <Stack stackDistribution="center" flow="vertical-center">
              <IconFilledAddCircle overrides={{size: 'iconSize030'}} />
              <Divider />
              <IconFilledAddCircle overrides={{size: 'iconSize030'}} />
            </Stack>
          </Container>
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Vertical</LabelFlag>
          <Container border width="50px">
            <Stack flow="horizontal-center" stackDistribution="center">
              <IconFilledAddCircle overrides={{size: 'iconSize030'}} />
              <StackChild alignSelf="stretch">
                <Divider vertical />
              </StackChild>
              <IconFilledAddCircle overrides={{size: 'iconSize030'}} />
            </Stack>
          </Container>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Email Input',
    component: () => (
      <Stack
        spaceInline="space110"
        flow="horizontal-top"
        spaceStack="space060"
        wrap="wrap"
      >
        <Stack spaceInline="space050">
          <LabelFlag>Default</LabelFlag>
          <EmailInput
            label="Email address"
            placeholder="Enter your email address."
            assistiveText="Assistive text"
            icon={
              <IconFilledEmail
                overrides={{
                  size: 'iconSize020',
                  stylePreset: 'inkSubtle',
                }}
              />
            }
            overrides={{
              width: '360px',
            }}
          />
        </Stack>

        <Stack spaceInline="space050">
          <LabelFlag>Submit validation</LabelFlag>
          <Form onSubmit={onSubmit}>
            <Block spaceStack="space050">
              <EmailInput
                label="Email address"
                name="email"
                assistiveText="Assistive text"
                icon={
                  <IconFilledEmail
                    overrides={{
                      size: 'iconSize020',
                      stylePreset: 'inkSubtle',
                    }}
                  />
                }
                rules={{
                  required: 'Required field',
                  pattern: {
                    // eslint-disable-next-line no-useless-escape
                    value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    message: 'Please provide a valid email',
                  },
                }}
                overrides={{
                  width: '360px',
                }}
              />
            </Block>
            <Button type="submit">Submit</Button>
          </Form>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Fieldset',
    component: () => (
      <Stack
        spaceInline="space110"
        flow="horizontal-top"
        spaceStack="space060"
        wrap="wrap"
      >
        <Stack spaceInline="space050">
          <LabelFlag>Small</LabelFlag>
          <Fieldset legend="Legend" size="small">
            <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
            <AssistiveText>Assistive Text</AssistiveText>
          </Fieldset>
        </Stack>

        <Stack spaceInline="space050">
          <LabelFlag>Medium</LabelFlag>
          <Fieldset legend="Legend" size="medium">
            <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
            <AssistiveText>Assistive Text</AssistiveText>
          </Fieldset>
        </Stack>

        <Stack spaceInline="space050">
          <LabelFlag>Large</LabelFlag>
          <Fieldset legend="Legend" size="large">
            <Checkbox label="Label" overrides={{spaceStack: 'space030'}} />
            <AssistiveText>Assistive Text</AssistiveText>
          </Fieldset>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Flag',
    component: () => (
      <Stack
        spaceInline="space110"
        spaceStack="space060"
        flow="horizontal-top"
        wrap="wrap"
      >
        {flagPresets.map(preset => (
          <Stack spaceInline="space050" key={`${preset}-flag`}>
            <LabelFlag>{preset}</LabelFlag>
            <Stack flow="horizontal-top" spaceInline="space090">
              {flagKinds.map(kind => (
                <Stack spaceInline="space050" key={`${kind}-flag`}>
                  <LabelFlag key="label-flag" prefix="secondary">
                    {kind}
                  </LabelFlag>
                  <Flag
                    key="flag"
                    overrides={{stylePreset: `flag${kind}${preset}`}}
                  >
                    Flag
                  </Flag>
                </Stack>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    ),
  },
  {
    name: 'FormInput',
    component: () => (
      <Grid xsMargin="space000" smColumnGutter="space100">
        <Cell xs={12} sm={6}>
          <>
            <Block spaceStack="space050">
              <LabelFlag>Default</LabelFlag>
            </Block>
            <FormInput
              name="username-default"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 5,
                  message: 'Usernames must be at least 5 characters long',
                },
                validate: validateUserName,
              }}
            >
              <FormInputLabel>Username</FormInputLabel>
              <FormInputTextField size={'small' as TextFieldSize} />
              <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
            </FormInput>
          </>
        </Cell>
        <Cell xs={12} sm={6}>
          <>
            <Block spaceStack="space050">
              <LabelFlag>Valid</LabelFlag>
            </Block>
            <FormInput
              state="valid"
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
              <FormInputTextField size={'small' as TextFieldSize} />
              <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
            </FormInput>
          </>
        </Cell>
        <Cell xs={12} sm={6}>
          <>
            <Block spaceStack="space050">
              <LabelFlag>Invalid</LabelFlag>
            </Block>
            <FormInput
              state="invalid"
              name="username-invalid"
              rules={{
                required: 'Required field',
                minLength: {
                  value: 5,
                  message: 'Usernames must be at least 5 characters long',
                },
                validate: validateUserName,
              }}
            >
              <FormInputLabel>Username</FormInputLabel>
              <FormInputTextField size={'small' as TextFieldSize} />
              <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
            </FormInput>
          </>
        </Cell>
        <Cell xs={12} sm={6}>
          <>
            <Block spaceStack="space050">
              <LabelFlag>Disabled</LabelFlag>
            </Block>
            <FormInput name="password-disbled" state="disabled">
              <FormInputLabel>Password</FormInputLabel>
              <FormInputTextField
                state="disabled"
                size={'small' as TextFieldSize}
              />
              <FormInputAssistiveText>Assistive Text</FormInputAssistiveText>
            </FormInput>
          </>
        </Cell>
      </Grid>
    ),
  },
  {
    name: 'Headline',
    component: () => <Headline kickerText="Kicker">Headline text</Headline>,
  },
  {
    name: 'Icon Button',
    component: () => (
      <Stack
        spaceInline="space110"
        spaceStack="space060"
        flow="horizontal-top"
        wrap="wrap"
      >
        {buttonPresets.map(preset => (
          <Stack spaceInline="space050" key={`${preset}-iconButton`}>
            <LabelFlag>{preset}</LabelFlag>
            <Stack flow="horizontal-top" spaceInline="space090">
              {buttonKinds.map(kind => (
                <Stack spaceInline="space050" key={`${kind}-iconButton`}>
                  <LabelFlag key="label-flag" prefix="secondary">
                    {kind}
                  </LabelFlag>
                  <IconButton
                    key="icon-button"
                    aria-label="Add icon"
                    overrides={{stylePreset: `iconButton${kind}${preset}`}}
                  >
                    <IconFilledAddCircle overrides={{size: 'iconSize010'}} />
                  </IconButton>
                </Stack>
              ))}
            </Stack>
          </Stack>
        ))}
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
              <StyledLabel htmlFor="drawer-inline_top">
                <StyledInput
                  type="radio"
                  value="top"
                  id="drawer-inline_top"
                  name="placement"
                />
                Top
              </StyledLabel>
              <StyledLabel htmlFor="drawer-inline_left">
                <StyledInput
                  type="radio"
                  value="left"
                  id="drawer-inline_left"
                  name="placement"
                  defaultChecked
                />
                Left
              </StyledLabel>
              <StyledLabel htmlFor="drawer-inline_bottom">
                <StyledInput
                  type="radio"
                  value="bottom"
                  id="drawer-inline_bottom"
                  name="placement"
                />
                Bottom
              </StyledLabel>
              <StyledLabel htmlFor="drawer-inline_right">
                <StyledInput
                  type="radio"
                  value="right"
                  id="drawer-inline_right"
                  name="placement"
                />
                Right
              </StyledLabel>
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
                header={<P>Drawer Title</P>}
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
      <Stack spaceInline="space050" key={`${stylePreset}-inlineMessage`}>
        <LabelFlag key="label-flag">
          {returnLastLetterInCamelCase(stylePreset as string)}
        </LabelFlag>
        <InlineMessage
          title="Inline Message Title"
          aria-label={`Inline message with ${stylePreset}`}
          icon={
            <IconFilledInfo
              overrides={{
                size: 'iconSize020',
              }}
            />
          }
          overrides={{stylePreset}}
          key="inline-message"
        >
          Here goes a brief line or two describing the inline message
          information.
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

              <Box>
                <P>{loremIpsum[0]}</P>
                <P>{loremIpsum[1]}</P>
              </Box>
              <Modal
                open={isActive}
                onDismiss={close}
                header={<P>Modal Title</P>}
                hideOverlay
                disableFocusTrap
                inline
                overrides={{
                  panel: {maxWidth: '60%'},
                }}
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
      <Stack spaceInline="space110" flow="horizontal-top">
        <Stack spaceInline="space050">
          <LabelFlag>Inline</LabelFlag>
          <LinkInline href="/">Inline link</LinkInline>
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Standalone</LabelFlag>
          <LinkStandalone href="/">Standalone link</LinkStandalone>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Menu',
    component: () => (
      <Stack
        spaceInline="space110"
        flow="horizontal-top"
        spaceStack="space060"
        wrap="wrap"
      >
        <Stack spaceInline="space050">
          <LabelFlag>Horizontal</LabelFlag>
          <Menu aria-label={`Menu ${getSSRId()}`}>
            <MenuItem href="/">Menu Item 1</MenuItem>
            <MenuItem href="/">Menu Item 2</MenuItem>
            <MenuItem href="/">Menu Item 3</MenuItem>
          </Menu>
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Vertical</LabelFlag>
          <Menu vertical aria-label={`Menu ${getSSRId()}`}>
            <MenuItem href="/">Menu Item 1</MenuItem>
            <MenuItem href="/">Menu Item 2</MenuItem>
            <MenuItem href="/">Menu Item 3</MenuItem>
          </Menu>
        </Stack>
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
      <Stack
        spaceInline="space110"
        flow="horizontal-top"
        spaceStack="space060"
        wrap="wrap"
      >
        <Stack spaceInline="space050">
          <LabelFlag>Horizontal</LabelFlag>
          <Container data-testid="horizontal-scroll-component">
            <Scroll controls="static">
              <Stack flow="horizontal-center" spaceInline="space020">
                {tags}
              </Stack>
            </Scroll>
          </Container>
        </Stack>
        <Stack>
          <Container data-testid="vertical-scroll-component">
            <Scroll vertical controls="static">
              <Stack flow="vertical-left" spaceInline="space040">
                {tags}
              </Stack>
            </Scroll>
          </Container>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Select',
    component: () => (
      <Select overrides={{button: {width: '250px'}}}>
        {listData.map(item => (
          <SelectOption key={item.toString()} value={item}>
            {item}
          </SelectOption>
        ))}
      </Select>
    ),
  },
  {
    name: 'Share Bar',
    component: () => (
      <Stack spaceInline="space110" flow="horizontal-top">
        <Stack spaceInline="space050">
          <LabelFlag>Horizontal</LabelFlag>
          <ShareBar label="Share" role="region">
            {[
              ['Faceook', <IconFilledFacebook />],
              ['Twitter', <IconFilledTwitter />],
              ['Instagram', <IconFilledInstagram />],
              ['AddCircle', <IconFilledAddCircle />],
            ].map(([name, icon]) => (
              <IconButton
                aria-label={`Share on ${name}`}
                overrides={{stylePreset: 'iconButtonMinimalPrimary'}}
                key={name as string}
              >
                {icon}
              </IconButton>
            ))}
          </ShareBar>
        </Stack>

        <Stack spaceInline="space050">
          <LabelFlag>Vertical</LabelFlag>
          <ShareBar
            vertical
            label="Share"
            role="region"
            aria-label="share bar with vertical items and label"
          >
            {[
              ['Faceook', <IconFilledFacebook />],
              ['Twitter', <IconFilledTwitter />],
              ['Instagram', <IconFilledInstagram />],
              ['AddCircle', <IconFilledAddCircle />],
            ].map(([name, icon]) => (
              <IconButton
                aria-label={`Share on ${name}`}
                overrides={{stylePreset: 'iconButtonMinimalPrimary'}}
                key={name as string}
              >
                {icon}
              </IconButton>
            ))}
          </ShareBar>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Slider',
    component: () => (
      <Stack
        spaceInline="space110"
        flow="horizontal-top"
        spaceStack="space060"
        wrap="wrap"
      >
        <Stack spaceInline="space050">
          <LabelFlag key="label-flag">With Labels</LabelFlag>
          <Container key="container">
            <StatefulSlider
              values={[50]}
              max={100}
              min={0}
              minLabel="Label"
              maxLabel="Label"
            />
          </Container>
        </Stack>

        <Stack spaceInline="space050">
          <LabelFlag key="label-flag">Without labels</LabelFlag>
          <Container key="container">
            <StatefulSlider values={[50]} max={100} min={0} />
          </Container>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Structured List',
    component: () => (
      <StructuredList ariaLabel="list">
        {listItemWithThreeCells}
        {listItemWithThreeCells}
        {listItemWithThreeCells}
      </StructuredList>
    ),
  },
  {
    name: 'Tabs',
    component: () => (
      <Stack
        spaceInline="space110"
        flow="horizontal-top"
        spaceStack="space060"
        wrap="wrap"
      >
        <Stack spaceInline="space050">
          <LabelFlag>Horizontal</LabelFlag>
          <Container>
            <Tabs divider distribution={TabsDistribution.Equal}>
              <Tab label="Tab 1">
                <P>Lorem ipsum</P>
              </Tab>
              <Tab label="Tab 2">
                <P>Consectetur adipiscing</P>
              </Tab>
              <Tab label="Tab 3">
                <P>Magna</P>
              </Tab>
            </Tabs>
          </Container>
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Vertical</LabelFlag>
          <Container height="400px">
            <Tabs vertical divider distribution={TabsDistribution.Equal}>
              <Tab label="Tab 1">
                <P>Lorem ipsum</P>
              </Tab>
              <Tab label="Tab 2">
                <P>Consectetur adipiscing</P>
              </Tab>
              <Tab label="Tab 3">
                <P>Magna</P>
              </Tab>
            </Tabs>
          </Container>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Tag',
    component: () => (
      <Stack
        spaceInline="space110"
        flow="horizontal-top"
        spaceStack="space060"
        wrap="wrap"
      >
        <Stack spaceInline="space050">
          <LabelFlag>Default</LabelFlag>
          <Tag href="http://example.com">Tag</Tag>
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Disabled</LabelFlag>
          <Tag href="http://example.com" disabled>
            Disabled
          </Tag>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Text Block',
    component: () => (
      <Container border>
        <TextBlock stylePreset="inkSubtle">
          Telling the stories that matter, seeding ideas and stirring emotion.
          Capturing moments, meaning and magic. Making sense of the world. On
          the shoulders of giants, in the thick of it, behind the scenes and
          fighting the good fight.
        </TextBlock>
      </Container>
    ),
  },
  {
    name: 'Text Field',
    component: () => (
      <Grid>
        {textFieldStates.map(([id, {state}]) => (
          <Cell xs={12} sm={6} key={`${id}-textField`}>
            <Block spaceStack="space050">
              <LabelFlag>{id}</LabelFlag>
            </Block>
            <Label htmlFor={id}>Label</Label>
            <TextField
              state={state}
              aria-describedby={`${id}-at`}
              id={id}
              placeholder="Enter your username"
            />
          </Cell>
        ))}
      </Grid>
    ),
  },
  {
    name: 'Title Bar',
    component: () => (
      <>
        <Block spaceStack="space090">
          <Block spaceStack="space050">
            <LabelFlag>Default</LabelFlag>
          </Block>
          <TitleBar>Title bar</TitleBar>
        </Block>
        <Block>
          <Block spaceStack="space050">
            <LabelFlag>With Standalone Link</LabelFlag>
          </Block>
          <Container width="80%">
            <TitleBar
              actionItem={() => (
                <LinkStandalone href="/">Standalone Link</LinkStandalone>
              )}
            >
              Title Bar
            </TitleBar>
          </Container>
        </Block>
      </>
    ),
  },
  {
    name: 'Toast',
    component: ({stylePreset}) => (
      <Stack spaceInline="space070" key={`${stylePreset}-toast`}>
        <Stack spaceInline="space050">
          <LabelFlag key="label-flag">
            {returnLastLetterInCamelCase(stylePreset as string)}
          </LabelFlag>
          <Toast
            overrides={{stylePreset, maxWidth: '100%'}}
            key="toast"
            actions={() => (
              <Button
                size="small"
                overrides={{stylePreset: 'buttonMinimalInverse'}}
              >
                Undo
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
            Here goes a brief line or two describing the toast information.
          </Toast>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'Tooltip',
    component: () => (
      <Stack spaceInline="space110" flow="horizontal-top">
        <Stack spaceInline="space050">
          <LabelFlag>With Icon Button Right Placement</LabelFlag>
          <Tooltip
            content="Share"
            asLabel
            placement="right"
            trigger={['focus', 'hover']}
          >
            <IconButton
              size="small"
              overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
            >
              <IconFilledTwitter />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>With Inline Link Bottom Placement</LabelFlag>

          <Tooltip
            content="Lorem ipsum dolor sit amet"
            placement="bottom"
            trigger={['focus', 'hover']}
          >
            <LinkInline href="/">Inline link</LinkInline>
          </Tooltip>
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>With Button Top Placement</LabelFlag>

          <Tooltip
            content="Lorem ipsum dolor sit amet"
            placement="top"
            trigger={['focus', 'hover']}
          >
            <Button
              size="small"
              overrides={{stylePreset: 'buttonOutlinedPrimary'}}
            >
              Button
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
    ),
  },
  {
    name: 'UnorderedList',
    component: () => (
      <Stack spaceInline="space110" flow="horizontal-top">
        <Stack spaceInline="space050">
          <LabelFlag>Horizontal</LabelFlag>
          <UnorderedList listItemMarker={IconFilledAddCircle}>
            {listData}
          </UnorderedList>
        </Stack>
        <Stack spaceInline="space050">
          <LabelFlag>Without marker</LabelFlag>
          <UnorderedList>{listData}</UnorderedList>
        </Stack>
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
            spaceInline="space110"
            flow="horizontal-top"
            spaceStack="space060"
            wrap="wrap"
          >
            <Stack spaceInline="space050">
              <LabelFlag>Horizontal</LabelFlag>
              <Container>
                <VolumeControl
                  volume={stateVolume}
                  onChange={
                    /* istanbul ignore next */ newValues => {
                      /* istanbul ignore next */
                      setVolume(newValues);
                    }
                  }
                />
              </Container>
            </Stack>
            <Stack spaceInline="space050">
              <LabelFlag>Vertical</LabelFlag>
              <Container height="300px">
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
              </Container>
            </Stack>
          </Stack>
        );
      }),
  },
];
