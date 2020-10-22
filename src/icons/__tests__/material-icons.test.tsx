import {IconFilledAccountBalance, IconOutlinedAccountTree} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';

const sampleMaterialIcons = {
  IconFilledAccountBalance,
  IconOutlinedAccountTree,
};

// Needed for the last test, uncomment when https://nidigitalsolutions.jira.com/browse/PPDSC-1372 is fixed
// const yellowCircle: React.FC = () => (
//   <svg width="100" height="100">
//     <circle
//       cx="50"
//       cy="50"
//       r="40"
//       stroke="green"
//       strokeWidth="4"
//       fill="yellow"
//     />
//   </svg>
// );
// const myCustomTheme = createTheme({
//   name: 'my-custom-theme',
//   overrides: {
//     icons: {
//       IconFilledAccountBalance: yellowCircle,
//       IconOutlinedAccountTree: yellowCircle,
//     },
//   },
// });

const props = {
  title: 'title of the icon',
  overrides: {
    stylePreset: 'headlineContent',
    size: 'sizing010',
  },
};
// These tests will run on CI only as default, to make local dev experience quicker, to generate snaps run test:unit:run
describe('Material icons', () => {
  Object.entries(sampleMaterialIcons).forEach(entry => {
    const [iconName, Icon] = entry;

    it(`should render icons with no props ${iconName}`, () => {
      const fragment = renderToFragmentWithTheme(Icon);
      expect(fragment).toMatchSnapshot();
    });

    it(`should render icons with props ${iconName}`, () => {
      const fragment = renderToFragmentWithTheme(Icon, props);
      expect(fragment).toMatchSnapshot();
    });
    // The test below is failing on CI because some of the icons don't have both outlined and filled variants. Will be fixed with https://nidigitalsolutions.jira.com/browse/PPDSC-1372
    // it(`should render yellowCircle instead of the emotion icon  ${iconName}`, () => {
    //   const fragment = renderToFragmentWithTheme(Icon, props, myCustomTheme);
    //   expect(fragment).toMatchSnapshot();
    // });
  });
});
