import CodeTemplate from '../../components/demo/code-template';
import Page6 from '../../public/static/demo/page6';

export const pageTitle = 'Step 6: Custom Component';

export const pageDescription =
  'Adding a custom Card Surface component and a Button with no-wrapping text. New custom theme';

export default function DemoPage6() {
  return (
    <CodeTemplate
      title={pageTitle}
      description={pageDescription}
      nextPage="page7"
      prevPage="page5"
      PageComponent={Page6}
      codePaths={['page6.tsx', 'page6-theme.tsx']}
    />
  );
}
