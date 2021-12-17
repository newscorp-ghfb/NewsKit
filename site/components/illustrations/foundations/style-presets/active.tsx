import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Active: React.FC = () => (
  <Svg
    width="1000"
    height="1001"
    viewBox="0 0 1000 1001"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect
      y="0.34375"
      width="1000"
      height="1000"
      rx="22"
      fill="illustrationBackground020"
    />
    <Path
      opacity="0.3"
      d="M94 197C94 140.115 140.115 94 197 94H803C859.885 94 906 140.115 906 197V803C906 859.885 859.885 906 803 906H197C140.115 906 94 859.885 94 803V197Z"
      fill="interactiveInput030"
    />
    <Path
      opacity="0.4"
      d="M133 232C133 177.324 177.324 133 232 133H768C822.676 133 867 177.324 867 232V768C867 822.676 822.676 867 768 867H232C177.324 867 133 822.676 133 768V232Z"
      fill="interactiveInput030"
    />
    <Path
      d="M175 267C175 216.19 216.19 175 267 175H733C783.81 175 825 216.19 825 267V733C825 783.81 783.81 825 733 825H267C216.19 825 175 783.81 175 733V267Z"
      fill="interactiveInput030"
    />
    <Path
      d="M215 295C215 250.817 250.817 215 295 215H704.186C748.368 215 784.186 250.817 784.186 295V704.186C784.186 748.368 748.368 784.186 704.186 784.186H295C250.817 784.186 215 748.368 215 704.186V295Z"
      fill="interactiveInput050"
    />
    <Path
      d="M428.375 598.364L329.511 499.5L295.845 532.929L428.375 665.459L712.875 380.959L679.446 347.53L428.375 598.364Z"
      fill="white"
    />
  </Svg>
);

export default Active;
