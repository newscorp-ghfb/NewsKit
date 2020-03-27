import {StackChildProps} from './types';
import {StackChild} from './styled';

export default StackChild;

export const isStackChild = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,
): component is {props: StackChildProps} =>
  component &&
  component.type &&
  component.type.displayName === StackChild.displayName;

StackChild.displayName = 'StackChild';
