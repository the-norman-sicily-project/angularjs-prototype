# sicilia-normanna

This project was generated with the
[Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack)

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org)
- [Bower](bower.io) (`npm install -g bower`)
- [Grunt](http://gruntjs.com/) (`npm install -g grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Getting Started

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB daemon
running

4. Run `grunt monogoimport` to populate the mongo database

5. Run `grunt serve` to start the development server. It should automatically
open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Deployment

Run `grunt` and `grunt buildcontrol:heroku`

## Testing

Run `grunt test` to run client and server tests. Run `grunt test:e2e` to run end
to end protractor tests.

To get test coverage, run `grunt test:coverage`

### Note about end to end Protractor tests
If the end to end tests fail, you might need to install or update Selenium
WebDriver.  To update Selenium WebDriver, run `npm update-webdriver`

To install Selenium WebDriver, run the following commands from the project
directory:

```
cd node_modules/grunt-protractor-runner/
npm install
```
