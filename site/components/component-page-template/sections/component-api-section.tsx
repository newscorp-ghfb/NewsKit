import React from 'react';
import {CommonSection} from './common-section';
import {ComponentAPI, ComponentAPIProps} from '../../component-api';
import {IntroductionText} from './types';

export type ComponentAPISectionProps = ComponentAPIProps & IntroductionText;

export const ComponentAPISection: React.FC<ComponentAPISectionProps> = ({
  introduction,
  ...componentAPI
}) => (
  <CommonSection title="API" id="component-api" introduction={introduction}>
    <ComponentAPI {...componentAPI} />
  </CommonSection>
);
