const { createClient } = require('@supabase/supabase-js');

VITE_SUPABASE_URL = 'https://lwxxxxjdxlfdiiihybrl.supabase.co';
VITE_SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3eHh4eGpkeGxmZGlpaWh5YnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU5Mjg0MDIsImV4cCI6MTk4MTUwNDQwMn0.WzJtTyCKeWq6BH_KNp79lfhINhsXoNSSr6pYsuF_twY';

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

module.exports = { supabase };
