/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  basePath: process.env.BASE_PATH ?? "",
  cacheDir: ".next/cache"
};

module.exports = config;
