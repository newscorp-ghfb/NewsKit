<p align="center">
  <a href="https://github.com/newscorp-ghfb/ncu-newskit">
    <img width="500px" src="https://www.news.co.uk/wp-content/themes/newscouk/assets/img/logo.png">
  </a>
</p>

# <h1 align="center">News UK Components</h1>

**News UK Design System** is a design system comprised of modern, responsive, living components which will be used as the base components for all publication titles at News UK.

| Branch | Link                                                                                                                       |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| develop | [https://www.newskit.dev-news.co.uk/](https://www.newskit.dev-news.co.uk/) |
| develop | [https://storybook.newskit.dev-news.co.uk/](https://storybook.newskit.dev-news.co.uk/) |
| master | [https://www.newskit.co.uk/](https://www.newskit.co.uk/) |
| master | [https://storybook.newskit.co.uk/](https://storybook.newskit.co.uk/) |

## Pre-requisites

You will need to install the following as pre-requisites to getting started:

* [Node.js](https://nodejs.org/en/download/) Version 10.*. If you are using an older version of Node, it is recommended to install other versions via NVM
* [Yarn](https://yarnpkg.com/en/docs/install) to install the project dependencies
* (Windows Only) [Linux Subsystem](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

## Getting Started

Once you have the above installed, run the following commands:
Note that if you are on Windows machine, you need to run the `wsl` command first to run which ever linux environment you've installed on your machine.

```sh
git clone git@github.com:newscorp-ghfb/ncu-newskit.git
cd ncu-newskit
yarn && yarn dev
```

### IE11 issue

Disclaimer: when running the documentation site in development mode using `yarn dev:docs`, the site will not work as it includes devDependancy modules that does not support IE11.
Thereore in order to work around this when developing (testing) on IE11, please run the following commands instead.

```sh
yarn build && yarn serve:docs
```

## Contributing

For detailed information on how to create your first PR, branching and commit messages convention, please visit [Contributing](./docs/CONTRIBUTING.md)

## Testing

We use the following libraries for our automated tests:

* Jest and React Testing Library for unit testing
* Cypress for component and E2E testing
* cypress-axe for automated accessibility testing
* Applitools for cross browser visual testing

For detailed information on how to run the automated tests, please visit [Testing](./docs/testing.md)
