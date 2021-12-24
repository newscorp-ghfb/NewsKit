import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {TableOfContents} from '../table-of-contents';

describe('TableOfContent', () => {
  it('should render with no errors', () => {
    document.body.innerHTML = `
      <div id="Introduction"  data-toc-indexed="Introduction"/>
      <div id="Overview"  data-toc-indexed="Overview"/>
      <section id="SEO"  data-toc-indexed="SEO"/>
      <section id="Accessibility"  data-toc-indexed="Accessibility"/>
    `;

    const fragment = renderToFragmentWithTheme(TableOfContents);
    expect(fragment).toMatchSnapshot();
  });
});
