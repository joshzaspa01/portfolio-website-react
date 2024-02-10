import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { menuIcon, logo } from '../../assets';
import './Navbar.css'
import { showSidebar } from '../../utils/utlilities'
import { bounceAnimation } from '../../utils/animationHelpers';
import { animated } from '@react-spring/web';

function Navbar() {
    
    const bounceAnim = bounceAnimation()

    return (
        <>
            <animated.nav style={bounceAnim} className="navbar">
                <Link to='/' className="logo_holder">
                    <img src={logo} alt=""/>
                </Link>

                <ul className="navbar_items">
                    <CustomLink to='/'>HOME</CustomLink>
                    <CustomLink to='/projects'>PROJECTS</CustomLink>
                    <CustomLink to='/about'>ABOUT</CustomLink>
                    <CustomLink to='/contact'>CONTACT</CustomLink>
                </ul>

                <button className="hamburger_menu" onClick={showSidebar}>
                    <img id="menu_icon" src={menuIcon} alt=""/>
                </button> 
            </animated.nav>

        </>
    )
}

interface CustomLinkProps {
    to: string,
    children: string
}

function CustomLink(props: CustomLinkProps) {

    const resolvedPath = useResolvedPath(props.to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className="nav_item" id={isActive ? 'active_nav_item': ''}>
            <Link className="nav_link" to={props.to}>{props.children}</Link>
        </li>
    )
}

export default Navbar;