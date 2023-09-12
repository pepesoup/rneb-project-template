// Learn more https://docs.expo.io/guides/customizing-metro
/** @type {import('expo/metro-config').MetroConfig} */
const { createMetroConfiguration } = require('expo-yarn-workspaces')
const { getDefaultConfig } = require('expo/metro-config')

const workspaceConfig = createMetroConfiguration(__dirname)
const defaultConfig = getDefaultConfig(__dirname)

defaultConfig.resolver.sourceExts.push('cjs') /* for Firebase bundling */
workspaceConfig.resolver.sourceExts.push('cjs') /* for Firebase bundling */

/** Trying to get workspace-config to function - experimental...
 *  Default-config seems to work
 */
module.exports = defaultConfig
//module.exports = workspaceConfig
