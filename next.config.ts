// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://uat-api.pcspvtl.com:5001/:path*",
      },
    ];
  },
};