import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Call /user/userprofile to check session and fetch user
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_KEY + "user/userprofile",
          {
            method: "GET",
            credentials: "include", // send session cookie
          }
        );

        if (!response.ok) {
          navigate("/login", { replace: true });
          return;
        }

        const data = await response.json();
        setUser(data.data);
      } catch (error) {
        console.error("Auth check failed:", error);
        navigate("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [navigate]);

  async function handleLogout() {
    try {
      await fetch(import.meta.env.VITE_API_KEY + "user/logout", {
        method: "POST",
        credentials: "include",
      });

      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  if (loading) return <p>Loading...</p>;

  if (!user) return null;

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Dashboard</h2>
        <button
          onClick={handleLogout}
          style={{ padding: "10px 14px", cursor: "pointer" }}
        >
          Logout
        </button>
      </div>

      <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 10 }}>
        <h3>Logged-in User Info</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            rowGap: 10,
          }}
        >
          <strong>First Name</strong> <span>{user.u_first_name}</span>
          <strong>Last Name</strong> <span>{user.u_last_name}</span>
          <strong>Email</strong> <span>{user.u_email}</span>
        </div>
      </div>
    </div>
  );
}