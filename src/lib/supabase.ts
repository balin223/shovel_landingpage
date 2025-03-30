import { createClient } from '@supabase/supabase-js';

// Direct URL and key assignment
const supabaseUrl = 'https://jdumqgqzepgruvsbjofl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkdW1xZ3F6ZXBncnV2c2Jqb2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNzM2NDcsImV4cCI6MjA1ODk0OTY0N30.lYuL3SPXRd5z7gXLqdYQTpb5JSCUbAZmlIuNj4K2Mxw';

console.log('Supabase Configuration:', {
  url: supabaseUrl,
  keyLength: supabaseAnonKey.length
});

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const addToWaitlist = async (email: string) => {
  try {
    console.log('Attempting to add email:', email);
    
    // First check if email already exists
    const { data: existing, error: existingError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (existingError) {
      console.error('Error checking existing email:', existingError);
    }

    if (existing) {
      console.log('Email already exists');
      return { success: false, error: 'Email already registered' };
    }

    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email, created_at: new Date().toISOString() }])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Successfully added:', data);
    return { success: true };
  } catch (error) {
    console.error('Detailed error:', error);
    return { success: false, error };
  }
}; 