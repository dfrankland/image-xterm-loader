import loaderUtils from 'loader-utils';
import getPixels from 'get-pixels';
import { promisify } from 'bluebird';
import mime from 'mime';
import colors, { reset } from 'ansi-256-colors';
import x256 from 'x256';

const getPixelsPromise = promisify(getPixels);

module.exports = function (content) {
  if (this.cacheable) this.cacheable();

  const callback = this.async();

  const { cols = 80 } = loaderUtils.getLoaderConfig(this, 'imageXtermLoader');

  (async () => {
    const { data, shape: [height, width] } = await getPixelsPromise(
      content,
      mime.lookup(this.resourcePath),
    );

    let xterm = '';

    const dx = width / cols;
    const dy = 2 * dx;

    for (let y = 0; y < height; y += dy) {
      for (let x = 0; x < width; x += dx) {
        const i = (Math.floor(y) * width + Math.floor(x)) * 4;

        const ansiColor = colors.bg.codes[x256([data[i], data[i + 1], data[i + 2]])];

        if (data[i + 3] > 0) {
          xterm += `${ansiColor} ${reset}`;
        } else {
          xterm += `${reset} `;
        }
      }

      xterm += `${reset} \r\n`;
    }

    callback(null, `module.exports = ${JSON.stringify(xterm)}`);
  })().catch(err => callback(err));
};

module.exports.raw = true;
