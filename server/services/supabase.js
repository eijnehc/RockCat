const { createClient } = require('@supabase/supabase-js');

const VITE_SUPABASE_URL = 'https://lwxxxxjdxlfdiiihybrl.supabase.co';
const VITE_SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3eHh4eGpkeGxmZGlpaWh5YnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU5Mjg0MDIsImV4cCI6MTk4MTUwNDQwMn0.WzJtTyCKeWq6BH_KNp79lfhINhsXoNSSr6pYsuF_twY';
const SERVICE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3eHh4eGpkeGxmZGlpaWh5YnJsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NTkyODQwMiwiZXhwIjoxOTgxNTA0NDAyfQ.q22G2aQJx2xZB08DptKfHY7Q6JUDF86q8SqEAzbZApY';

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);
const supabase_admin = createClient(VITE_SUPABASE_URL, SERVICE_KEY);

module.exports = { supabase, supabase_admin };
