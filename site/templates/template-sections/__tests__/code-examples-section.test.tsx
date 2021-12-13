import {CodeExamplesSection, CodeExamplesSectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';

describe('CodeExamplesSection', () => {
  test('renders section as expected', () => {
    const props: CodeExamplesSectionProps = {
      title: 'Code examples section title',
      toc: 'Codeexamplessection',
      introduction: 'Code examples section title introduction',
      example: [
        {
          title: 'Example title 1',
          description: 'Example description 1',
          media: {
            src: 'media 1 src',
          },
          code: `Example code 1`,
          sections: [
            {
              title: 'Sections title 1',
              description: 'Sections description 1',
              media: {
                src: 'media 2 src',
              },
              code: `Example code 2`,
            },
            {
              title: 'Sections title 2',
              description: 'Sections description 2',
              media: {
                src: 'media 3 src',
              },
              code: `Example code 3`,
            },
          ],
        },
      ],
    };

    const fragment = renderToFragmentWithTheme(CodeExamplesSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
