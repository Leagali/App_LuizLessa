import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vhjzobdjkihhgcjjnquo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoanpvYmRqa2loaGdjampucXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwOTUwNTYsImV4cCI6MjA0MjY3MTA1Nn0.0Ch8eKMIdIkmMRMlTdS-tvd7XE-NqnWBNk3JB1kEZvk';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };