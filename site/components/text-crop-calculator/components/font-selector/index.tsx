import React from 'react';
import {Tab, Tabs, styled} from 'newskit';
import GoogleFontSelector from './google-font-selector';
import SystemFontSelector from './system-font-selector';
import UrlFontSelector from './url-font-selector';
import FileUploadSelector from './file-upload-selector';
import FontInjector from './font-injector';

const StyledTabs = styled(Tabs)`
  div[role='tabpanel']:focus-within {
    outline: none;
  }
`;

const FontSelector = () => (
  <>
    <StyledTabs>
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
    </StyledTabs>
    <FontInjector />
  </>
);

export default FontSelector;
