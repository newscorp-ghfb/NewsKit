import CodeTemplate from '../../components/demo/code-template';
import Page3 from '../../public/static/demo/page3';

export const pageTitle = 'Step 3: Setting Type Presets';

export default function DemoPage3() {
  return (
    <CodeTemplate
      title={pageTitle}
      nextPage="page4"
      prevPage="page2"
      PageComponent={Page3}
      codePaths={['page3.tsx']}
    />
  );
}
