import {Block, Cell, Grid, H3, TabSize} from 'newskit';
import React from 'react';
import {parseEnumValues} from '../utils/parse-enum-values';
import Layout from '../components/layout';
import {Table} from '../components/table';
import {Mono} from '../components/flags';

const H: React.FC = ({children}) => (
  <>
    <Block spaceStack="space090" />
    <Block spaceStack="space040">
      <H3>{children}</H3>
    </Block>
  </>
);

const Page: React.FC<{
  toggleTheme: () => void;
  themeMode: string;
}> = ({toggleTheme, themeMode}) => (
  <Layout toggleTheme={toggleTheme} themeMode={themeMode} path="/">
    <Grid>
      <Cell xs={12}>
        <H>Variant 1 - Accessibility</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Order', 'Element', 'Role']}
          rows={[
            {
              order: 1,
              element: 'Action item 1',
              role: (
                <>
                  Lorem ipsum <Mono>dolor</Mono> sit amet, consectetur
                  adipiscing elit. Curabitur ultricies laoreet finibus
                </>
              ),
            },
            {
              order: 2,
              element: 'Action item 2',
              role:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies laoreet finibus.',
            },
            {
              order: 3,
              element: 'Action item 3',
              role:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies laoreet finibus.',
            },
          ]}
        />
      </Cell>

      <Cell xs={12}>
        <H>Variant 2 - ARIA</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={[
            'Element',
            'Attribute',
            'Value',
            'Description',
            'User Supplied',
          ]}
          rows={[
            {
              element: 'Label',
              attribute: 'Ctrl',
              value: 'Ctrl',
              description: 'Lorem ipsum dolor sit amet',
              userSupplied: true,
            },
            {
              element: 'Label',
              attribute: 'Ctrl',
              value: 'Ctrl',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies laoreet finibus.',
              userSupplied: true,
            },
            {
              element: 'Label',
              attribute: 'Ctrl',
              value: 'Ctrl',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies laoreet finibus.',
              userSupplied: true,
            },
          ]}
        />
      </Cell>

      <Cell xs={12}>
        <H>Variant 3 - Anatomy</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Item', 'Name', 'Description', 'Component', 'Optional']}
          rows={[
            {
              item: 1,
              name: 'Label',
              description: 'Share Bar Label Name',
              component: 'Text Block',
              optional: true,
            },
            {
              item: 2,
              name: 'Items',
              description: 'Share Bar Label Name',
              component: 'Button',
              optional: false,
            },
            {
              item: 3,
              name: 'Container',
              description: 'Share bar container',
              component: 'Stack',
              optional: null,
            },
          ]}
        />
      </Cell>

      <Cell xs={12}>
        <H>Variant 4 - Change Log</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Date', 'Release Version', 'Notes']}
          rows={[
            {
              date: '12th March 2020',
              releaseVersion: '1.0.1',
              notes: 'Notes go here',
            },
            {
              date: '30th September 2020',
              releaseVersion: '1.0.2',
              notes: 'Notes go here',
            },
            {
              date: '25th December 2020',
              releaseVersion: '2.0.0',
              notes: 'Notes go here',
            },
          ]}
        />
      </Cell>

      <Cell xs={12}>
        <H>Variant 5 - Compliance</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Feature', 'Status']}
          rows={[
            {
              feature: 'Feature',
              status: true,
            },
            {
              feature: 'Feature',
              status: null,
            },
            {
              feature: 'Feature',
              status: false,
            },
          ]}
        />
      </Cell>

      <Cell xs={12}>
        <H>Variant 6 - Focus order</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Order', 'Element', 'Role']}
          rows={[
            {
              order: 1,
              element: 'Text',
              role: 'Text',
            },
            {
              order: 2,
              element: 'Text',
              role: 'Text',
            },
            {
              order: 3,
              element: 'Text',
              role: 'Text',
            },
          ]}
        />
      </Cell>

      <Cell xs={12}>
        <H>Variant 7 - Keyboard interactions</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Command', 'Description']}
          rows={[
            {
              command: ['Rtn', 'Ctrl'],
              description: 'Text',
            },
            {
              command: ['Backspace', 'Down'],
              description: 'Text',
            },
            {
              command: ['Left', 'Right'],
              description: 'Text',
            },
            {
              command: ['Space', 'Tab', 'Up'],
              description: 'Text',
            },
          ]}
        />
      </Cell>

      <Cell xs={12}>
        <H>Variant 8 - Overrides</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Attribute', 'Type', 'Default', 'Description']}
          rows={[
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'buttonSolidPrimary',
              description:
                'If provided, this overrides the style preset applied to the underlying button',
            },
            {
              attribute: 'button.stylePreset',
              type: 'MQ<string>',
              default: 'buttonSolidPrimary',
              description:
                'If provided, this overrides the style preset applied to the underlying button',
            },
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: [
                `small: 'sizing060'`,
                `medium: 'sizing080'`,
                `large: 'sizing090'`,
              ],
              description:
                'If provided, this overrides the style preset applied to the underlying button',
            },
            {
              attribute: 'headline.nonInteractive.typographyPreset',
              type: 'MQ<string>',
              default: [
                `xs: 'editorialHeadline020'`,
                `sm: 'editorialHeadline020'`,
                `md: 'editorialHeadline030'`,
                `lg: 'editorialHeadline050'`,
              ],

              description:
                'If provided, this overrides the style preset applied to the underlying button',
            },
            {
              attribute: 'seekBar.slider.track.stylePreset',
              type: 'MQ<string>',
              default: 'audioPlayerSeekBarTrack',
              description:
                'If provided, this overrides the style preset applied to the underlying button',
            },
          ]}
        />
      </Cell>

      <Cell xs={12}>
        <H>Variant 9 - Props</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Name', 'Type', 'Default', 'Description', 'Required']}
          rows={[
            {
              name: 'prop1',
              type: 'string',
              default: 'prop1 value',
              description:
                'If provided, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              required: true,
            },
            {
              name: 'prop2',
              type: 'number',
              description:
                'If provided, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              required: false,
            },
            {
              name: 'size',
              type: parseEnumValues(TabSize),
              description:
                'If provided, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
          ]}
        />
      </Cell>
      <Cell xs={12}>
        <H>Variant 10 - Color Swatches</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Colour', 'Colour token', 'Token value', 'Common uses']}
          rows={[
            {
              colour: 'inkBase',
              colourToken: 'inkBase',
              tokenValue: 'neutral080',
              commonUses: 'Body copy',
            },
            {
              colour: 'inkContrast',
              colourToken: 'inkContrast',
              tokenValue: 'neutral100',
              commonUses: 'Headline',
            },
            {
              colour: 'inkSubtle',
              colourToken: 'inkSubtle',
              tokenValue: 'neutral070',
              commonUses: 'Subheadlines, labels, secondary copy',
            },
            {
              colour: 'inkNonEssential',
              colourToken: 'inkNonEssential',
              tokenValue: 'neutral040',
              commonUses: 'Subheadlines, labels, secondary copy',
            },
            {
              colour: 'interface040',
              colourToken: 'interface040',
              tokenValue: 'neutral030',
              commonUses: 'Borders & keylines',
            },
            {
              colour: 'interactivePrimary040',
              colourToken: 'interactivePrimary040',
              tokenValue: 'blue060',
              commonUses: 'Hover state',
            },
            {
              colour: 'interactivePrimary030',
              colourToken: 'interactivePrimary030',
              tokenValue: 'blue040',
              commonUses: 'Base/Resting state for interactive elements',
            },
          ]}
        />
      </Cell>
      <Cell xs={12}>
        <H>Variant 11 - Border Radius</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Border radius', 'Token', 'Token value']}
          rows={[
            {
              borderRadius: 'borderRadiusRounded020',
              token: 'borderRadiusDefault',
              tokenValue: 'sizing020',
            },
            {
              borderRadius: 'borderRadiusSharp',
              token: 'borderRadiusSharp',
              tokenValue: 'sizing000',
            },
            {
              borderRadius: 'borderRadiusCircle',
              token: 'borderRadiusCircle',
              tokenValue: '50%',
            },
            {
              borderRadius: 'borderRadiusRounded010',
              token: 'borderRadiusRounded010',
              tokenValue: 'sizing010',
            },
            {
              borderRadius: 'borderRadiusRounded050',
              token: 'borderRadiusRounded050',
              tokenValue: 'sizing050',
            },
          ]}
        />
      </Cell>
      <Cell xs={12}>
        <H>Variant 12 - Border Width</H>
      </Cell>
      <Cell xs="full-width" md={12}>
        <Table
          columns={['Border width', 'Token', 'Token value']}
          rows={[
            {
              borderWidth: 'borderWidthDefault',
              token: 'borderWidthDefault',
              tokenValue: '1px',
            },
            {
              borderWidth: 'borderWidth000',
              token: 'borderWidth000',
              tokenValue: '0px',
            },
            {
              borderWidth: 'borderWidth020',
              token: 'borderWidth020',
              tokenValue: '2px',
            },
            {
              borderWidth: 'borderWidth030',
              token: 'borderWidth030',
              tokenValue: '4px',
            },
          ]}
        />
      </Cell>
    </Grid>
  </Layout>
);

export default Page;
