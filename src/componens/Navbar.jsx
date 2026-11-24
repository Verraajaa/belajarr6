import { Link, useNavigate } from "react-router";

function Navbar({isLoggedIn, setIsLoggedIn}) {
    const navigate = useNavigate();

    function handleLogout() {
        setIsLoggedIn(false);
        navigate("/login");
    }
    function handleLogin() {
        setIsLoggedIn(true);
        navigate("/");
    }
    return(
        <nav className="navbar">
            <Link to="/">Dashboard</Link>
            <Link to="about">About</Link>
            <Link to="setting">Setting</Link>

            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
                // <Link to="/login">Login</Link>
            )}
        </nav>
    );
}

export default Navbar;