/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Esto aplicará los encabezados a todas las rutas
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: '*', // Permite ventanas emergentes del mismo origen
          },
        ],
      },
    ]
  },
  images: {
    domains: [
      'images.unsplash.com',
      'firebasestorage.googleapis.com', // Añade esto
    ],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig
