import {ContainerQueryProps, CSSObject} from './style';

export const containerProps = () => (props: {
  overrides?: ContainerQueryProps;
}) => {
  const {containerType, containerName} = props.overrides || {};
  return {containerType, containerName} as CSSObject;
};
