"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User,
  Mail,
  Phone,
  Shield,
  Settings as SettingsIcon,
  Key
} from "lucide-react";

export default function SettingsPage() {
  const { user } = useUser();
  const router = useRouter();

  // Redirect if not logged in (client-side only)
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

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
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4" 
              style={{
              textShadow: '0 4px 16px #000, 0 2px 8px #000',
              WebkitTextStroke: '1px #8B4513'
              }}
            >
            Account Settings
              </h1>
          <p className="text-lg text-white/90" style={{textShadow: '0 2px 8px #000'}}>
            View your account information and login details
              </p>
        </div>

        {/* User Information */}
        <Card className="rounded-2xl shadow-2xl border-2 border-amber-200 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
              <User className="w-6 h-6 text-amber-600" />
              Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl">
                <Mail className="w-5 h-5 text-amber-600" />
                    <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{user.email}</p>
                </div>
                </div>

              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl">
                <User className="w-5 h-5 text-amber-600" />
                    <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                </div>
                </div>

              {user.phone && (
                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl">
                  <Phone className="w-5 h-5 text-amber-600" />
                    <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-900">{user.phone}</p>
                  </div>
                </div>
              )}
              
              {user.userType && (
                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl">
                  <Shield className="w-5 h-5 text-amber-600" />
                    <div>
                    <p className="text-sm text-gray-600">Account Type</p>
                    <p className="font-semibold text-gray-900 capitalize">{user.userType}</p>
                  </div>
                </div>
              )}
                  </div>

            {/* Login Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <Key className="w-4 h-4" />
                Login Information:
              </h4>
              <div className="text-sm text-blue-700 space-y-2">
                <p><strong>Username:</strong> {user.email}</p>
                <p><strong>Password:</strong> student123 (Standard for all students)</p>
                <p className="text-xs text-blue-600 mt-2">
                  Note: All students use the same password for simplicity. Each student has a unique email address.
                </p>
                  </div>
                </div>
              </CardContent>
            </Card>

        {/* Back to Dashboard */}
        <div className="text-center mt-8">
                    <Button
            onClick={() => router.push('/dashboard')}
            variant="outline"
            className="border-amber-200 text-amber-700 hover:bg-amber-50 rounded-xl font-semibold transition-all duration-200"
          >
            <SettingsIcon className="w-4 h-4 mr-2" />
            Back to Dashboard
                    </Button>
                  </div>
                </div>
    </div>
  );
} 