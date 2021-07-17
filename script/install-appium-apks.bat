@echo off
set /p device= "Please enter device ID: " 
platform-tools\adb.exe -s %device% install apks\settings_apk-debug.apk
platform-tools\adb.exe -s %device% install apks\appium-uiautomator2-server-debug-androidTest.apk
platform-tools\adb.exe -s %device% install apks\appium-uiautomator2-server-v4.12.2.apk
echo APK install done.
pause >nul