import {TextBlock} from '../text-block';
import {
  getResponsiveSize,
  getStylePreset,
  getTypographyPreset,
  styled,
} from '../utils';
import {AccordionProps} from './types';

export const StyledAccordionContainer = styled.div``;

export const StyledHeader = styled(TextBlock)<
  Pick<AccordionProps, 'overrides'>
>`
  ${getResponsiveSize('maxWidth', '', '', 'maxWidth')};
  ${getResponsiveSize('maxHeight', '', '', 'maxHeight')};
  ${getStylePreset('accordion.header', 'header')};
  ${getTypographyPreset('accordion.header', 'header')}
`;

// spaceInset: MQ<string>;
// spaceInline: MQ<string>;
// borderBottom?: MQ<string>;
// borderWidth?: MQ<string>;
