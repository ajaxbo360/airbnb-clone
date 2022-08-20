/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: { domains: ["links.papareact.com", "https://a0.muscache.com"] },
};
