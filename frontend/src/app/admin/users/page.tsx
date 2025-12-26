'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/context/UserContext';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function AdminUsers() {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/welcome');
    }
  }, [user, router]);

  if (!user || user.role !== 'admin') return <p>Redirection...</p>;

  // Exemple mock utilisateurs
  const users: UserData[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'user' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'admin' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'police' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Gestion des utilisateurs</h1>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
