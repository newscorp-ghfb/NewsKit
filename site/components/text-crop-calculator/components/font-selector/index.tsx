import React from 'react';
import {Tab, Tabs} from 'newskit';
import GoogleFontSelector from './google-font-selector';
import SystemFontSelector from './SystemFontSelector';
import UrlFontSelector from './UrlFontSelector';
import FileUploadSelector from './FileUploadSelector';
import FontInjector from './FontInjector';

const FontSelector = () => (
  <>
    <Tabs>
      <Tab label="Google Fonts" key="google-fonts">
        <GoogleFontSelector />
      </Tab>
      <Tab label="System" key="system">
        <SystemFontSelector />
      </Tab>
      <Tab label="Url" key="url">
        <UrlFontSelector />
      </Tab>
      <Tab label="Upload" key="upload">
        <FileUploadSelector />
      </Tab>
    </Tabs>
    <FontInjector />
  </>
);

export default FontSelector;
