import {ThemeProvider, Tag, TagSize, theSunTheme} from 'newskit';
import React from 'react';
 
export default class ExampleComponent extends React.Component {
 
  render() {
    return (
      <ThemeProvider theme={theSunTheme}>
        <Tag
          href="http://example.com"
          size={TagSize.Medium}>
            Hello World
        </Tag>
      </ThemeProvider>
    )
  }
}