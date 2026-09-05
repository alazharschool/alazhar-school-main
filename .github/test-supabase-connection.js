// اختبار اتصال Supabase
const { createClient } = require('@supabase/supabase-js');

// قراءة متغيرات البيئة
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('🔍 فحص إعدادات Supabase...\n');

if (!supabaseUrl || supabaseUrl === 'YOUR_SUPABASE_URL') {
  console.log('❌ خطأ: NEXT_PUBLIC_SUPABASE_URL غير محدد');
  console.log('يرجى تحديث ملف .env.local');
  process.exit(1);
}

if (!supabaseKey || supabaseKey === 'YOUR_SUPABASE_ANON_KEY') {
  console.log('❌ خطأ: NEXT_PUBLIC_SUPABASE_ANON_KEY غير محدد');
  console.log('يرجى تحديث ملف .env.local');
  process.exit(1);
}

console.log('✅ متغيرات البيئة محددة بشكل صحيح');
console.log(`URL: ${supabaseUrl}`);
console.log(`Key: ${supabaseKey.substring(0, 20)}...\n`);

// إنشاء عميل Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    console.log('🔄 اختبار الاتصال بقاعدة البيانات...');
    
    // اختبار الاتصال البسيط
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(1);
    
    if (error) {
      if (error.code === 'PGRST116') {
        console.log('✅ الاتصال يعمل! جدول users موجود');
      } else {
        console.log('⚠️  تحذير:', error.message);
      }
    } else {
      console.log('✅ الاتصال يعمل! تم الوصول لقاعدة البيانات');
    }
    
    // اختبار إنشاء مستخدم تجريبي
    console.log('\n🔄 اختبار إنشاء مستخدم تجريبي...');
    const testUser = {
      email: 'test@alazhar.com',
      name: 'مستخدم تجريبي',
      user_type: 'student'
    };
    
    const { data: insertData, error: insertError } = await supabase
      .from('users')
      .insert([testUser])
      .select();
    
    if (insertError) {
      if (insertError.code === '23505') {
        console.log('✅ المستخدم التجريبي موجود بالفعل');
      } else {
        console.log('❌ خطأ في إنشاء المستخدم:', insertError.message);
      }
    } else {
      console.log('✅ تم إنشاء المستخدم التجريبي بنجاح');
      
      // حذف المستخدم التجريبي
      await supabase
        .from('users')
        .delete()
        .eq('email', 'test@alazhar.com');
      console.log('🗑️  تم حذف المستخدم التجريبي');
    }
    
    console.log('\n🎉 اختبار الاتصال مكتمل بنجاح!');
    console.log('Supabase يعمل بشكل صحيح مع مشروعك');
    
  } catch (error) {
    console.log('❌ خطأ في الاتصال:', error.message);
    console.log('تأكد من:');
    console.log('1. صحة URL و API Key');
    console.log('2. تطبيق schema قاعدة البيانات');
    console.log('3. إعدادات الأمان في Supabase');
  }
}

testConnection();
