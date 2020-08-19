import {ThemeProvider, Tag, TagSize, newskitLightTheme} from 'newskit';
import React from 'react';

export default class ExampleComponent extends React.Component {

  render() {
    return (
      <ThemeProvider theme={newskitLightTheme}>
        <Tag
          href="http://example.com"
          size={TagSize.Medium}>
            Hello World
        </Tag>
      </ThemeProvider>
    )
  }
}