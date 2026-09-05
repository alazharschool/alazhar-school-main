"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  Loader2,
  Settings,
  Save,
  ArrowLeft
} from "lucide-react";
import { ADMIN_CONFIG, updateAdminCredentials, validatePassword } from "@/lib/admin-config";

export default function AdminSettingsPage() {
  const router = useRouter();
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newUsername, setNewUsername] = useState(ADMIN_CONFIG.credentials.username);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // التحقق من كلمة المرور الحالية
    if (currentPassword !== ADMIN_CONFIG.credentials.password) {
      setMessage({ type: 'error', text: 'كلمة المرور الحالية غير صحيحة' });
      return;
    }

    // التحقق من تطابق كلمة المرور الجديدة
    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'كلمة المرور الجديدة لا تتطابق مع التأكيد' });
      return;
    }

    // التحقق من قوة كلمة المرور
    if (!validatePassword(newPassword)) {
      setMessage({ 
        type: 'error', 
        text: 'كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص' 
      });
      return;
    }

    setIsLoading(true);
    setMessage(null);
    
    try {
      // تحديث بيانات الاعتماد
      updateAdminCredentials(newUsername, newPassword);
      
      setMessage({ 
        type: 'success', 
        text: 'تم تحديث بيانات الاعتماد بنجاح!' 
      });
      
      // مسح الحقول
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'حدث خطأ أثناء التحديث' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 relative"
      style={{
        backgroundImage: 'url("/backgrund1.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-md mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2" 
            style={{
              textShadow: '0 4px 16px #000, 0 2px 8px #000',
              WebkitTextStroke: '1px #8B4513'
            }}
          >
            إعدادات المدير
          </h1>
          <p className="text-white/90" style={{textShadow: '0 2px 8px #000'}}>
            تغيير بيانات اعتماد المدير
          </p>
        </div>

        {/* Settings Form */}
        <Card className="rounded-2xl shadow-2xl border-2 border-blue-200 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
              <Settings className="w-6 h-6 text-blue-600" />
              تغيير بيانات الاعتماد
            </CardTitle>
          </CardHeader>
          <CardContent>
            {message && (
              <Alert className={`mb-6 ${message.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <AlertCircle className={`w-4 h-4 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`} />
                <AlertDescription className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {message.text}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Current Password */}
              <div className="space-y-2">
                <Label htmlFor="currentPassword" className="text-gray-700 font-semibold">
                  كلمة المرور الحالية
                </Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showPasswords ? "text" : "password"}
                    placeholder="أدخل كلمة المرور الحالية"
                    className="pl-10 border-2 rounded-xl border-blue-200 focus:border-blue-400"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* New Username */}
              <div className="space-y-2">
                <Label htmlFor="newUsername" className="text-gray-700 font-semibold">
                  اسم المستخدم الجديد
                </Label>
                <Input
                  id="newUsername"
                  type="text"
                  placeholder="أدخل اسم المستخدم الجديد"
                  className="border-2 rounded-xl border-blue-200 focus:border-blue-400"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <Label htmlFor="newPassword" className="text-gray-700 font-semibold">
                  كلمة المرور الجديدة
                </Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showPasswords ? "text" : "password"}
                    placeholder="أدخل كلمة المرور الجديدة"
                    className="pl-10 border-2 rounded-xl border-blue-200 focus:border-blue-400"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(!showPasswords)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPasswords ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700 font-semibold">
                  تأكيد كلمة المرور
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showPasswords ? "text" : "password"}
                    placeholder="أعد إدخال كلمة المرور الجديدة"
                    className="pl-10 border-2 rounded-xl border-blue-200 focus:border-blue-400"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Password Requirements */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-semibold text-blue-800 mb-2">
                  متطلبات كلمة المرور:
                </h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <p>• 8 أحرف على الأقل</p>
                  <p>• حرف كبير (A-Z)</p>
                  <p>• حرف صغير (a-z)</p>
                  <p>• رقم (0-9)</p>
                  <p>• رمز خاص (!@#$%^&*)</p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    جاري التحديث...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    حفظ التغييرات
                  </>
                )}
              </Button>
            </form>

            {/* Back Button */}
            <div className="text-center mt-6">
              <Button
                onClick={() => router.push('/admin-dashboard')}
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50 rounded-xl font-semibold transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                العودة للوحة التحكم
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
