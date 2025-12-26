'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/context/UserContext';
import Link from 'next/link';

export default function AdminDashboard() {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/welcome'); // redirige si pas admin
    }
  }, [user, router]);

  if (!user || user.role !== 'admin') return <p>Redirection...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tableau de bord Admin</h1>
      <p>Bienvenue {user.name} ! Vous avez un accès complet aux fonctionnalités administratives.</p>

      <nav style={{ margin: '2rem 0' }}>
        <Link href="/admin/users" style={{ marginRight: '1rem' }}>
          Gestion des utilisateurs
        </Link>
        <Link href="/admin/reports">
          Gestion des plaintes
        </Link>
      </nav>

      <section>
        <h2>Statistiques rapides</h2>
        <ul>
          <li>Total utilisateurs : 1500</li>
          <li>Total signalements : 12000</li>
          <li>Signalements résolus : 9000</li>
        </ul>
      </section>
    </div>
  );
}
