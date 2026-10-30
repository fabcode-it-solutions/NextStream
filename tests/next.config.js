// This file is used in the tests to mock the next.config.js file!!!
import { withNextVideo } from 'next-video/process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextVideo(nextConfig);
