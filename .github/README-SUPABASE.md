# 🚀 إعداد Supabase السريع

## 📋 الملفات المتوفرة

- **`SUPABASE_SETUP_GUIDE.md`** - دليل مفصل خطوة بخطوة
- **`setup-supabase.ps1`** - script PowerShell (مفضل)
- **`setup-supabase.bat`** - script Windows Command Prompt
- **`test-supabase-connection.js`** - اختبار الاتصال

## ⚡ البدء السريع

### الطريقة الأولى: PowerShell (مفضلة)
```powershell
.\setup-supabase.ps1
```

### الطريقة الثانية: Windows Command Prompt
```cmd
setup-supabase.bat
```

### الطريقة الثالثة: يدوياً
1. اتبع `SUPABASE_SETUP_GUIDE.md`
2. شغل `node test-supabase-connection.js`

## 🔑 ما تحتاجه

1. **مشروع Supabase جديد** من [supabase.com](https://supabase.com)
2. **Project URL** من Settings → API
3. **anon public key** من Settings → API
4. **تطبيق schema** قاعدة البيانات

## 📝 تحديث ملف البيئة

أضف في `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## ✅ بعد الإعداد

1. أعد تشغيل السيرفر: `npm run dev`
2. جرب تسجيل دخول جديد
3. تحقق من إنشاء المستخدمين في قاعدة البيانات

## 🆘 المساعدة

- راجع `SUPABASE_SETUP_GUIDE.md` للتفاصيل الكاملة
- تأكد من تطبيق schema قاعدة البيانات
- تحقق من إعدادات RLS في Supabase
