export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>CI/CD TEST</h1>
      <p>If you see this, deployment works.</p>
      <p>{new Date().toISOString()}</p>
    </main>
  );
}
