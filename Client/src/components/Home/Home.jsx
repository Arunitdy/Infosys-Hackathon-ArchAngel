export default function Home({ userData }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {userData?.name || "Guest"}!</h1>
      <p>Email: {userData?.email}</p>
      <p>Role: {userData?.role}</p>
    </div>
  );
}
