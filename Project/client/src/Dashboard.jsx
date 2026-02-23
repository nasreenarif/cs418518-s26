import { Navigate, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stored = localStorage.getItem("loggedInUser");
  const user = stored ? JSON.parse(stored) : null;

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/login", { replace: true });
  }

  // If no user, redirect immediately
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Dashboard</h2>
        <button onClick={handleLogout} style={{ padding: "10px 14px", cursor: "pointer" }}>
          Logout
        </button>
      </div>

      <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 10 }}>
        <h3>Logged-in User Info</h3>

        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", rowGap: 10 }}>
          
          <strong>First Name</strong> <span>{user.u_first_name}</span>
          <strong>Last Name</strong> <span>{user.u_last_name}</span>
          <strong>Email</strong> <span>{user.u_email}</span>
          
          
        </div>
      </div>
    </div>
  );
}