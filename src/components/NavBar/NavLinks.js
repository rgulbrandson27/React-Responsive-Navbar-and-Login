import './NavBar.css'


const NavLinks = (props) => {
    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="#" className="nav-link">Home</a>
            </li>
            <li>
                <a href="#" className="nav-link">About</a>
            </li>
            <li>
                <a href="#" className="nav-link">Services</a>
            </li>
            <li>
                <a href="#" className="nav-link">Donate</a>
            </li>
            <li >
                <a href="#" className="nav-link">Contact</a>
            </li>              
        </ul>
    );
}

/* <li class="nav-item">
<a href="#" className="nav-link">Home</a>
</li> */

export default NavLinks;