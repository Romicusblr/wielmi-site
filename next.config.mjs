import withExportImages from "next-export-optimize-images";

const nextConfig = withExportImages(
  {
    output: "export",
    basePath: "/wielmi-site",
  }
);

export default nextConfig;
