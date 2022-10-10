import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {TextField, TextFieldSize} from '..';
import {Block} from '../../block';
import {Button} from '../../button';
import {Cell, Grid} from '../../grid';
import {IconButton} from '../../icon-button';
import {
  IconFilledAccountBalance,
  IconFilledAccountTree,
  IconFilledClose,
  IconFilledSearch,
} from '../../icons';
import {Stack} from '../../stack';
import {
  StorybookHeading,
  StorybookSubHeading,
  StorybookParah,
} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {
  styled,
  getSizingCssFromTheme,
  getColorCssFromTheme,
} from '../../utils/style';
import {Label} from '../../label';
import {AssistiveText} from '../../assistive-text';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const CustomBlock = styled.div`
  margin-right: 12px;
`;
const Container = styled.div`
  ${getSizingCssFromTheme('margin', 'sizing080')};
`;

const textFieldCustomThemeObject: CreateThemeArgs = {
  name: 'text-input-custom-theme',
  overrides: {
    stylePresets: {
      inputContainerCustom: {
        base: {
          borderStyle: 'solid',
          borderColor: '#D20600',
          placeholderColor: 'blue',
        },
      },
      labelOverrides: {
        base: {
          color: '#0ed200',
        },
      },
      assistiveTextOverrides: {
        base: {
          color: '#0ed200',
        },
      },
      customOutlineColor: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBase}}',
          textOverflow: 'ellipsis',
          placeholderColor: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBase}}',
          textOverflow: 'ellipsis',
          placeholderColor: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
        },
      },
      customOutlineWidth: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBase}}',
          textOverflow: 'ellipsis',
          placeholderColor: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
        },
      },
      customOutlineOffset: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidthDefault}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBase}}',
          textOverflow: 'ellipsis',
          placeholderColor: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkBase}}',
        },
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '5px',
        },
      },
    },
  },
};

export const TextFieldSizeExamples = () => (
  <>
    <StorybookHeading>Text Field Sizes</StorybookHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space070"
        spaceStack="space050"
        wrap="wrap"
      >
        <Block>
          {[
            {id: 'id-29', size: 'small'},
            {id: 'id-30', size: 'medium'},
            {id: 'id-31', size: 'large'},
          ].map(({id, size}) => (
            <Block>
              <Grid>
                <Cell xs={12}>
                  <StorybookSubHeading>{size}</StorybookSubHeading>
                  <Label htmlFor={id} size={size as TextFieldSize}>
                    A Label
                  </Label>
                  <TextField
                    aria-describedby={`${id}-at`}
                    id={id}
                    size={size as TextFieldSize}
                  />
                  <AssistiveText id={`${id}-at`} size={size as TextFieldSize}>
                    Assistive Text Goes Here
                  </AssistiveText>
                </Cell>
              </Grid>
            </Block>
          ))}
        </Block>
      </Stack>
    </Container>
  </>
);
export const TextFieldBasics = () => (
  <>
    <StorybookHeading>Text field states</StorybookHeading>

    <Grid>
      <Cell xs={4}>
        <CustomBlock data-state="Default">
          <StorybookSubHeading>Default</StorybookSubHeading>
          <Label htmlFor="id-2">Label </Label>
          <TextField aria-describedby="id-2-at" id="id-2" />

          <AssistiveText id="id-2-at">Assistive Text</AssistiveText>
        </CustomBlock>
      </Cell>
      <Cell xs={4}>
        <CustomBlock>
          <StorybookSubHeading>Valid</StorybookSubHeading>
          <Label htmlFor="id-3">Label </Label>
          <TextField state="valid" aria-describedby="id-3-at" id="id-3" />

          <AssistiveText state="valid" id="id-3-at">
            Assistive Text
          </AssistiveText>
        </CustomBlock>
      </Cell>

      <Cell xs={4}>
        <CustomBlock>
          <StorybookSubHeading>Invalid</StorybookSubHeading>
          <Label htmlFor="id-33">Label </Label>
          <TextField state="invalid" aria-describedby="id-33-at" id="id-33" />

          <AssistiveText state="invalid" id="id-33-at">
            Assistive Text
          </AssistiveText>
        </CustomBlock>
      </Cell>

      <Cell xs={4}>
        <CustomBlock>
          <StorybookSubHeading>Disabled</StorybookSubHeading>
          <Label state="disabled" htmlFor="id-4">
            Label
          </Label>
          <TextField state="disabled" aria-describedby="id-4-at" id="id-4" />
          <AssistiveText state="disabled" id="id-4-at">
            Assistive Text
          </AssistiveText>
        </CustomBlock>
      </Cell>
      <Cell xs={4}>
        <CustomBlock data-state="Focus">
          <StorybookSubHeading>Auto Focus</StorybookSubHeading>
          <Label htmlFor="id-5">Label</Label>
          <TextField autoFocus aria-describedby="id-5-at" id="id-5" />
          <AssistiveText id="id-5-at">Assistive Text</AssistiveText>
        </CustomBlock>
      </Cell>
      <Cell xs={4}>
        <CustomBlock data-state="Read-Only">
          <StorybookSubHeading>Read Only</StorybookSubHeading>
          <Label htmlFor="id-6">Label </Label>
          <TextField readOnly aria-describedby="id-6-at" id="id-6" />
          <AssistiveText id="id-6-at">Assistive Text</AssistiveText>
        </CustomBlock>
      </Cell>
    </Grid>
  </>
);
export const TextFieldWithOverrides = () => (
  <>
    <StorybookHeading>Text With Overrides</StorybookHeading>
    <Container>
      <Label
        htmlFor="id-7"
        overrides={{
          stylePreset: 'labelOverrides',
        }}
      >
        Label
      </Label>
      <TextField
        aria-describedby="id-7-at"
        id="id-7"
        placeholder="Placeholder"
        overrides={{
          stylePreset: 'inputContainerCustom',
          typographyPreset: 'utilityBody030',
          spaceInset: 'spaceInset040',
          minHeight: 'sizing090',
          spaceStack: 'space000',
        }}
      />
      <Block spaceStack="space020" />
      <AssistiveText
        id="id-7-at"
        overrides={{
          stylePreset: 'assistiveTextOverrides',
        }}
      >
        Assistive Text
      </AssistiveText>
    </Container>
  </>
);

export const TextFieldLogicalProps = () => (
  <>
    <StorybookHeading>Text With Logical Props overrides</StorybookHeading>
    <StorybookSubHeading>
      Inspect the box for better understanding
    </StorybookSubHeading>
    <Container>
      <Label htmlFor="id-14" overrides={{stylePreset: 'labelOverrides'}}>
        Label
      </Label>
      <TextField
        aria-describedby="id-14-at"
        id="id-14"
        placeholder="marginInline & marginBlock"
        overrides={{
          marginBlock: 'space060',
          marginInline: 'space080',
        }}
      />
      <Block spaceStack="space080" />
      <Label htmlFor="id-15" overrides={{stylePreset: 'labelOverrides'}}>
        Label
      </Label>
      <TextField
        aria-describedby="id-15-at"
        id="id-15"
        placeholder="paddingInline & paddingBlock"
        overrides={{
          paddingBlock: 'space060',
          paddingInline: 'space080',
        }}
      />
      <Block spaceStack="space080" />
      <Label htmlFor="id-16" overrides={{stylePreset: 'labelOverrides'}}>
        Label
      </Label>
      <TextField
        aria-describedby="id-16-at"
        id="id-16"
        placeholder="marginInline & marginBlock & paddingInline & paddingBlock"
        overrides={{
          marginBlock: 'space060',
          marginInline: 'space080',
          paddingBlock: 'space060',
          paddingInline: 'space080',
        }}
      />
    </Container>
  </>
);

export const TextFieldIcons = () => (
  <>
    <Container>
      <StorybookSubHeading>
        With Icons and Icon placement overrides
      </StorybookSubHeading>
      <Label htmlFor="id-8"> Icons</Label>
      <TextField
        aria-describedby="id-8-at"
        id="id-8"
        startEnhancer={
          <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
        }
        endEnhancer={
          <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
        }
        overrides={{
          startEnhancer: {
            spaceInline: 'space050',
          },
          endEnhancer: {
            spaceInline: 'space050',
          },
        }}
      />

      <AssistiveText id="id-8-at">Assistive Text</AssistiveText>
    </Container>
    <Container>
      <StorybookSubHeading>
        With Two Icons and IconSize overrides
      </StorybookSubHeading>
      <Label htmlFor="id-9">Icons</Label>
      <TextField
        aria-describedby="id-9-at"
        id="id-9"
        startEnhancer={
          <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
        }
        endEnhancer={
          <>
            <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
            <Block spaceInline="space020" />
            <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
          </>
        }
      />
      <AssistiveText id="id-9-at">Assistive Text</AssistiveText>
    </Container>
  </>
);
export const TextFieldAddOn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const Select = styled.select`
    border: none;
    height: 100%;
    background: none;
    appearance: none;
    width: 40px;
    ${getColorCssFromTheme('color', 'inkBase')};
  `;

  const DropDown = () => (
    <Select>
      <option value="bg">BG</option>
      <option value="uk">UK</option>
      <option value="usa">USA</option>
      <option value="de">DE</option>
      <option value="de">NL</option>
    </Select>
  );

  const MyButton = styled.button`
    background: none;
    border: none;
    padding: 0;
  `;

  const blockSpaceStack = '42px';

  return (
    <>
      <StorybookHeading>Text Field With Addons</StorybookHeading>
      <Container>
        <StorybookSubHeading>Text Field with Drop Down</StorybookSubHeading>
        <Block spaceStack={blockSpaceStack}>
          <Label htmlFor="id-10">
            Label
            <TextField
              aria-describedby="id-10-at"
              id="id-10"
              name="dropdown"
              startEnhancer={<DropDown />}
              overrides={{
                startEnhancer: {
                  spaceInline: 'space040',
                },
                endEnhancer: {
                  spaceInline: 'space040',
                },
              }}
            />
          </Label>
          <AssistiveText
            id="id-10-at"
            overrides={{
              typographyPreset: 'utilityLabel030',
            }}
          >
            Assistive Text Goes Here
          </AssistiveText>
        </Block>
        <StorybookSubHeading>Text Field with Icon Button</StorybookSubHeading>
        <Block spaceStack={blockSpaceStack}>
          <Label htmlFor="id-11">Label</Label>
          <TextField
            aria-describedby="id-11-at"
            id="id-11"
            type={!showPassword ? 'password' : 'text'}
            endEnhancer={
              <IconButton
                aria-label="toggle password"
                onClick={() => setShowPassword(!showPassword)}
                size="small"
                overrides={{stylePreset: 'iconButtonSolidInverse'}}
              >
                {showPassword ? (
                  <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
                ) : (
                  <IconFilledAccountTree overrides={{size: 'iconSize020'}} />
                )}
              </IconButton>
            }
          />
        </Block>
        <Block spaceStack={blockSpaceStack}>
          <StorybookSubHeading>Text Field with two icons</StorybookSubHeading>
          <StorybookParah>
            Please type inside the text field to see second icons
          </StorybookParah>
          <Label htmlFor="id-12">Label</Label>
          <TextField
            aria-describedby="id-12-at"
            id="id-12"
            name="icon"
            startEnhancer={
              <IconFilledSearch overrides={{size: 'iconSize020'}} />
            }
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            endEnhancer={
              searchText && (
                <MyButton onClick={() => setSearchText('')}>
                  <IconFilledClose overrides={{size: 'iconSize010'}} />
                </MyButton>
              )
            }
          />
          <AssistiveText id="id-12-at">Assistive Text Goes Here</AssistiveText>
        </Block>
        <Block spaceStack={blockSpaceStack}>
          <Label htmlFor="id-13">Label</Label>

          <TextField
            aria-describedby="id-13-at"
            id="id-13"
            startEnhancer={
              <IconFilledSearch overrides={{size: 'iconSize020'}} />
            }
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            endEnhancer={
              searchText && (
                <Button size="small" onClick={() => setSearchText('')}>
                  Clear
                </Button>
              )
            }
          />
          <AssistiveText id="id-13-at">Assistive Text Goes Here</AssistiveText>
        </Block>
      </Container>
    </>
  );
};

export const TextFieldOutlineOverrideExamples = () => (
  <>
    <StorybookHeading>Outline override</StorybookHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space070"
        spaceStack="space050"
        wrap="wrap"
      >
        <Block>
          <Block>
            <Grid>
              <Cell xs={12}>
                <StorybookSubHeading>Custom Color</StorybookSubHeading>
                <Label htmlFor="id-outline-1" size="small">
                  A Label
                </Label>
                <TextField
                  aria-describedby="id-outline-1-at"
                  id="id-outline-1"
                  size="small"
                  overrides={{
                    stylePreset: 'customOutlineColor',
                  }}
                />
                <AssistiveText id="id-outline-1-at" size="small">
                  Assistive Text Goes Here
                </AssistiveText>
              </Cell>
            </Grid>
          </Block>
          <Block>
            <Grid>
              <Cell xs={12}>
                <StorybookSubHeading>Custom Style</StorybookSubHeading>
                <Label htmlFor="id-outline-2" size="small">
                  A Label
                </Label>
                <TextField
                  aria-describedby="id-2-at"
                  id="id-outline-2"
                  size="small"
                  overrides={{
                    stylePreset: 'customOutlineStyle',
                  }}
                />
                <AssistiveText id="id-outline-2-at" size="small">
                  Assistive Text Goes Here
                </AssistiveText>
              </Cell>
            </Grid>
          </Block>
          <Block>
            <Grid>
              <Cell xs={12}>
                <StorybookSubHeading>Custom Width</StorybookSubHeading>
                <Label htmlFor="id-outline-3" size="small">
                  A Label
                </Label>
                <TextField
                  aria-describedby="id-outline-3-at"
                  id="id-outline-3"
                  size="small"
                  overrides={{
                    stylePreset: 'customOutlineWidth',
                  }}
                />
                <AssistiveText id="id-outline-3-at" size="small">
                  Assistive Text Goes Here
                </AssistiveText>
              </Cell>
            </Grid>
          </Block>
          <Block>
            <Grid>
              <Cell xs={12}>
                <StorybookSubHeading>Custom Offset</StorybookSubHeading>
                <Label htmlFor="id-outline-4" size="small">
                  A Label
                </Label>
                <TextField
                  aria-describedby="id-outline-4-at"
                  id="id-outline-4"
                  size="small"
                  overrides={{
                    stylePreset: 'customOutlineOffset',
                  }}
                />
                <AssistiveText id="id-outline-4-at" size="small">
                  Assistive Text Goes Here
                </AssistiveText>
              </Cell>
            </Grid>
          </Block>
        </Block>
      </Stack>
    </Container>
  </>
);

export default {
  title: 'Components/text-field',
  component: () => 'None',
  disabledRules: ['color-contrast'],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          textFieldCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
