const path = require('path');
const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const withStorybook = require("@storybook/react-native/metro/withStorybook");

const root = path.resolve(__dirname, '..');

const config = withStorybook(defaultConfig, {
  enabled: true,

  // this removes storybook from the bundle when the enabled flag is set to false
  onDisabledRemoveStorybook: true,

  // provide access to the root of the monorepo
  watchFolders: [root],
});

module.exports = config;
