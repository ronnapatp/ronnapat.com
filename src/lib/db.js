import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
   import.meta.env.VITE_SUPABASE_URL,
   import.meta.env.VITE_SUPABASE_ANON_KEY

//    const supabaseUrl = process.env.VITE_SUPABASE_URL
// const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY
)
export default supabase