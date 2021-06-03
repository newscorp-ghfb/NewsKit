import {TextInput} from '../text-input';
import {withDefaultProps} from '../utils';

export const EmailInput = withDefaultProps(TextInput, {
  type: 'email',
  rules: {
    required: 'Required field',
    minLength: {
      value: 3,
      message: 'Emails must be at least 3 characters long ',
    },
    pattern: {
      // eslint-disable-next-line no-useless-escape
      value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      message: 'Please provide a valid email',
    },
  },
});
