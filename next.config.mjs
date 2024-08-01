import withExportImages from "next-export-optimize-images";
import analyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withExportImages(
  withBundleAnalyzer({
    output: "export",
    basePath: process.env.BASE_PATH ?? "",
  })
);

export default nextConfig;
