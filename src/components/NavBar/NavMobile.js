import NavLinks from './NavLinks'
import './NavBar.css'
import {BiMenu} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import {useState} from 'react'


const NavMobile = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <BiMenu className="hamburger"
    onClick={()=> setOpen(!open)} />

    const closeIcon = <IoMdClose className="closer"
    onClick={()=> setOpen(!open)} />

    // const closeMobileMenu

    return (
        <nav className="navMobile">
            {open ? closeIcon : hamburgerIcon}
          {open && <NavLinks /> }
        </nav>
    )
}
export default NavMobile;