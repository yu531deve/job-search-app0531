import { supabase } from "../../../lib/supabaseClient";

type JobDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = params;

  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("求人取得エラー:", error.message);
    return <div>求人情報の取得に失敗しました。</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <p>カテゴリ: {data.category}</p>
      <p>年収: {data.salary}万円</p>
      <p className="mt-4">{data.description}</p>
    </div>
  );
}
