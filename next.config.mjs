/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "images.pexels.com",
				pathname: "/photos/**",
				protocol: "https",
				port: ""
			}
		]
	}
};

export default nextConfig;
