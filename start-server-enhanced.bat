@echo off
title Al-Azhar School Server
color 0A

echo ========================================
echo    تشغيل سيرفر Al-Azhar School
echo ========================================
echo.

:: التحقق من وجود Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo خطأ: Node.js غير مثبت
    echo يرجى تثبيت Node.js من https://nodejs.org/
    pause
    exit /b 1
)

:: التحقق من وجود package.json
if not exist "package.json" (
    echo خطأ: ملف package.json غير موجود
    echo تأكد من أنك في المجلد الصحيح للمشروع
    pause
    exit /b 1
)

:: التحقق من وجود node_modules
if not exist "node_modules" (
    echo تثبيت التبعيات...
    npm install
    if %errorlevel% neq 0 (
        echo خطأ في تثبيت التبعيات
        pause
        exit /b 1
    )
)

echo.
echo بدء تشغيل السيرفر...
echo.
echo السيرفر سيكون متاحًا على:
echo - http://localhost:3000 (إذا كان متاحًا)
echo - http://localhost:3001 (إذا كان 3000 مشغولاً)
echo - أو أي منفذ آخر متاح
echo.
echo للوقف، اضغط Ctrl+C
echo.

:: تشغيل السيرفر
npm run dev

pause 