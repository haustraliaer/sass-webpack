
# Sass Test

## Installation

1. Clone this repo and change the `origin` git remote.
2. Install node modules:

``` text
npm install
```

## Build bundle

``` text
npm run build
```

- Files output to `public/dev/`.

## Development server

``` text
npm start
open http://localhost:8080/
```

- The configuration is `webpack.config.js`.
- Static HTML and asset files are served from `server/dev/`.

## Testing the sass imports


Uncomment the `@import '~css-globals/index';` in `app/views/View3`:

`webpack-dev-server` and `webpack` commands both hang...

It seems like ~3 imports of the same file is about the limit.
