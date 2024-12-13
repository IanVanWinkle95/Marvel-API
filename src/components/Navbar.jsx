import { Link } from "react-router-dom"

export const Navbar = function () {
    return (
        <>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/contact">Contact</Link>
        <br/>
        <Link to="/services">Services</Link>
        <br/>
        </>
    )
}