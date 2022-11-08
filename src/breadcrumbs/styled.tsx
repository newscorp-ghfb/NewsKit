import {getStylePreset, styled} from '../utils/style';
import {BreadcrumbsProps} from './types';
import {logicalProps} from '../utils/logical-properties';

export const StyledOrderdList = styled.ol<BreadcrumbsProps>`
  ${getStylePreset('breadcrumbs', '')};
  ${logicalProps()}
`;
