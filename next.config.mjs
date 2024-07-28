import withExportImages from "next-export-optimize-images";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(
  withExportImages({
    output: "export",
    basePath: process.env.BASE_PATH ?? "",
  })
);

export default nextConfig;
