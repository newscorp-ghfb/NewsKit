import {PopoverProps} from '../../../popover';
import {ModalProps} from '../../../modal';
import {
  SelectionListOptionProps,
  SelectionListProps,
} from '../../../selection-list';
import {MQ} from '../../../utils';
import {IconButtonProps} from '../../../icon-button/types';
import {ButtonSize} from '../../../button/types';

export interface AudioPlayerPlaybackSpeedControlOverridesProps {
  popover?: PopoverProps['overrides'];
  modal?: ModalProps['overrides'];
  selectionList?: SelectionListProps['overrides'];
  selectionListOptions?: SelectionListOptionProps['overrides'];
  iconButton?: IconButtonProps['overrides'];
}

export interface AudioPlayerPlaybackSpeedControlProps {
  children?: React.ReactElement;
  useModal?: MQ<boolean>;
  buttonSize?: ButtonSize;
  overrides?: AudioPlayerPlaybackSpeedControlOverridesProps;
}
