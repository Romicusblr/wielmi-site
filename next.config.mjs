import { withSentryConfig } from "@sentry/nextjs";
import withExportImages from "next-export-optimize-images";
import analyzer from "@next/bundle-analyzer";

const config = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.BASE_PATH ?? "",
  images: {
    deviceSizes: [440, 640, 768, 1024, 1280, 1480],
  },
};

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
})(config);

const withSentry = withSentryConfig(withBundleAnalyzer, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  org: "mastyka-rc",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
});

const nextConfig = withExportImages(withSentry);

export default nextConfig;
