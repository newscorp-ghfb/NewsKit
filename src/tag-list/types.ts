import {TagProps} from '../tag';
import {SizingKeys} from '../themes';

export interface TagData extends Pick<TagProps, 'href'> {
  label: React.ReactNode;
}

export enum TagListLayout {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export interface TagListProps extends Pick<TagProps, '$size' | '$stylePreset'> {
  tagData: TagData[];
  $layout?: TagListLayout;
  $spacing?: SizingKeys;
}
