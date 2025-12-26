'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/context/UserContext';

interface Report {
  id: number;
  title: string;
  status: 'Soumis' | 'En cours' | 'Résolu';
  date: string;
}

export default function AdminReports() {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/welcome');
    }
  }, [user, router]);

  if (!user || user.role !== 'admin') return <p>Redirection...</p>;

  const reports: Report[] = [
    { id: 1, title: 'Vol de vélo', status: 'En cours', date: '2025-12-01' },
    { id: 2, title: 'Agression', status: 'Résolu', date: '2025-11-20' },
    { id: 3, title: 'Trafic de drogue', status: 'Soumis', date: '2025-12-15' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Gestion des plaintes</h1>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Statut</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.title}</td>
              <td>{r.status}</td>
              <td>{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
