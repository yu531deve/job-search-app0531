# 課題 ③ 求人検索アプリ（Next.js + Supabase 版）

## 概要

本アプリは Next.js と Supabase を使用し、求人情報の一覧表示・詳細表示・投稿・削除・お気に入り機能を実装したものです。課題 ②（React + Rails API）と同じ UI・機能を再現しています。

---

## 使用技術

- Next.js (App Router)
- React (Client Component & Server Component)
- Supabase (DB + API)
- Tailwind CSS

---

## 実装機能

- 求人一覧取得（Supabase 連携）
- 求人詳細表示
- 求人投稿機能
- カテゴリ・年収フィルタ機能
- お気に入り登録機能
- お気に入り以外の削除機能
- 投稿後、自動的に一覧ページへ遷移
- 課題 ② と同じ UI デザイン

---

## 動作確認方法

1. `.env` ファイルに以下を設定

NEXT_PUBLIC_SUPABASE_URL=xxxxxxxxxxxxxxxxxxx NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxxxxxxxxxxxxxxxx

2. ローカルサーバー起動

```bash
npm run dev

3. ブラウザで http://localhost:3000 にアクセス

その他
Supabaseの Row Level Security (RLS) は無効化済み

is_favorite カラムを追加済み
```
