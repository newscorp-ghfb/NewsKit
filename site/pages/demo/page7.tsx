import CodeTemplate from '../../components/demo/code-template';
import Page7 from '../../public/static/demo/page7';

export const pageTitle = 'Step 7: Theme';

export default function DemoPage7() {
  return (
    <CodeTemplate
      title={pageTitle}
      nextPage="page8"
      prevPage="page6"
      PageComponent={Page7}
      codePaths={['page7.tsx']}
      showThemeSwitcher
    />
  );
}
