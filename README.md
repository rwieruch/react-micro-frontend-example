# react-webpack-babel-sophisticated

[![Build Status](https://travis-ci.org/rwieruch/react-webpack-babel-sophisticated.svg?branch=master)](https://travis-ci.org/rwieruch/react-webpack-babel-sophisticated)

How to start to build your own: [The Minimal React Webpack Babel Setup](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
Where to find a minimal version of it: [Here](https://github.com/rwieruch/minimal-react-webpack-babel-setup)!

## Features

* React 16
* Webpack 3
* Babel
* Staging ES Next Features
* Hot Module Replacement
* Devevelopment and Production Scripts
* Source Maps
* Less Support, but exchangeable with Sass
  * install sass-loader
  * install adjust webpack config
  * adjust .less extension and content
* Image Support
* Optimization
  * Uglify
  * Compression
* Analyze Bundle
  * Bundle Analyzer
  * Bundle Visualizer
* Tests
  * Mocha
  * Chai
  * Enzyme
  * Sinon

## Installation

* `git clone git@github.com:rwieruch/react-webpack-babel-sophisticated.git`
* `cd react-webpack-babel-sophisticated`
* `npm install`
* `npm start`
* visit `http://localhost:8080/`

## Other Scripts

* `npm run build` (build application in dist folder)

* `npm run test` (test application once)
* `npm run tdd` (watch changing tests)

* `npm run dev:bundleanalyze` (analyze dev bundle in browser)
* `npm run build:bundleanalyze` (analyze build bundle in browser)
* `npm run build:bundlevisualizer` (generate a stats HTML file to visualize bundles)

