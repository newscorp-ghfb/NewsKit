import {ContainerQueryProps} from './style';

export const containerProps = () => (props: ContainerQueryProps) => {
  const {containerType, containerName} = props;
  return {containerType, containerName};
};
