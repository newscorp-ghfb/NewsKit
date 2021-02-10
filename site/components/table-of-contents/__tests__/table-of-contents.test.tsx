import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {TableOfContents} from '../table-of-contents';

describe('TableOfContent', () => {
  it('should render with no errors', () => {
    document.body.innerHTML = `
      <section id="SEO"  data-toc-indexed="SEO"/>
      <section id="Accessibility"  data-toc-indexed="Accessibility"/>
    `;

    const fragment = renderToFragmentWithTheme(TableOfContents);
    expect(fragment).toMatchSnapshot();
  });
});
