module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  target: 'server',
  distDir: 'build',
  generateEtags: true,
  pageExtensions: ['tsx'],
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: false,
  },
};