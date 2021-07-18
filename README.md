# Appium Server Portable

Appium is an open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms (more info visit this page: [Appium](https://appium.io/)).

## How to Build

**Requirement**

- Installed nodejs version 12.x above.

**Steps**

- Clone this repo
- Inside repo directory run `npm install`
- Then run `npm run build`
- Wait until compiling process complete
- Appium executable `.exe` will created inside `dist` directory

**Note**
You can download built appium executable from this repo:
[Appium Portable](https://github.com/thiovan/appium-portable/actions/workflows/build-appium-portable.yml)

## Usage

Open `appium.exe` directly or use command prompt if you want to use custom argument, example: `appium.exe --port 4747 --log ./appium.log`

List of supported CLI arguments:
[Appium Server CLI Arguments](https://appium.io/docs/en/writing-running-appium/server-args/)

## Future Update

- Create executable for Linux OS
- Create executable for Mac OS
