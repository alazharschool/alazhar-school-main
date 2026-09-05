# تشغيل سيرفر Al-Azhar School
Write-Host "========================================" -ForegroundColor Green
Write-Host "   تشغيل سيرفر Al-Azhar School" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# التحقق من وجود Node.js
try {
    $nodeVersion = node --version
    Write-Host "Node.js موجود: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "خطأ: Node.js غير مثبت أو غير موجود في PATH" -ForegroundColor Red
    Write-Host "يرجى تثبيت Node.js من https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "اضغط Enter للخروج"
    exit 1
}

# التحقق من وجود package.json
if (-not (Test-Path "package.json")) {
    Write-Host "خطأ: ملف package.json غير موجود" -ForegroundColor Red
    Write-Host "تأكد من أنك في المجلد الصحيح للمشروع" -ForegroundColor Yellow
    Read-Host "اضغط Enter للخروج"
    exit 1
}

# التحقق من وجود node_modules
if (-not (Test-Path "node_modules")) {
    Write-Host "تثبيت التبعيات..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "خطأ في تثبيت التبعيات" -ForegroundColor Red
        Read-Host "اضغط Enter للخروج"
        exit 1
    }
}

Write-Host ""
Write-Host "بدء تشغيل السيرفر..." -ForegroundColor Green
Write-Host "السيرفر سيكون متاحاً على: http://localhost:3000" -ForegroundColor Cyan
Write-Host "للوقف اضغط Ctrl+C" -ForegroundColor Yellow
Write-Host ""

# تشغيل السيرفر
npm run dev 