import { useNavigate } from "react-router";

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();

    function handleLogin() {
        setIsLoggedIn(true);
        navigate("/");
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <p>Silahkan login untuk mengakses Student Dashboard</p>
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default Login;