"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { supabaseAPI } from '@/lib/supabase-api';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface User {
  id?: string;
  name: string;
  email: string;
  userType: 'student' | 'teacher' | 'admin';
  // Backward-compatible alias for legacy references
  role?: 'student' | 'teacher' | 'admin';
  isLoggedIn: boolean;
  phone?: string;
  age?: string;
  country?: string;
  monthlyFees?: string;
  assignedTeacher?: string;
  subjects?: string[];
  status?: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, userData: Omit<User, 'isLoggedIn' | 'id'>) => Promise<void>;
  logout: () => Promise<void>;
  updateUserName: (name: string) => void;
  updateUserData: (userData: Partial<User>) => Promise<void>;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize Supabase auth listener
  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          await loadUserData(session.user);
        }
      } catch (error) {
        console.error('Error getting initial session:', error);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          await loadUserData(session.user);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const loadUserData = async (supabaseUser: SupabaseUser) => {
    try {
      const userData = await supabaseAPI.getUserByEmail(supabaseUser.email!);
      if (userData) {
        const user: User = {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          userType: userData.user_type,
          role: userData.user_type,
          isLoggedIn: true,
          phone: userData.phone,
          age: userData.age,
          country: userData.country,
          monthlyFees: userData.monthly_fees,
          assignedTeacher: userData.assigned_teacher,
          subjects: userData.subjects,
          status: userData.status
        };
        setUser(user);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      // Fallback to basic user data
      const user: User = {
        name: supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0] || 'User',
        email: supabaseUser.email!,
        userType: 'student',
        role: 'student',
        isLoggedIn: true
      };
      setUser(user);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      await supabaseAPI.signIn(email, password);
      // User data will be loaded by the auth state change listener
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, userData: Omit<User, 'isLoggedIn' | 'id'>) => {
    try {
      setLoading(true);
      
      // Create user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: userData.name,
            user_type: userData.userType
          }
        }
      });

      if (authError) throw authError;

      // Create user record in database
      if (authData.user) {
        await supabaseAPI.createUser({
          email: userData.email,
          name: userData.name,
          user_type: userData.userType,
          phone: userData.phone,
          age: userData.age,
          country: userData.country,
          monthly_fees: userData.monthlyFees,
          assigned_teacher: userData.assignedTeacher,
          subjects: userData.subjects,
          status: userData.status || 'Active'
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      try { console.error('Registration error (stringified):', JSON.stringify(error)); } catch(e) {}
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await supabaseAPI.signOut();
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateUserName = (name: string) => {
    if (user) {
      const updatedUser = { ...user, name };
      setUser(updatedUser);
    }
  };

  const updateUserData = async (userData: Partial<User>) => {
    if (user?.id) {
      try {
        const updatedUserData = await supabaseAPI.updateUser(user.id, {
          name: userData.name,
          phone: userData.phone,
          age: userData.age,
          country: userData.country,
          monthly_fees: userData.monthlyFees,
          assigned_teacher: userData.assignedTeacher,
          subjects: userData.subjects,
          status: userData.status
        });

        const updatedUser: User = {
          ...user,
          name: updatedUserData.name,
          phone: updatedUserData.phone,
          age: updatedUserData.age,
          country: updatedUserData.country,
          monthlyFees: updatedUserData.monthly_fees,
          assignedTeacher: updatedUserData.assigned_teacher,
          subjects: updatedUserData.subjects,
          status: updatedUserData.status
        };

        setUser(updatedUser);
      } catch (error) {
        console.error('Error updating user data:', error);
        throw error;
      }
    }
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      updateUserName, 
      updateUserData, 
      loading 
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
} 