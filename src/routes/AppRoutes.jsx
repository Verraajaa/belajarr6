import { Routes, Route } from "react-router";

import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Login from "../pages/Login";
import Setting from "../pages/Setting";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import TaskDetail from "../pages/TaskDetail";
import Protected from "../pages/Protected";

function AppRoutes({isLoggedIn, setIsLoggedIn}) {
    return(
        <Routes>
            <Route path="/" element={
                <Protected isLoggedIn={isLoggedIn}>
                    <Dashboard/>
                </Protected>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={
                <Login setIsLoggedIn={setIsLoggedIn} />
            } />

            <Route path="/tasks/:id" element={
                <Protected isLoggedIn={isLoggedIn}>
                    <TaskDetail />
                </Protected>
            } />
            
            <Route path="/setting" element={<Setting />}>
                <Route path="profile" element={<Profile />} />
                <Route path="account" element={<Account />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;