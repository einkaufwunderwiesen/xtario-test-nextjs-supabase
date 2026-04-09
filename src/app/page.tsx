import { supabase } from '@/lib/supabase';

export default async function Home() {
  const { data: users } = await supabase.from('users').select('*');

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Users: {users?.length || 0}</p>
    </main>
  );
}
