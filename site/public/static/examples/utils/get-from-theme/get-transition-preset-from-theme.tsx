import {styled, getTransitionPresetFromTheme} from 'newskit';

// transitionPresets.backgroundColorChange = {
//   base: {
//     transitionProperty: 'background-color',
//     transitionDuration: '{{motions.motionDuration030}}',
//     transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
//   },
// };

// stylePresets.p = {
//   base: {
//     backgroundColor: '{{colors.purple030}}',
//   },
//   hover: {
//     backgroundColor: '{{colors.purple070}}',
//   },
// };
const button = styled.p`
  background-color: green;
  ${getTransitionPresetFromTheme('backgroundColorChange')}
`;
