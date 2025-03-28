// supabaseClient.ts

import { createClient } from "@supabase/supabase-js";

// .env ファイルから設定を読み込む
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// supabaseインスタンスを作成
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
