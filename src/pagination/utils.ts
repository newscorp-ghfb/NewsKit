import {IconButtonProps} from '../button';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {get} from '../utils/get';
import { PaginationLayoutItem } from './types';

// TODO remove?
export const useButtonOverrides = (
  props: Pick<IconButtonProps, 'overrides'>,
  defaultsPath: string,
): IconButtonProps['overrides'] => {
  const theme = useTheme();
  const {overrides} = props;

  return {
    ...get(theme, `componentDefaults.${defaultsPath}`),
    ...filterOutFalsyProperties(overrides),
  };
};

export const getItemLayout = (

): [PaginationLayoutItem] => {
  const layout: [PaginationLayoutItem] = [];
  return layout;
};
