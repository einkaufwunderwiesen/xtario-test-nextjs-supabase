'use client';
import { useState } from 'react';

export function UserForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  async function handleSubmit() {
    // BUG: Keine Validierung, keine Fehlerbehandlung
    const res = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, name }),
    });
    const data = await res.json();
    console.log('Created:', data);
  }

  return (
    <div className="space-y-4">
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="E-Mail"
        className="border p-2 rounded"
      />
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 rounded"
      />
      <button onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded">
        Erstellen
      </button>
    </div>
  );
}
