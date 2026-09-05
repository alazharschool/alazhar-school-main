# إعداد Supabase لمشروع Al-Azhar School
Write-Host "========================================" -ForegroundColor Green
Write-Host "   إعداد Supabase لمشروع Al-Azhar School" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# التحقق من وجود ملف .env.local
if (-not (Test-Path ".env.local")) {
    Write-Host "❌ خطأ: ملف .env.local غير موجود" -ForegroundColor Red
    Write-Host "يرجى إنشاء الملف أولاً" -ForegroundColor Yellow
    exit 1
}

Write-Host "🔍 فحص ملف .env.local..." -ForegroundColor Yellow
$envContent = Get-Content ".env.local"

# فحص متغيرات Supabase
$supabaseUrl = $envContent | Where-Object { $_ -match "NEXT_PUBLIC_SUPABASE_URL" }
$supabaseKey = $envContent | Where-Object { $_ -match "NEXT_PUBLIC_SUPABASE_ANON_KEY" }

if ($supabaseUrl -match "YOUR_SUPABASE_URL" -or $supabaseKey -match "YOUR_SUPABASE_ANON_KEY") {
    Write-Host "❌ متغيرات Supabase غير محددة" -ForegroundColor Red
    Write-Host ""
    Write-Host "📋 يرجى اتباع الخطوات التالية:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. اذهب إلى https://supabase.com" -ForegroundColor Cyan
    Write-Host "2. أنشئ مشروع جديد" -ForegroundColor Cyan
    Write-Host "3. انسخ Project URL و anon key" -ForegroundColor Cyan
    Write-Host "4. حدث ملف .env.local" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📁 ملف .env.local يجب أن يحتوي على:" -ForegroundColor Yellow
    Write-Host "NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co" -ForegroundColor White
    Write-Host "NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key" -ForegroundColor White
    Write-Host ""
    
    # فتح ملف .env.local للتعديل
    $editChoice = Read-Host "هل تريد فتح ملف .env.local للتعديل؟ (y/n)"
    if ($editChoice -eq "y" -or $editChoice -eq "Y") {
        notepad ".env.local"
    }
    
    exit 1
}

Write-Host "✅ متغيرات Supabase محددة" -ForegroundColor Green

# التحقق من تثبيت dotenv
Write-Host ""
Write-Host "🔧 تثبيت dotenv إذا لم يكن مثبتاً..." -ForegroundColor Yellow
npm install dotenv --save-dev

Write-Host ""
Write-Host "🧪 اختبار الاتصال..." -ForegroundColor Yellow

# تشغيل اختبار الاتصال
try {
    node "test-supabase-connection.js"
} catch {
    Write-Host "❌ خطأ في تشغيل اختبار الاتصال" -ForegroundColor Red
    Write-Host "تأكد من تثبيت جميع التبعيات" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎯 الخطوات التالية:" -ForegroundColor Green
Write-Host "1. تأكد من تطبيق schema قاعدة البيانات في Supabase" -ForegroundColor Cyan
Write-Host "2. أعد تشغيل السيرفر: npm run dev" -ForegroundColor Cyan
Write-Host "3. جرب تسجيل دخول جديد" -ForegroundColor Cyan
Write-Host ""
Write-Host "📚 راجع ملف SUPABASE_SETUP_GUIDE.md للمزيد من التفاصيل" -ForegroundColor Yellow
