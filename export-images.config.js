/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  basePath: process.env.BASE_PATH ?? "",
  imageDir: "_optimized",
  convertFormat: [
    ['png', 'webp'],
    ['jpeg', 'webp'],
  ],
};

module.exports = config;
