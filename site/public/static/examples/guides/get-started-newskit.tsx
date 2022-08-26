import {ThemeProvider, Tag, newskitLightTheme} from 'newskit';
import React from 'react';

export default class ExampleComponent extends React.Component {

  render() {
    return (
      <ThemeProvider theme={newskitLightTheme}>
        <Tag
          href="http://example.com"
          size="medium">
            Hello World
        </Tag>
      </ThemeProvider>
    )
  }
}