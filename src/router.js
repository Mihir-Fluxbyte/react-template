import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Layout from "./@shared/layout/Layout";
import AuthGuard from "./@shared/Guards/AuthGuard";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Layout />}>
          <Route element={<AuthGuard />}>
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

// <Route  element={<AuthGuard />}>
//   <Route path="home" element={<Home />} />
// </Route>
// <Route path="home1" element={<AuthGuard><Home /></AuthGuard>} />
