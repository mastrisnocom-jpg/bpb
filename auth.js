// auth.js
const SUPABASE_URL = 'https://fmlotqntqxbmsvivvgnw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_xcjfrcsPC9WV3mlwKeZ2_Q_e5vjsroM';
const SUPER_ADMIN_EMAIL = 'mastrisnocom@gmail.com';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true }
});

let currentUser = null;
let isSuperAdmin = false;
