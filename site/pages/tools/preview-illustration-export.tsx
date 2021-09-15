import React from 'react';
import {SvgPreviewer} from '../../components/tools/svg-previewer';
import Layout, {LayoutProps} from '../../components/layout';

export default (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar>
    <SvgPreviewer />
  </Layout>
);
