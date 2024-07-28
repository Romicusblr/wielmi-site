/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  basePath: process.env.BASE_PATH ?? "",
  imageDir: "_optimized",
};

module.exports = config;
