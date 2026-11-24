import { Link, Outlet } from "react-router";

function Setting() {
    return(
        <div className="container">
            <h1>Setting</h1>
            <p>Halaman pengaturan Student Dashboard</p>

            <nav>
                <Link to="profile">Profile</Link> | {" "}
                <Link to="account">Account</Link>
            </nav>

            <Outlet />
        </div>
    );
}

export default Setting;