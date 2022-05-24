import * as React from 'react';
import {
  IconFilledAccountBalance,
  IconOutlinedAccountBalance,
  IconFilledAccountTree,
  IconOutlinedAccountTree,
} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {createTheme} from '../../theme';

const sampleMaterialIcons = {
  IconFilledAccountBalance,
  IconOutlinedAccountBalance,
  IconFilledAccountTree,
  IconOutlinedAccountTree,
};

const yellowCircle: React.FC = () => (
  <svg width="100" height="100">
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="green"
      strokeWidth="4"
      fill="yellow"
    />
  </svg>
);
const myCustomTheme = createTheme({
  name: 'my-custom-theme',
  overrides: {
    icons: {
      IconFilledAccountBalance: yellowCircle,
      IconOutlinedAccountBalance: yellowCircle,
      IconFilledAccountTree: yellowCircle,
      IconOutlinedAccountTree: yellowCircle,
    },
  },
});

const props = {
  title: 'title of the icon',
  overrides: {
    stylePreset: 'headlineContent',
    size: 'sizing010',
    marginInline: '20px',
    marginBlock: '30px',
    paddingInline: '20px',
    paddingBlock: '30px',
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
    it(`should render yellowCircle instead of the emotion icon  ${iconName}`, () => {
      const fragment = renderToFragmentWithTheme(Icon, props, myCustomTheme);
      expect(fragment).toMatchSnapshot();
    });
  });
});
