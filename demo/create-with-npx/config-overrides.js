// config-overrides.js
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = function override(config, env) {
  // Chỉ thêm BundleAnalyzerPlugin khi chạy build production
  if (env === "production") {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "static", // Tạo báo cáo tĩnh dạng HTML
        openAnalyzer: true, // Tự động mở báo cáo sau khi build xong
        reportFilename: "report.html", // Tên file báo cáo
      })
    );
  }
  return config;
};
