/** @type {import('next').NextConfig} */
require("dotenv").config();
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

module.exports = nextConfig;
