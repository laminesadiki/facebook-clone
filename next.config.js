module.exports = {
  reactStrictMode: true,
  images:  {
    // loader: 'imgix',
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "cdn.britannica.com",
      "cdn.futura-sciences.com",
      "media.gettyimages.com",
    ]
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
