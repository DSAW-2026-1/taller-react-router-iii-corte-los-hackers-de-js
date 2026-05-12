import { Link } from "react-router";
import './../App.css'

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/users/User">User</Link>
        </nav>
    );
}