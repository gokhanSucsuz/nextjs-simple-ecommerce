/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "images.pexels.com",
				pathname: "/photos/**",
				protocol: "https",
				port: ""
			},
			{
				hostname: "loremflickr.com",
				pathname: "/**",
				protocol: "https",
				port: ""
			},
			{
				hostname: "picsum.photos",
				pathname: "/**",
				protocol: "https",
				port: ""
			}
		]
	}
};

export default nextConfig;
