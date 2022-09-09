import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTransitionPreset,
  getTypographyPreset,
  styled,
} from '../utils';
import {logicalProps} from '../utils/logical-properties';
import {AccordionProps} from './types';

export const StyledAccordionButton = styled.button<
  Pick<AccordionProps, 'overrides' | 'disabled'>
>`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'pointer')};
  & > :not(:last-of-type) {
    ${getResponsiveSpace(
      'marginRight',
      'accordion.header',
      'header',
      'spaceInline',
    )}
  }
  ${getResponsiveSize('minWidth', 'accordion.header', 'header', 'minWidth')};
  ${getResponsiveSize('minHeight', 'accordion.header', 'header', 'minHeight')};
  ${({disabled}) =>
    getStylePreset('accordion.header', 'header', {
      isDisabled: disabled,
    })};
  ${getTypographyPreset('accordion.header', 'header')}
  ${logicalProps('accordion.header', 'header')}
  ${getTransitionPreset('accordion.header', 'header')}
`;

export const StyledHeader = styled.div`
  text-align: start;
  flex: 1;
`;

export const StyledLabel = styled.div<Pick<AccordionProps, 'overrides'>>`
  ${getTypographyPreset('accordion.header.label', 'header.label')}
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const StyledPanelTransitionContainer = styled.div<
  Pick<AccordionProps, 'overrides' | 'expanded'>
>`
  overflow: hidden;
  ${getTransitionPreset('accordion.panel', 'panel', 'nk-accordion')}
`;

export const StyledPanel = styled.div<
  Pick<AccordionProps, 'overrides' | 'expanded'>
>`
  ${getStylePreset('accordion.panel', 'panel')};
  ${logicalProps('accordion.panel', 'panel')}
`;
