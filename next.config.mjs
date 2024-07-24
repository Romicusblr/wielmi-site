import withExportImages from "next-export-optimize-images";

const nextConfig = withExportImages(
  {
    output: "export",
    basePath: process.env.BASE_PATH ?? "",
  }
);

export default nextConfig;
