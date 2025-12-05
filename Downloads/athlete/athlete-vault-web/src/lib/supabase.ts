import { createClient } from '@supabase/supabase-js';

// Hardcoding credentials temporarily to resolve environment variable loading issues on Windows
const supabaseUrl = 'https://zmtsqykqffctgmnomioy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptdHNxeWtxZmZjdGdtbm9taW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4OTQ5NzksImV4cCI6MjA4MDQ3MDk3OX0.UlfzXeMiXdCLjP4MW73MF1WPkE20OVmPI8rZaOrnFp4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
