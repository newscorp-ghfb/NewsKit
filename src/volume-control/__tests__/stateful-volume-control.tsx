import React, {useState} from 'react';
import {VolumeControlProps} from '../types';
import {VolumeControl} from '../volume-control';

interface StatefulVolumeControlProps
  extends Omit<VolumeControlProps, 'onChange'> {
  onChange?: (volume: number) => void;
}

export const StatefulVolumeControl: React.FC<StatefulVolumeControlProps> = ({
  volume,
  ...props
}) => {
  const [stateVolume, setVolume] = useState(volume);
  const onChange: VolumeControlProps['onChange'] = newValues => {
    setVolume(newValues);
    if (props.onChange) {
      props.onChange(newValues);
    }
  };
  return <VolumeControl {...props} volume={stateVolume} onChange={onChange} />;
};
