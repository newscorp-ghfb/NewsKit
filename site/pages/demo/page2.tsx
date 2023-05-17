import CodeTemplate from '../../components/demo/code-template';
import Page2 from '../../public/static/demo/page2';

export const pageTitle = 'Step 2: Basic Components';

export const pageDescription =
  'A simple example showing some Newskit basic components like TextBlock and Button';

export default function DemoPage2() {
  return (
    <CodeTemplate
      title={pageTitle}
      description={pageDescription}
      nextPage="page3"
      prevPage="page1"
      PageComponent={Page2}
      codePaths={['page2.tsx']}
    />
  );
}
