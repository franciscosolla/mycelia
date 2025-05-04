// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const nodeLibs = require('node-libs-expo');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...nodeLibs,
  // 👇 critical aliases
  'node:crypto': require.resolve('react-native-crypto'),
  'crypto': require.resolve('react-native-crypto'),
  'stream': require.resolve('readable-stream'), // often needed by crypto
};

module.exports = config;
