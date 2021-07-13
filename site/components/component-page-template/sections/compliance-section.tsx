import React from 'react';
import {Grid, Cell} from 'newskit';
import {SectionIntroduction} from '../../section-introduction';
import {Separator} from '../../separator';
import {ComponentPageCell} from '../../layout-cells';
import {StyledSection} from './styled';
import {Table} from '../../table';

const features = {
  variations: {
    title: 'Variations',
    description: 'Relevant variations (style, size, orientation etc.)',
  },
  states: {
    title: 'Interactive states',
    description:
      'All interactive states that are applicable (hover, active, focus, focus, disabled, error etc).',
  },
  behaviours: {
    title: 'Defined behaviours',
    description: 'Guidelines for layout, animation, interactions, etc.',
  },
  usage: {
    title: 'Usage guidelines',
    description:
      'Includes a list of dos and don’ts that highlight best practices and common mistakes to avoid.',
  },
  accessibility: {
    title: 'Accessibility guidelines',
    description:
      'Follows WCAG 2.0 standards (AA). Accessibility documentation defined including focus order, keyboard interactions and ARIA.',
  },
  seo: {
    title: 'SEO guidelines',
    description:
      'Conforms to best practice SEO techniques. SEO considerations defined.',
  },
  props: {
    title: 'Props',
    description:
      'Details of component properties - their name, type, options, default, whether it’s required and their description have been defined.',
  },
  performance: {
    title: 'Technical performance considerations',
    description: 'Details on how this component may impact performance.',
  },
  uiKit: {
    title: 'Available in UI kit',
    description: 'Included within Figma Web Gallery file.',
  },
  design: {
    title: 'Design specifications',
    description:
      'Detailed design specification including sizing, spacing and design tokens defined.',
  },
  themes: {
    title: 'Themes',
    description: 'Displays correctly across light and dark themes.',
  },
};

export type ComplianceFeatures = keyof typeof features;
export type ComplianceSectionProps = Partial<
  Record<ComplianceFeatures, boolean | null>
>;

const columns = Object.keys(features) as ComplianceFeatures[];

export const ComplianceSection: React.FC<ComplianceSectionProps> = props => (
  <>
    <StyledSection id="compliance" data-toc-indexed="Compliance">
      {/* TODO: this Grid can be removed when the Cell is removed from
        SectionIntroduction */}
      <Grid lgMargin="space000" xsRowGutter="space000">
        <SectionIntroduction
          title="Compliance"
          cellProps={{
            md: 10,
            lg: 10,
            mdOffset: 1,
          }}
        >
          All of the components in the NewsKit design system go through a
          comprehensive set of checks to ensure that we are producing compliant
          and best practice components.
        </SectionIntroduction>
        <ComponentPageCell>
          <Cell xs={12}>
            <Table
              columns={['Feature', 'Description', 'Status']}
              rows={columns.map(col => ({
                feature: features[col].title,
                description: features[col].description,
                status: props[col],
              }))}
            />
          </Cell>
        </ComponentPageCell>
      </Grid>
    </StyledSection>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
