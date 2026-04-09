export async function POST(request: Request) {
  const { prompt } = await request.json();

  // BUG: Hardcoded API Key
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': 'sk-ant-fake-key-for-testing-12345',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6-20250514',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  // BUG: Keine Fehlerbehandlung, kein Rate-Limiting
  const data = await response.json();
  console.log('AI response:', data);
  return Response.json(data);
}
