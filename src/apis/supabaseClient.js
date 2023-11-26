import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabaseUrl = "https://qnvqlqjzvmvkfuhtdevm.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFudnFscWp6dm12a2Z1aHRkZXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMjA5MDcsImV4cCI6MjAxNjU5NjkwN30.qur2TE2RiC8uQBuBLBHLTzjo0l32o7pKX1njglc_Gew"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)