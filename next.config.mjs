import withExportImages from "next-export-optimize-images";
import analyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withExportImages(
  withBundleAnalyzer({
    output: "export",
    trailingSlash: true,
    basePath: process.env.BASE_PATH ?? "",
    images: {
      deviceSizes: [440, 640, 768, 1024, 1280, 1480],
    },
  })
);

export default nextConfig;
