import { supabase } from '@/lib/supabase';

export async function GET() {
  console.log('Fetching users...');
  const { data } = await supabase.from('users').select('*');
  console.log('Found users:', data?.length);
  return Response.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('Creating user:', body);
  // BUG: Keine Validierung, kein try/catch, kein Auth-Check
  const { data } = await supabase.from('users').insert(body);
  return Response.json(data);
}
