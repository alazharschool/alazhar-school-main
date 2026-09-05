@echo off
title Al-Azhar School Server - Auto Start

:: تعيين مسار المشروع
set PROJECT_PATH=C:\Users\hp\Downloads\alazhar-school
cd /d "%PROJECT_PATH%"

:: انتظار قليل لضمان تحميل النظام
timeout /t 15 /nobreak >nul

:: التحقق من وجود Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js غير مثبت. يرجى تثبيت Node.js أولاً.
    pause
    exit /b 1
)

:: التحقق من وجود التبعيات
if not exist "node_modules" (
    echo تثبيت التبعيات...
    npm install
)

:: تشغيل السيرفر في نافذة منفصلة
start "Al-Azhar School Server" cmd /k "cd /d %PROJECT_PATH% && npm run dev"

:: إظهار رسالة تأكيد
echo.
echo ========================================
echo    تم تشغيل سيرفر Al-Azhar School
echo ========================================
echo.
echo السيرفر متاح على: http://localhost:3000
echo.
echo للوصول إلى السيرفر، افتح المتصفح واذهب إلى:
echo http://localhost:3000
echo.
echo للوقف، أغلق نافذة السيرفر
echo.
timeout /t 10 /nobreak >nul 