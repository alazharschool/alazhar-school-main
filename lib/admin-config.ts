// Admin Configuration
// يمكنك تغيير بيانات اعتماد المدير هنا
export const ADMIN_CONFIG = {
  // بيانات اعتماد المدير
  credentials: {
    username: "admin2024",
    password: "Admin@2024!"
  },
  
  // إعدادات الجلسة
  session: {
    timeout: 24 * 60 * 60 * 1000, // 24 ساعة
    storageKey: "adminSession"
  },
  
  // إعدادات الأمان
  security: {
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000, // 15 دقيقة
    requireStrongPassword: true
  }
};

// دالة للتحقق من قوة كلمة المرور
export function validatePassword(password: string): boolean {
  if (!ADMIN_CONFIG.security.requireStrongPassword) return true;
  
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}

// دالة لتحديث بيانات الاعتماد
export function updateAdminCredentials(newUsername: string, newPassword: string): boolean {
  if (!validatePassword(newPassword)) {
    throw new Error("كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص");
  }
  
  // في التطبيق الحقيقي، هنا ستقوم بحفظ البيانات في قاعدة البيانات
  // أو في ملف إعدادات آمن
  ADMIN_CONFIG.credentials.username = newUsername;
  ADMIN_CONFIG.credentials.password = newPassword;
  
  return true;
}
