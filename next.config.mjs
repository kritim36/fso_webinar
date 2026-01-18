
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     // Disable devtools features that cause manifest errors
//     optimizePackageImports: false,
//     serverComponentsExternalPackages: [],
//     reactCompiler: false,
//   },
//   devIndicators: {
//     buildActivity: false,
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [],   

  experimental: {
    optimizePackageImports: [], 
  },
};

export default nextConfig;

