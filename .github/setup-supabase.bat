@echo off
chcp 65001 >nul
echo ========================================
echo    إعداد Supabase لمشروع Al-Azhar School
echo ========================================
echo.

REM فحص وجود ملف .env.local
if not exist ".env.local" (
    echo ❌ خطأ: ملف .env.local غير موجود
    echo يرجى إنشاء الملف أولاً
    pause
    exit /b 1
)

echo 🔍 فحص ملف .env.local...
findstr "YOUR_SUPABASE_URL" .env.local >nul
if %errorlevel% equ 0 (
    echo ❌ متغيرات Supabase غير محددة
    echo.
    echo 📋 يرجى اتباع الخطوات التالية:
    echo.
    echo 1. اذهب إلى https://supabase.com
    echo 2. أنشئ مشروع جديد
    echo 3. انسخ Project URL و anon key
    echo 4. حدث ملف .env.local
    echo.
    echo 📁 ملف .env.local يجب أن يحتوي على:
    echo NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
    echo NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
    echo.
    
    set /p choice="هل تريد فتح ملف .env.local للتعديل؟ (y/n): "
    if /i "%choice%"=="y" (
        notepad ".env.local"
    )
    
    pause
    exit /b 1
)

echo ✅ متغيرات Supabase محددة

echo.
echo 🔧 تثبيت dotenv إذا لم يكن مثبتاً...
npm install dotenv --save-dev

echo.
echo 🧪 اختبار الاتصال...
node "test-supabase-connection.js"

echo.
echo 🎯 الخطوات التالية:
echo 1. تأكد من تطبيق schema قاعدة البيانات في Supabase
echo 2. أعد تشغيل السيرفر: npm run dev
echo 3. جرب تسجيل دخول جديد
echo.
echo 📚 راجع ملف SUPABASE_SETUP_GUIDE.md للمزيد من التفاصيل
pause
