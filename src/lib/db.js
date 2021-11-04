import { createClient } from '@supabase/supabase-js'
// const supabase = createClient(
//    import.meta.env.VITE_SUPABASE_URL,
//    import.meta.env.VITE_SUPABASE_ANON_KEY

//    const supabaseUrl = process.env.VITE_SUPABASE_URL
// const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY
// )
// export default supabase
// const supabaseUrl = percess.env.SVELTE_APP_SUPABASE_URL
// const supabaseAnonKey = process.env.SVELTE_APP_SUPABASE_ANON_KEY

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

 const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
 const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient( SUPABASE_URL, SUPABASE_ANON_KEY)