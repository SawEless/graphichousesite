'use client';
import { useEffect, useState } from 'react';

export default function TestAPI() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://graphichousefinal.onrender.com/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Services ({services.length})</h1>
      <pre>{JSON.stringify(services, null, 2)}</pre>
    </div>
  );
}