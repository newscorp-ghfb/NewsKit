import CodeTemplate from '../../components/demo/code-template';
import Page5 from '../../public/static/demo/page5';

export const pageTitle = 'Step 5: Setting Style Presets';

export default function DemoPage5() {
  return (
    <CodeTemplate
      title={pageTitle}
      nextPage="page6"
      prevPage="page4"
      PageComponent={Page5}
      codePaths={['page5.tsx']}
    />
  );
}
