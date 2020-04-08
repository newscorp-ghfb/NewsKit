<p align="center">
  <a href="https://github.com/newscorp-ghfb/ncu-newskit">
    <img width="500px" src="https://www.news.co.uk/wp-content/themes/newscouk/assets/img/logo.png">
  </a>
</p>

# <h1 align="center">News Kit</h1>

**News Kit Design System** is a design system comprised of modern, responsive, living components which will be used as the base components for all publication titles at News UK.

## Pre-requisites

You will need to have a basic react application as pre-requisites to getting started:

* [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) to install the project dependencies

## Getting Started

Once you have the above installed, run the following commands:

```sh
yarn add newskit
```

Then on your react application, you can simply import the components like so:

```typescript
import {ThemeProvider, Tag, TagSize, theSunTheme} from 'newskit';
import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theSunTheme}>
        <Tag
          href="http://example.com"
          $size={TagSize.Medium}>
            Tag Content
        </Tag>
      </ThemeProvider>
    )
  }
}
```

## Documentation about the components

A website with all the component documentation is available [here](https://newskit.co.uk/)
