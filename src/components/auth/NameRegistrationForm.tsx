import React, { useState } from 'react';
import { saveUserName } from '../../services/authService';
import { useAuthContext } from '../../context/AuthContext';

export default function NameRegistrationForm() {
  const { user, profile, refreshProfile } = useAuthContext();
  const [name, setName] = useState('');
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  if (!user) return null;
  if (profile?.name || user.displayName || done) return null;

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        setSaving(true);
        try {
          await saveUserName(name.trim());
          setDone(true);
        } finally {
          setSaving(false);
        }
      }}
      className="space-y-2"
    >
      <label className="block text-sm font-medium">Enter your display name</label>
      <input
        className="border rounded px-3 py-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={40}
        required
      />
      <button
        disabled={saving}
        className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded cursor-pointer disabled:opacity-50"
      >
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}