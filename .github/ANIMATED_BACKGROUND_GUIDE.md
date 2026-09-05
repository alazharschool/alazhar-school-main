# دليل استخدام مكون الانيميشن الخلفية

## 📋 نظرة عامة

مكون `AnimatedBackground` يوفر انيميشن الكرات المتحركة والأنماط الهندسية لجميع صناديق العناوين في الموقع.

## 🎨 المكونات المتاحة

### 1. `AnimatedBackground` - المكون الرئيسي
```tsx
import { AnimatedBackground } from "@/components/animated-background"

<AnimatedBackground 
  variant="all" 
  intensity="medium" 
  color="amber"
  className="p-6 rounded-lg"
>
  <h2>عنوان الصندوق</h2>
  <p>محتوى الصندوق</p>
</AnimatedBackground>
```

### 2. `QuickAnimatedBackground` - للاستخدام السريع
```tsx
import { QuickAnimatedBackground } from "@/components/animated-background"

<QuickAnimatedBackground className="p-6 rounded-lg">
  <h2>عنوان الصندوق</h2>
  <p>محتوى الصندوق</p>
</QuickAnimatedBackground>
```

### 3. `HeroAnimatedBackground` - للعناوين الرئيسية
```tsx
import { HeroAnimatedBackground } from "@/components/animated-background"

<HeroAnimatedBackground className="p-8 rounded-xl">
  <h1>العنوان الرئيسي</h1>
  <p>وصف العنوان</p>
</HeroAnimatedBackground>
```

### 4. `CardAnimatedBackground` - للبطاقات
```tsx
import { CardAnimatedBackground } from "@/components/animated-background"

<CardAnimatedBackground className="p-4 rounded-lg">
  <h3>عنوان البطاقة</h3>
  <p>محتوى البطاقة</p>
</CardAnimatedBackground>
```

## ⚙️ الخيارات المتاحة

### `variant` - نوع الانيميشن
- `'geometric'` - الأنماط الهندسية فقط
- `'particles'` - الجزيئات المتحركة فقط
- `'shimmer'` - خطوط التوهج فقط
- `'all'` - جميع الأنواع (افتراضي)

### `intensity` - كثافة الانيميشن
- `'subtle'` - خفيف جداً
- `'medium'` - متوسط (افتراضي)
- `'strong'` - قوي

### `color` - لون الانيميشن
- `'amber'` - كهرماني (افتراضي)
- `'gold'` - ذهبي
- `'orange'` - برتقالي
- `'custom'` - مخصص

### `customColor` - لون مخصص
```tsx
<AnimatedBackground 
  color="custom"
  customColor="border-blue-600/20 bg-blue-400/30 via-blue-400/20"
>
  محتوى
</AnimatedBackground>
```

## 📝 أمثلة الاستخدام

### مثال 1: صندوق عنوان عادي
```tsx
<QuickAnimatedBackground className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">عنوان الصندوق</h2>
  <p className="text-gray-700">محتوى الصندوق مع انيميشن جميل</p>
</QuickAnimatedBackground>
```

### مثال 2: بطاقة خدمة
```tsx
<CardAnimatedBackground className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200">
  <div className="text-center">
    <h3 className="text-xl font-bold text-amber-800 mb-2">حفظ القرآن</h3>
    <p className="text-amber-700">تعلم حفظ القرآن الكريم مع أفضل المشايخ</p>
  </div>
</CardAnimatedBackground>
```

### مثال 3: عنوان رئيسي
```tsx
<HeroAnimatedBackground className="bg-gradient-to-r from-amber-600 to-orange-600 p-8 rounded-2xl text-white">
  <h1 className="text-4xl font-bold mb-4">مرحباً بكم في مدرسة الأزهر</h1>
  <p className="text-xl">تعلم القرآن الكريم والعلوم الإسلامية</p>
</HeroAnimatedBackground>
```

### مثال 4: صندوق معلومات
```tsx
<AnimatedBackground 
  variant="particles" 
  intensity="subtle" 
  color="gold"
  className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-yellow-200"
>
  <h3 className="text-lg font-semibold text-yellow-800 mb-2">معلومات مهمة</h3>
  <p className="text-yellow-700">معلومات مهمة مع انيميشن خفيف</p>
</AnimatedBackground>
```

## 🎯 أفضل الممارسات

### 1. اختيار الكثافة المناسبة
- **subtle**: للمحتوى النصي الطويل
- **medium**: للعناوين والبطاقات
- **strong**: للعناوين الرئيسية فقط

### 2. اختيار النوع المناسب
- **geometric**: للبطاقات والصناديق
- **particles**: للمحتوى التفاعلي
- **shimmer**: للعناوين المهمة
- **all**: للعناوين الرئيسية

### 3. اختيار اللون المناسب
- **amber**: للتصميم العام
- **gold**: للعناوين المهمة
- **orange**: للتنبيهات والمعلومات
- **custom**: للتصميمات الخاصة

## 🚀 تطبيق على الصفحات

### صفحة الخدمات
```tsx
// في app/services/page.tsx
import { CardAnimatedBackground } from "@/components/animated-background"

{services.map((service) => (
  <CardAnimatedBackground key={service.id} className="p-6 rounded-xl">
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </CardAnimatedBackground>
))}
```

### صفحة التسعير
```tsx
// في app/pricing/page.tsx
import { QuickAnimatedBackground } from "@/components/animated-background"

{pricingPlans.map((plan) => (
  <QuickAnimatedBackground key={plan.id} className="p-6 rounded-xl">
    <h3>{plan.name}</h3>
    <p>{plan.price}</p>
  </QuickAnimatedBackground>
))}
```

### صفحة الاتصال
```tsx
// في app/contact/page.tsx
import { HeroAnimatedBackground } from "@/components/animated-background"

<HeroAnimatedBackground className="p-8 rounded-2xl">
  <h1>تواصل معنا</h1>
  <p>نحن هنا لمساعدتك</p>
</HeroAnimatedBackground>
```

## ⚡ تحسين الأداء

- استخدم `variant="geometric"` للعناصر الكثيرة
- استخدم `intensity="subtle"` للصفحات الطويلة
- تجنب استخدام `variant="all"` مع `intensity="strong"` في نفس الصفحة

---

*آخر تحديث: أغسطس 2024*
