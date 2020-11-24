import {getDeviceQueryFromTheme, styled, Devices} from 'newskit';

const Paragraph = styled.p`
  ${({targetDevices}) =>
    targetDevices &&
    getDeviceQueryFromTheme([Devices.iPadPro, Devices.iPad], {display: 'none'})};
`;