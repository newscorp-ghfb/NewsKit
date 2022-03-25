import React from 'react';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';

// https://jestjs.io/docs/manual-mocks
// If the module you are mocking is a Node module (e.g.: lodash), the mock should be placed in the __mocks__ directory adjacent to node_modules (unless you configured roots to point to a folder other than the project root) and will be automatically mocked. There's no need to explicitly call jest.mock('module_name').

const rtg = jest.requireActual('react-transition-group');
rtg.config.disabled = true;

const {CSSTransition} = rtg;

// http://reactcommunity.org/react-transition-group/testing
// https://github.com/reactjs/react-transition-group/issues/787
// It looks like when transitions are disabled (actually disabling only the waiting time, not the transitions themselves)
// only onEntered() and onExited() callbacks are being called
// The following function is a hack-ish way to call the rest of the transition lifecycle methods.
const InterceptedCSSTransition = ({
  children,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...rest
}: CSSTransitionProps) => {
  const handleOnEntered = (maybeNode: HTMLElement, isAppearing: boolean) => {
    if (onEnter) onEnter(maybeNode, isAppearing);
    if (onEntering) onEntering(maybeNode, isAppearing);
    if (onEntered) onEntered(maybeNode, isAppearing);
  };

  const handleOnExited = (node: HTMLElement) => {
    if (onExit) onExit(node);
    if (onExiting) onExiting(node);
    if (onExited) onExited(node);
  };

  return (
    <CSSTransition
      onEntered={handleOnEntered}
      onExited={handleOnExited}
      {...rest}
    >
      {children}
    </CSSTransition>
  );
};

rtg.CSSTransition = InterceptedCSSTransition;

module.exports = rtg;
