import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {Compliance} from '../../compliance';
import {Separator} from '../../separator';
// import {StyledSection} from './styled';
import {ComplianceSectionProps} from './types';
import {ComponentPageCell} from '../../layout-cells';

export const ComplianceSection: React.FC<ComplianceSectionProps> = ({
  ...compliance
}) => (
  <>
    {/* TODO: add StyledSection and index in TOC */}
    <SectionIntroduction title="Compliance">
      All of the components in the NewsKit design system go through a
      comprehensive set of checks to ensure that we are producing compliant and
      best practice components.
    </SectionIntroduction>
    <Compliance {...compliance} />
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
