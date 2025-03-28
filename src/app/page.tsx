import { supabase } from "../lib/supabaseClient";

export default async function HomePage() {
  const { data, error } = await supabase.from("jobs").select("*");

  if (error) {
    console.error("求人取得エラー:", error.message);
    return <div>求人情報の取得に失敗しました。</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">求人一覧</h1>
      <ul className="space-y-4">
        {data?.map((job) => (
          <li key={job.id} className="p-4 border rounded">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>カテゴリ: {job.category}</p>
            <p>年収: {job.salary}万円</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
