"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <Card className="enhanced-card rounded-2xl shadow-lg max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            حدث خطأ غير متوقع!
          </CardTitle>
          <CardDescription className="text-gray-600">
            عذراً، حدث خطأ في تحميل هذه الصفحة
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-700 font-medium">تفاصيل الخطأ:</p>
            <p className="text-xs text-red-600 mt-1">{error.message}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
      <button
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4" />
        إعادة المحاولة
      </button>
            <Link
              href="/"
              className="flex-1 flex items-center justify-center gap-2 border-2 border-amber-200 text-amber-700 hover:bg-amber-50 py-3 px-4 rounded-xl font-semibold transition-all duration-300"
            >
              <Home className="w-4 h-4" />
              العودة للرئيسية
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 