@echo off
:: تشغيل سيرفر Al-Azhar School تلقائيًا عند بدء تشغيل الجهاز

:: الانتقال إلى مجلد المشروع
cd /d "%~dp0"

:: انتظار قليل لضمان تحميل النظام بالكامل
timeout /t 10 /nobreak >nul

:: تشغيل السيرفر في الخلفية
start "Al-Azhar School Server" cmd /c "npm run dev"

:: إظهار رسالة تأكيد
echo تم تشغيل سيرفر Al-Azhar School تلقائيًا
echo السيرفر متاح على: http://localhost:3000
timeout /t 5 /nobreak >nul 