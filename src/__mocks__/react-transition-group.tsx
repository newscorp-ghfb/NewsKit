import React, {useEffect} from 'react';
import {TransitionProps} from 'react-transition-group/Transition';

// const rtg = jest.createMockFromModule('react-transition-group') as any;
const rtg = jest.requireActual('react-transition-group');
rtg.config.disabled = true;

const {CSSTransition} = rtg;

const Helper = ({children, ...rest}: TransitionProps) => {
  const callIfExist = (props: TransitionProps, method: string) =>
    method in props && props[method]();

  const onEnter = React.useCallback(() => callIfExist(rest, 'onEnter'), [rest]);
  const onExited = React.useCallback(() => callIfExist(rest, 'onExited'), [
    rest,
  ]);

  useEffect(() => {
    if (rest.in) {
      onEnter();
    } else {
      onExited();
    }
  }, [rest.in, onEnter, onExited]);

  // const Cloned = React.cloneElement(
  //   CSSTransition,
  //   [{...rest, ...{pesho: 'hello'}}],
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   [...(children as any)],
  // );
  // return Cloned;

  return <CSSTransition {...rest}>{children}</CSSTransition>;
};

rtg.CSSTransition = Helper;

module.exports = rtg;
