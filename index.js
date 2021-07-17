const Appium = require("appium");
const path = require('path');

const apkDebug = path.join(__dirname, 'node_modules/appium/node_modules/io.appium.settings/apks/settings_apk-debug.apk');
const signJar = path.join(__dirname, 'node_modules/appium/node_modules/appium-adb/jars/sign.jar');

var commands = require('minimist')(process.argv.slice(2));

if (!("port" in commands)) {
  commands['port'] = 4725;
}

async function start() {
  await Appium.main(commands);
}

start();
