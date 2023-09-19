/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
		],
	},
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
