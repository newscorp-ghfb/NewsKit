<p align="center">
  <a href="https://www.newskit.co.uk">
    <img width='550' src="https://www.newskit.co.uk/static/newskit-logo.svg">
  </a>
</p>

# NewsKit

NewsKit is News UK’s design system. It provides interactive building blocks and guidelines for crafting cohesive digital product interfaces and accelerating development. Build better products faster.

This document is focused on the React components, more expansive documentation can be found on our [website](http://newskit.co.uk).

## Introduction

The NewsKit design system provides an npm package that exports a library of reusable React components and utilities that can be used as building blocks to compose web applications.

## Why build products with NewsKit

### Accessible

NewsKit components folllow [WCAG guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), [WAI Aria](https://www.w3.org/WAI/standards-guidelines/aria/) and [Aria-practices](https://www.w3.org/TR/wai-aria-practices/). Components are AA compliant with A11Y features built-in including props to extend their flexibility if required.

### Adaptive

NewsKit has an extensive [theming system](https://newskit.co.uk/theme/overview/) that enables customization of style and layout. Additionally components support a range of properties to customise behaviour.

### Productive

Carefully crafted components ensure that teams using NewsKit can rapidly iterate on product requirements through re-use of common functionality. This promotes both consistency
and common language across product development teams.

## 💎 What’s included

### React web components

A collection high quality React [web components](https://newskit.co.uk/components/overview/) built using [TypeScript](https://www.typescriptlang.org/) and [Emotion](https://emotion.sh/docs/introduction).

### Advanced theming system

An advanced full-featured [theming system](https://newskit.co.uk/theme/overview/) with the flexibility to meet the requirement of a single or multi-brand requirement, including both business and consumer products.

### Utility functions

A host of utility functions for use in third-party or custom components.

### Guidance

Comprehensive online documentation and guidelines.

## 🙌 Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- |
| last 2 versions | last 2 versions | last 2 versions |

## ✅ Pre-requisites

To start using NewsKit components in your projects your projects you will need the following:

* [Node.js](https://nodejs.org/en/download/) with a minimum of node v14 installed
* A project to install NewsKit into. If you need to create a new one try [Next.js](https://nextjs.org/learn/basics/create-nextjs-app) or [Create React App](https://create-react-app.dev/docs/getting-started/).

## 📦 Install

Use your favourite package manager to install NewsKit.

```bash
npm install newskit
```

```bash
yarn add newskit
```

## 🔨 Usage

NewsKit components can be used like any typical react components. One thing to bear in mind is that they will need to be descendants of a `ThemeProvider`, this can be thought of as the theme context, this theme will be applied to all of its descendants.
The following example shows the "Hello World!" example of using a NewsKit component. More comprehensive usage documentation can be found on our [website](https://www.newskit.co.uk/getting-started/code/engineering-quickstart/).

```typescript
import {ThemeProvider, Tag, newskitLightTheme} from 'newskit';
import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <ThemeProvider theme={newskitLightTheme}>
        <Tag
          href="http://example.com"
          size="medium">
            Tag Content
        </Tag>
      </ThemeProvider>
    )
  }
}
```

## 👉 What’s next

* To start engineering with NewsKit, follow the steps in the [quickstart guide](https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2354218083).
* Have a question? [Contact the NewsKit team via the contact form](https://newskit.co.uk/about/contact-us/).

## 🐛 Bugs, Issues & Feature requests

Feel free to reach out by raising issues on our [github](https://github.com/newscorp-ghfb/newskit/issues).

## 🤝 Contributing

See the [contributing guidelines](https://github.com/newscorp-ghfb/newskit/wiki/Contributing-Guidelines) in the wiki.

## 🔗 Key Links

* [NewsKit Documentation](https://www.newskit.co.uk/)
* [View NewsKit Design System npm package](https://www.npmjs.com/package/newskit)
* [Github repository](https://github.com/newscorp-ghfb/newskit)
* [Medium](https://medium.com/newskit-design-system)
* [Storybook](https://storybook.newskit.co.uk/)
