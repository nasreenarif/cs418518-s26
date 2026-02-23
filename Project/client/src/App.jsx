import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./Dashboard.jsx";
import Header from "./Header.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
function App() {

  return (
    <>
      {/* <Image></Image>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <UserInfo name="Nasreen" course="Cs418" >Nasreen is teaching CS418</UserInfo>
      <UserInfo name="Sara" course="CS518" ></UserInfo>
      <UserInfo name="John" course="Cs471" ></UserInfo>
      <UserInfo >This is userinfo</UserInfo> */}
      {/* <Signup onRegister={(user) => setSubmittedUser(user)} /> */}

      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />        
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
