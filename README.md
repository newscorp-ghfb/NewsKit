<p align="center">
  <a href="https://github.com/newscorp-ghfb/ncu-newskit">
    <img width="500px" src="https://www.news.co.uk/wp-content/themes/newscouk/assets/img/logo.png">
  </a>
</p>

# <h1 align="center">News UK Components</h1>

**News UK Design System** is a design system comprised of modern, responsive, living components which will be used as the base components for all publication titles at News UK.

## Pre-requisites

You will need to install the following as pre-requisites to getting started:

* [Node.js](https://nodejs.org/en/download/) Version 10.*. If you are using an older version of Node, it is recommended to install other versions via NVM
* [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) to install the project dependencies
* [Docker](https://docs.docker.com/docker-for-mac/install/)

## Getting Started

Once you have the above installed, run the following commands:

```sh
git clone git@github.com:newscorp-ghfb/ncu-newskit.git
cd ncu-newskit
yarn
docker-compose build
docker-compose up
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
