import {TextBlock} from '../text-block';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTypographyPreset,
  styled,
} from '../utils';
import {logicalProps} from '../utils/logical-properties';
import {AccordionProps} from './types';

export const StyledAccodionContainer = styled.div<AccordionProps>``;

export const StyledHeaderWrapper = styled(TextBlock)``;

export const StyledAccordionButton = styled.button<
  Pick<AccordionProps, 'overrides' | 'disabled'>
>`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'default')};
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

export const StyledPanel = styled.div<
  Pick<AccordionProps, 'overrides' | 'expanded'>
>`
  display: ${({expanded}) => (expanded ? 'block' : 'none')};
  ${getStylePreset('accordion.panel', 'panel')};
  ${logicalProps('accordion.panel', 'panel')}
`;
