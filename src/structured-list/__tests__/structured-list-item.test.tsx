import React from 'react';
import {StructuredListItem} from '..';
import {TextBlock} from '../..';
import {IconOutlinedKeyboardArrowRight} from '../../icons';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {StructuredListCell} from '../structured-list-item';
import {StructuredListItemProps} from '../types';

const renderStructuredListItemDefault = (props: StructuredListItemProps) => (
  <StructuredListItem ariaLabel="Structured list" {...props} />
);

const renderWithExternalLink = (props: StructuredListItemProps) => (
  <StructuredListItem
    ariaLabel="Structured list"
    href="http://apple.com"
    {...props}
  />
);

const renderWithInternalLink = (props: StructuredListItemProps) => (
  <StructuredListItem ariaLabel="Structured list" href="/" {...props} />
);

const renderWithDisabledLink = (props: StructuredListItemProps) => (
  <StructuredListItem
    ariaLabel="Structured list"
    href="/"
    disabled
    {...props}
  />
);

const StructuredListCellDefault = [
  <StructuredListCell>
    <TextBlock stylePreset="inkContrast" typographyPreset="utilityHeading010">
      Label
    </TextBlock>
  </StructuredListCell>,
  <StructuredListCell>
    <TextBlock stylePreset="inkSubtle" typographyPreset="utilityBody020">
      A short description of the label
    </TextBlock>
  </StructuredListCell>,
  <StructuredListCell>
    <IconOutlinedKeyboardArrowRight overrides={{size: 'iconSize020'}} />
  </StructuredListCell>,
];

const TwoCellsDefault = [
  <StructuredListCell>
    <TextBlock stylePreset="inkContrast" typographyPreset="utilityHeading010">
      Label
    </TextBlock>
  </StructuredListCell>,
  <StructuredListCell>
    <TextBlock stylePreset="inkSubtle" typographyPreset="utilityBody020">
      A short description of the label
    </TextBlock>
  </StructuredListCell>,
];

const TwoCellsWithPullrightOnFirst = [
  <StructuredListCell pullRight>
    <TextBlock stylePreset="inkContrast" typographyPreset="utilityHeading010">
      Label
    </TextBlock>
  </StructuredListCell>,
  <StructuredListCell>
    <TextBlock stylePreset="inkSubtle" typographyPreset="utilityBody020">
      A short description of the label
    </TextBlock>
  </StructuredListCell>,
];

const TwoCellsWithPullrightOnSecond = [
  <StructuredListCell>
    <TextBlock stylePreset="inkContrast" typographyPreset="utilityHeading010">
      Label
    </TextBlock>
  </StructuredListCell>,
  <StructuredListCell pullRight>
    <TextBlock stylePreset="inkSubtle" typographyPreset="utilityBody020">
      A short description of the label
    </TextBlock>
  </StructuredListCell>,
];

const OneCellDefault = [
  <StructuredListCell>
    <TextBlock stylePreset="inkContrast" typographyPreset="utilityHeading010">
      Label
    </TextBlock>
  </StructuredListCell>,
];

const OneCellWithPullright = [
  <StructuredListCell pullRight>
    <TextBlock stylePreset="inkContrast" typographyPreset="utilityHeading010">
      Label
    </TextBlock>
  </StructuredListCell>,
];

const FourCells = [
  <StructuredListCell>
    <TextBlock stylePreset="inkContrast" typographyPreset="utilityHeading010">
      Label
    </TextBlock>
  </StructuredListCell>,
  <StructuredListCell>
    <TextBlock stylePreset="inkContrast" typographyPreset="utilityHeading010">
      Label
    </TextBlock>
  </StructuredListCell>,
  <StructuredListCell>
    <TextBlock stylePreset="inkSubtle" typographyPreset="utilityBody020">
      A short description of the label
    </TextBlock>
  </StructuredListCell>,
  <StructuredListCell>
    <IconOutlinedKeyboardArrowRight overrides={{size: 'iconSize020'}} />
  </StructuredListCell>,
];

describe('StructuredListItem', () => {
  describe('without-href', () => {
    test('renders with default style', () => {
      const props: StructuredListItemProps = {
        children: StructuredListCellDefault,
      };
      const fragment = renderToFragmentWithTheme(
        renderStructuredListItemDefault,
        props,
      );
      expect(fragment).toMatchSnapshot();
    });
    test('renders with two cells default style', () => {
      const props: StructuredListItemProps = {
        children: TwoCellsDefault,
      };
      const fragment = renderToFragmentWithTheme(
        renderStructuredListItemDefault,
        props,
      );
      expect(fragment).toMatchSnapshot();
    });
    test('renders with two cells with pullRight on the first', () => {
      const props: StructuredListItemProps = {
        children: TwoCellsWithPullrightOnFirst,
      };
      const fragment = renderToFragmentWithTheme(
        renderStructuredListItemDefault,
        props,
      );
      expect(fragment).toMatchSnapshot();
    });
    test('renders with two cells with pullRight on the second', () => {
      const props: StructuredListItemProps = {
        children: TwoCellsWithPullrightOnSecond,
      };
      const fragment = renderToFragmentWithTheme(
        renderStructuredListItemDefault,
        props,
      );
      expect(fragment).toMatchSnapshot();
    });
    test('renders with one cell default', () => {
      const props: StructuredListItemProps = {
        children: OneCellDefault,
      };
      const fragment = renderToFragmentWithTheme(
        renderStructuredListItemDefault,
        props,
      );
      expect(fragment).toMatchSnapshot();
    });
    test('renders with one cell with pullRight', () => {
      const props: StructuredListItemProps = {
        children: OneCellWithPullright,
      };
      const fragment = renderToFragmentWithTheme(
        renderStructuredListItemDefault,
        props,
      );
      expect(fragment).toMatchSnapshot();
    });
    test('renders with more than 3 children', () => {
      const props: StructuredListItemProps = {
        children: FourCells,
      };
      const fragment = renderToFragmentWithTheme(
        renderStructuredListItemDefault,
        props,
      );
      expect(fragment).toMatchSnapshot();
    });
    test('renders with texts only and no cells', () => {
      const props: StructuredListItemProps = {
        children: 'No Cells',
      };
      const fragment = renderToFragmentWithTheme(
        renderStructuredListItemDefault,
        props,
      );
      expect(fragment).toMatchSnapshot();
    });
    test('renders with overrides', () => {
      const props: StructuredListItemProps = {
        children: StructuredListCellDefault,
        overrides: {
          stylePreset: 'structuredListItemCustom',
          spaceInset: 'spaceInset060',
          minHeight: 'sizing090',
        },
      };

      const fragment = renderToFragmentWithTheme(
        renderStructuredListItemDefault,
        props,
      );
      expect(fragment).toMatchSnapshot();
    });
  });
  describe('with href', () => {
    test('renders three cells with custom icon', () => {
      const props: StructuredListItemProps = {
        children: StructuredListCellDefault,
      };

      const fragment = renderToFragmentWithTheme(renderWithExternalLink, props);
      expect(fragment).toMatchSnapshot();
    });
    test('renders two cells with internal link icon', () => {
      const props: StructuredListItemProps = {
        children: TwoCellsDefault,
      };

      const fragment = renderToFragmentWithTheme(renderWithInternalLink, props);
      expect(fragment).toMatchSnapshot();
    });
    test('renders two cells with external link icon', () => {
      const props: StructuredListItemProps = {
        children: TwoCellsDefault,
      };

      const fragment = renderToFragmentWithTheme(renderWithExternalLink, props);
      expect(fragment).toMatchSnapshot();
    });
    test('renders two cells with pullRightOnFirst and href', () => {
      const props: StructuredListItemProps = {
        children: TwoCellsWithPullrightOnFirst,
      };

      const fragment = renderToFragmentWithTheme(renderWithExternalLink, props);
      expect(fragment).toMatchSnapshot();
    });
    test('renders two cells with pullRightOnSecond and href', () => {
      const props: StructuredListItemProps = {
        children: TwoCellsWithPullrightOnSecond,
      };

      const fragment = renderToFragmentWithTheme(renderWithExternalLink, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders one cell with internal link icon', () => {
      const props: StructuredListItemProps = {
        children: OneCellDefault,
      };

      const fragment = renderToFragmentWithTheme(renderWithInternalLink, props);
      expect(fragment).toMatchSnapshot();
    });
    test('renders one cell with external link icon', () => {
      const props: StructuredListItemProps = {
        children: OneCellDefault,
      };

      const fragment = renderToFragmentWithTheme(renderWithExternalLink, props);
      expect(fragment).toMatchSnapshot();
    });
    test('renders one cell pullRight with href', () => {
      const props: StructuredListItemProps = {
        children: OneCellWithPullright,
      };

      const fragment = renderToFragmentWithTheme(renderWithExternalLink, props);
      expect(fragment).toMatchSnapshot();
    });
    test('renders four cells with href', () => {
      const props: StructuredListItemProps = {
        children: FourCells,
      };
      const fragment = renderToFragmentWithTheme(renderWithExternalLink, props);
      expect(fragment).toMatchSnapshot();
    });
    test('renders with disabled link', () => {
      const props: StructuredListItemProps = {
        children: OneCellDefault,
      };
      const fragment = renderToFragmentWithTheme(renderWithDisabledLink, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});
