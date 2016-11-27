# `image-xterm-loader`

Load images with Webpack as XTerm 256-color compatible strings.

![](https://raw.githubusercontent.com/dfrankland/image-xterm-loader/master/demo.png)

## Install

```bash
npm install image-webpack-loader --save-dev
```

## Usage

[Documentation using loaders.](http://webpack.github.io/docs/using-loaders.html)

In your `webpack.config.js`, add the `image-xterm-loader`:

```javascript
loaders: [
    {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: ['image-xterm-loader?cols=80'],
    }
]
```

## Options

#### `cols`

Type: `integer`
Default: `80`

Using this, will scale the image to the number of columns wanted.
