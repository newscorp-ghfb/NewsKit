import {GridLayout, LinkStandalone} from 'newskit';
import CodeTemplate from '../../components/demo/code-template';

export const pageTitle = 'Step 1: Figma Design';

const Content = () => (
  <div>
    <GridLayout justifyItems="center">
      <LinkStandalone href="https://www.figma.com/file/4Jzao4KyvOV95foRLBsTmn/NewsKit-Theme-Demo?node-id=1001%3A149993">
        View in Figma
      </LinkStandalone>
      <iframe
        title="figma design tokens"
        style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
        width="800"
        height="600"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4Jzao4KyvOV95foRLBsTmn%2FNewsKit-Theme-Demo%3Fnode-id%3D1028%253A69125"
        allowFullScreen
      ></iframe>
    </GridLayout>
  </div>
);

export default function DemoPage1() {
  return (
    <CodeTemplate title={pageTitle} nextPage="page2" PageComponent={Content} />
  );
}
