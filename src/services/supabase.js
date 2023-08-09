
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://rouqfntgjqdobkkphuec.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvdXFmbnRnanFkb2Jra3BodWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyMjY1MzAsImV4cCI6MjAwNjgwMjUzMH0.S14igkdrcoVivUEsk5Bd3X6jQNSZoYs3QGtP32MFG-o"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase