import Nav from "./Nav";
import NavMobile from "./NavMobile";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="navBar">
            <Nav />
            <NavMobile />
        </div>
    )
}

export default NavBar;