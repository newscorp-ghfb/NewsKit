import {Divider} from '../divider';
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

export const StyledAccodionContainer = styled.div``;

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
  ${getResponsiveSize('minWidth', '', '', 'minWidth')};
  ${getResponsiveSize('minHeight', '', '', 'minHeight')};
  ${getStylePreset('accordion.header', 'header')};
  ${getTypographyPreset('accordion.header', 'header')}
  ${logicalProps('accordion.header', 'header')}
`;

export const StyledEnhancer = styled.div<Pick<AccordionProps, 'overrides'>>`
  display: flex;
  align-self: center;
  ${getStylePreset('accordion.header.startEnhancer', 'header.startEnhancer')};
`;

export const StyledHeaderText = styled.div`
  display: flex;
  align-self: center;
  text-align: start;
  flex: 1;
`;

export const StyledIndicatorLabel = styled.div<
  Pick<AccordionProps, 'overrides'>
>`
  display: flex;
  align-self: center;
  ${getStylePreset('accordion.header.indicatorLabel', 'header.indicatorLabel')};
`;

export const StyledIndicatorIcon = styled.div<
  Pick<AccordionProps, 'overrides'>
>`
  display: flex;
  align-self: center;
  ${getStylePreset('accordion.header.indicatorIcon', 'header.indicatorIcon')};
`;

export const StyledDivider = styled(Divider)`
  ${getStylePreset('accordion.divider', 'divider')};
`;
export const StyledPanel = styled.div<Pick<AccordionProps, 'overrides'>>`
  ${getStylePreset('accordion.panel', 'panel')};
  ${logicalProps('accordion.panel', 'panel')}
`;
