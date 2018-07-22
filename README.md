# idelsink.github.com [![Build Status](https://travis-ci.org/idelsink/idelsink.github.io.svg?branch=release)](https://travis-ci.org/idelsink/idelsink.github.io)

Source for my personal website: [ingmar.dels.ink](https://ingmar.dels.ink).

## Installation

Clone the repository and install the dependencies by running a `npm install` in the directory.

## Local development

Make sure that `npm` is installed.

1. Install the modules by running:
   ```sh
   npm install
   ```
2. Run the local webserver which serves the files. It also watches the files and transpiles them on the fly:
   ```sh
   npm run dev
   ```

## Site deployment

The transpiled website is automatically deployed to this repository on the `master` branch via [travis-ci](https://travis-ci.org/idelsink/idelsink.github.io).
This site is then served via [Github pages](https://pages.github.com/) at [ingmar.dels.ink](https://ingmar.dels.ink).
