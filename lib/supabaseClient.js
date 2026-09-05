// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xxxx.supabase.co'; // استبدل بـ URL بتاع مشروعك
const supabaseAnonKey = 'your-anon-key'; // استبدل بـ anon key بتاعك من Supabase

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
