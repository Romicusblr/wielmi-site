/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  basePath: process.env.BASE_PATH ?? "",
  imageDir: "_optimized",
  quality: 100,
  sharpOptions: {
    webp: {
      quality: 100,
      lossless: true
    }
  },
  convertFormat: [
    ['png', 'webp'],
    ['jpeg', 'webp'],
  ],
};

module.exports = config;
