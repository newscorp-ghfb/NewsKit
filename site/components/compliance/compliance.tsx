import React from 'react';
import {TextBlock} from 'newskit/text-block';
import {Headline} from 'newskit/headline';
import {Block} from 'newskit/block';
import {
  Cell,
  IconFilledCheckCircle,
  Grid,
  IconFilledRemoveCircle,
  IconFilledCancel,
} from 'newskit';
import {ComplianceProps, ComplianceElementProps} from './types';

export const complianceContent: Record<
  keyof ComplianceProps,
  ComplianceElementProps
> = {
  interactive: {
    title: 'All interactive states',
    summary:
      'Includes all interactive states that are applicable (hover, down, focus, keyboard focus, disabled, error etc).',
  },
  variations: {
    title: 'Variations',
    summary: 'Includes relevant options (style, size, orientation etc.)',
  },
  themes: {
    title: 'Themes',
    summary: 'Works properly across all light and dark themes.',
  },
  usage: {
    title: 'Usage guidelines',
    summary:
      'Includes a list of dos and don’ts that highlight best practices and common mistakes.',
  },
  accessibility: {
    title: 'Accessibility guidelines',
    summary:
      'Follows WCAG 2.0 standards for contrast (AA). Accessibility documentation defined.',
  },
  seo: {
    title: 'SEO guidelines',
    summary:
      'Conforms to best practice SEO techniques. SEO considerations defined.',
  },
  performance: {
    title: 'Technical Performance Considerations',
    summary: 'Includes details on how this may impact performance.',
  },
  design: {
    title: 'Design Specifications',
    summary:
      'Detailed design specification including sizing, spacing and design tokens defined.',
  },
  props: {
    title: 'Component Props',
    summary:
      'Details of properties - their name, type, options, default, required and their description have been defined.',
  },
  available: {
    title: 'Available in UI kit',
    summary:
      'Included within NewsKit UI with multiple variations (including skeleton), states, colour (base and inverse),  and responsive (smart layout).',
  },
};

const renderComplianceItems = (complianceRules: ComplianceProps) =>
  Object.entries(complianceContent).map(compliance => {
    const [complianceKey, {title, summary}] = compliance;

    let complianceIcon = (
      <IconFilledRemoveCircle
        overrides={{
          size: 'iconSize030',
          stylePreset: 'inkSubtle',
        }}
      />
    );
    if (complianceRules[complianceKey as keyof ComplianceProps] === true) {
      complianceIcon = (
        <IconFilledCheckCircle
          overrides={{
            size: 'iconSize030',
            stylePreset: 'inkPositive',
          }}
        />
      );
    } else if (
      complianceRules[complianceKey as keyof ComplianceProps] === false
    ) {
      complianceIcon = (
        <IconFilledCancel
          overrides={{
            size: 'iconSize030',
            stylePreset: 'inkNegative',
          }}
        />
      );
    }

    return (
      <Cell xs={12} lg={6} xl={5}>
        <Block spaceStack="space040">{complianceIcon}</Block>
        <Block spaceStack="space050">
          <Headline
            headingAs="h3"
            overrides={{
              typographyPreset: 'editorialHeadline010',
              heading: {stylePreset: 'inkContrast'},
            }}
          >
            {title}
          </Headline>
        </Block>
        <TextBlock
          typographyPreset="editorialParagraph020"
          stylePreset="inkBase"
        >
          {summary}
        </TextBlock>
      </Cell>
    );
  });

export const Compliance = (props: ComplianceProps) => (
  <Cell mdOffset={1} xs={8}>
    <Grid
      xsMargin="space000"
      xsRowGutter="space080"
      lgRowGutter="space070"
      xsColumnGutter="space100"
    >
      {renderComplianceItems(props)}
    </Grid>
  </Cell>
);
