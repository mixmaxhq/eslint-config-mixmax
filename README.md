# Mixmax JavaScript Style Guide

## Installing

```sh
npm install eslint-config-mixmax --save-dev
```

## Usage

In a directory containing Node.js code, create an `.eslintrc.json` file containing:

```json
{
  "extends": "mixmax/node"
}
```

This configuration assumes that you're using Node 7.6.0 or higher.

A configuration for browser code is forthcoming.

If you want you can extend the base configuration directly (`"extends": "mixmax"`) but you shouldn't
need to since the Node and browser configurations already extend that.

## Philosophy

At v0.1.0, this style guide is starting off very minimal&mdash;pretty much just ESLint's recommended
rules (the checkmarked rules [here](http://eslint.org/docs/rules)).

We may wish to adopt a more comprehensive / style-oriented spec like [Airbnb’s](https://github.com/airbnb/javascript),
since team members write JS, especially ES6, in slightly different ways; but in the interest of not
immediately breaking our projects I’ve deferred this till later.
