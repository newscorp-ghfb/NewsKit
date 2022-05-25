import {TextBlock} from '../text-block';
import {
  getResponsiveSize,
  getStylePreset,
  getTypographyPreset,
  styled,
} from '../utils';
import {logicalProps} from '../utils/logical-properties';
import {AccordionProps} from './types';

export const StyledAccodionContainer = styled.div``;

export const StyledHeader = styled.button`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  ${getResponsiveSize('minWidth', '', '', 'minWidth')};
  ${getResponsiveSize('minHeight', '', '', 'minHeight')};
  ${getStylePreset('accordion.header', 'header')};
  ${getTypographyPreset('accordion.header', 'header')}
  ${logicalProps('accordion.header')}
`;

export const StyledHeaderWrapper = styled(TextBlock)<
  Pick<AccordionProps, 'overrides'>
>``;

export const StyledPanel = styled.div``;
