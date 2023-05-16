import CodeTemplate from '../../components/demo/code-template';
import Page4 from '../../public/static/demo/page4';

export const pageTitle = 'Step 4: Layout';

export const pageDescription =
  'This example shows how to set space between the different items using the Block component';

export default function DemoPage4() {
  return (
    <CodeTemplate
      title={pageTitle}
      description={pageDescription}
      nextPage="page5"
      prevPage="page3"
      PageComponent={Page4}
      codePaths={['page4.tsx']}
    />
  );
}
