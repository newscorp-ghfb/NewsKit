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
    </Grid>
  </Layout>
);

export default Page;
