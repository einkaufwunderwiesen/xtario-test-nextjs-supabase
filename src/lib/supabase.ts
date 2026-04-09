import { createClient } from '@supabase/supabase-js';

// BUG: Hardcoded Supabase credentials
const supabaseUrl = 'https://abc123.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fake-key-for-testing';

export const supabase = createClient(supabaseUrl, supabaseKey);
