import {ButtonSelectSize, SelectPropsOverrides} from './types';
import {BreakpointKeys, Theme} from '../theme/types';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {get} from '../utils/get';
import {hasOwnProperty} from '../utils/has-own-property';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';

export const getModalOverrides = ({
  theme,
  size,
  overrides,
}: {
  theme: Theme;
  size: ButtonSelectSize;
  overrides: SelectPropsOverrides['modal'];
}) => {
  const modalDefaults = theme.componentDefaults.select[size].modal;

  let userProvidedOverrides = {};
  // propsOverride:
  if (typeof overrides === 'object' && hasOwnProperty(overrides, 'props')) {
    userProvidedOverrides = get(userProvidedOverrides, 'props.overrides');

    // styleOverrides
  } else if (typeof overrides === 'object') {
    userProvidedOverrides = overrides;
  }
  return deepMerge(
    mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
    modalDefaults,
    filterOutFalsyProperties(userProvidedOverrides),
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isWindow(value: any): value is Window {
  return (
    value &&
    value.document &&
    value.location &&
    value.alert &&
    value.setInterval
  );
}

function getNodeName(node: Node | Window): string {
  // eslint-disable-next-line no-nested-ternary
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : '';
}

function getParentNode(node: Node): Node {
  if (getNodeName(node) === 'html') {
    return node;
  }

  return node.parentNode || node;
}

function isLastTraversableNode(node: Node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

function getWindow(node: Node | Window): Window {
  if (node == null) {
    return window;
  }

  if (!isWindow(node)) {
    const {ownerDocument} = node;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isHTMLElement(value: any): value is HTMLElement {
  // @ts-ignore
  return value instanceof getWindow(value).HTMLElement;
}

function isOverflowElement(element: Element): boolean {
  // Firefox wants us to check `-x` and `-y` variations as well
  const {overflow, overflowX, overflowY, display} = getComputedStyle(element);
  return (
    /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX) &&
    !['inline', 'contents'].includes(display)
  );
}

export function getNearestOverflowAncestor(node: Node): HTMLElement {
  const parentNode = getParentNode(node);

  if (isLastTraversableNode(parentNode)) {
    // @ts-ignore assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }

  return getNearestOverflowAncestor(parentNode);
}
