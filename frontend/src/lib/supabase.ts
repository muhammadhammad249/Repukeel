/* eslint-disable */
import { createClient } from '@supabase/supabase-js';

// Real Supabase credentials as fallback (NEXT_PUBLIC anon keys are safe to be public)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://siiucfkyaigylhpdquif.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_6UAGk7cjIUx-VnNT6fYvzQ_pQ7rlAhW';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
