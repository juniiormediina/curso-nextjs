module.exports = {
  /* rewrites */
  async rewrites() {
    return [
      {
        source: '/avocado/:path*', // wildcards
        destination: '/product/:path*',
      },
    ];
  },
};
