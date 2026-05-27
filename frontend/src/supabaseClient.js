import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pekfawtqljqfhtfoxfqc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBla2Zhd3RxbGpxZmh0Zm94ZnFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NDc0ODUsImV4cCI6MjA5NTQyMzQ4NX0.hs4BX4gG7alPAbkmJORS4Z9gR1NKbIV9nqvp9De7gy8';

export const supabase = createClient(supabaseUrl, supabaseKey);

