
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ddouchlnfypukmqfxijd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkb3VjaGxuZnlwdWttcWZ4aWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyODcwNTgsImV4cCI6MjAzODg2MzA1OH0.rRb1Ll7pvZGTlBvdSqQEk4cxBcKZxRpWFsX8ojhsmbM"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase