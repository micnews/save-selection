# save-selection 

Save &amp; restore selections in a document, using `&lt;mark&gt;` elements

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install save-selection --save
```

## Usage

```js
import {save, restore} from 'save-selection';

// will save selections in <mark> elements
// with classes "selection-start" & "selection-end"
save(document.querySelector('#main'));

// will restore selections,
// setting start to a <mark> element with class selection-start
// and end with class selection-end
restore(document.querySelector('#main'));

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [get-selection-range-from-elm](https://github.com/micnews/get-selection-range-from-elm): window.getSelection().rangeAt(0) but only if it exists &amp; is within an element

## Dev Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babelify](https://github.com/babel/babelify): Babel browserify transform
- [browserify](https://github.com/substack/node-browserify): browser-side require() the node way
- [electron-prebuilt](https://github.com/electron-userland/electron-prebuilt): Install electron prebuilt binaries for the command-line use using npm
- [package-json-to-readme](https://github.com/zeke/package-json-to-readme): Generate a README.md from package.json contents
- [semistandard](https://github.com/Flet/semistandard): All the goodness of `feross/standard` with semicolons sprinkled on top.
- [snazzy](https://github.com/feross/snazzy): Format JavaScript Standard Style as Stylish (i.e. snazzy) output
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers
- [testron](https://github.com/shama/testron): CI your client side tests with Electron


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
