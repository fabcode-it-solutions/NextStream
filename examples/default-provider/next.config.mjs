import path from 'node:path';
import { fileURLToPath } from 'node:url';
// import { withNextVideo } from 'next-video/process';
import { withNextVideo } from './next-video.mjs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const fileDir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    // Needed for Turbopack and symlinking to work
    // https://github.com/vercel/next.js/issues/64472#issuecomment-2077483493
    // https://nextjs.org/docs/pages/api-reference/config/next-config-js/output#caveats
    outputFileTracingRoot: path.join(fileDir, '../../'),
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.mux.com',
        },
      ],
    },
  };
};

export default withNextVideo(nextConfig);
