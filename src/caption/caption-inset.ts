import {withDefaultProps} from '../utils/with-default-props';
import {withOwnTheme} from '../utils/with-own-theme';
import {Caption} from './caption';
import defaults from './defaults';

export const CaptionInset = withOwnTheme(
  withDefaultProps(Caption, {}, 'captionInset'),
)({
  defaults,
});
