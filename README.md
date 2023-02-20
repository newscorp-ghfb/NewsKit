
<p align="center">
  <a href="https://github.com/newscorp-ghfb/newskit">
    <img width='550' src="https://www.newskit.co.uk/static/newskit-logo.svg">
  </a>
</p>

# NewsKit

NewsKit is News UK’s design system. It provides interactive building blocks and guidelines for crafting cohesive digital product interfaces and accelerating development. Build better products faster.

| Environment  | Link                                                                                   |
| ------- | -------------------------------------------------------------------------------------- |
| Develop | [https://www.newskit.dev-news.co.uk/](https://www.newskit.dev-news.co.uk/)             |
| Develop | [https://storybook.newskit.dev-news.co.uk/](https://storybook.newskit.dev-news.co.uk/) |
| Prod    | [https://www.newskit.co.uk/](https://www.newskit.co.uk/)                               |
| Prod    | [https://storybook.newskit.co.uk/](https://storybook.newskit.co.uk/)                   |

## 🙌 Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                                  | last 2 versions                                                                                                                                                                                              |

## ✅ Pre-requisites

You will need to install the following as pre-requisites to getting started:

* [Node.js](https://nodejs.org/en/download/) We use two versions of node.
You need to be on version: <b>>=16.10.0</b> to run the application. In your terminal run the command `nvm use` to install the required version.

* [Yarn](https://yarnpkg.com/en/docs/install) to install the project dependencies
* (Windows Only) [Linux Subsystem](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
* Additional setup required for WSL is documented [here](./docs/wsl.md)

## 📦  Getting Started

Once you have the above installed, run the following commands:
Note that if you are on Windows machine, you need to run the `wsl` command first to run which ever linux environment you've installed on your machine.

```sh
git clone git@github.com:newscorp-ghfb/newskit.git
cd newskit
yarn && yarn dev
```

> A few pages on the site use Google Sheets as a simple CMS, if you are contributing to the product you can request these variables from the team.  

## Testing

We use the following libraries for our automated tests:

* Jest and React Testing Library for unit testing
* Cypress for component and E2E testing
* cypress-axe for automated accessibility testing
* Applitools for cross browser visual testing

For detailed information on how to run the automated tests, please visit [Testing](./docs/testing.md)

## 👉 What’s next

* To start engineering with NewsKit, follow the steps in the [quickstart guide](https://newskit.co.uk/getting-started/code/engineering-quickstart/).
* Have a question? [Contact the NewsKit team via the contact form](https://newskit.co.uk/about/contact-us/).

## 🔗 Key Links:

* [NewsKit Documentation](https://www.newskit.co.uk/)
* [View NewsKit Design System npm package](https://www.npmjs.com/package/newskit)
* [Github repository](https://github.com/newscorp-ghfb/newskit)
* [Medium](https://medium.com/newskit-design-system)
* [Storybook](https://storybook.newskit.co.uk/)
