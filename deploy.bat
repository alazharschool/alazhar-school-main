@echo off
echo ========================================
echo    نشر موقع مدرسة الأزهر
echo ========================================
echo.

echo [1/4] تنظيف الملفات المؤقتة...
if exist .next rmdir /s /q .next
if exist node_modules rmdir /s /q node_modules
if exist .vercel rmdir /s /q .vercel

echo [2/4] تثبيت الحزم...
npm install

echo [3/4] بناء المشروع...
npm run build

echo [4/4] فحص البناء...
if exist .next (
    echo ✅ تم البناء بنجاح!
    echo.
    echo 📋 خطوات النشر:
    echo 1. ارفع الكود إلى GitHub
    echo 2. اذهب إلى vercel.com
    echo 3. اربط المستودع
    echo 4. اضغط Deploy
    echo.
    echo 🌐 أو استخدم: npm run deploy
) else (
    echo ❌ فشل في البناء
    echo تحقق من الأخطاء أعلاه
)

echo.
echo ========================================
pause 