import { Link } from 'react-router-dom';
import { menuIcon, logo, closeIcon } from '../../assets';
import './Navbar.css'
import { bounceAnimation } from '../../utils/animationHelpers';
import { animated } from '@react-spring/web';
import { CustomLink } from '..';
import { useSidebarContext } from '../../context/SidebarContext';


function Navbar() {
    
    const bounceAnim = bounceAnimation() 

    const { overlaySetter, overlaySpring} = useSidebarContext()

    return (
        <>
            <animated.nav style={bounceAnim} className="navbar">
                <Link to='/' className="logo_holder">
                    <img src={logo} alt=""/>
                </Link>

                <ul className="navbar_items">
                    <CustomLink embedIn='navbar' to='/'>HOME</CustomLink>
                    <CustomLink embedIn='navbar' to='/projects'>PROJECTS</CustomLink>
                    <CustomLink embedIn='navbar' to='/about'>ABOUT</CustomLink>
                    <CustomLink embedIn='navbar' to='/contact'>CONTACT</CustomLink>
                </ul>

                <button className="hamburger_menu" onClick={overlaySetter}>
                    <img id="menu_icon" src={menuIcon} alt=""/>
                </button> 
            </animated.nav>


            {/* Sidebar */}
            <aside className='sidebar' draggable onDrag={overlaySetter}>
                <div>
                    <div className="header_section">
                        <button className="close_menu" onClick={overlaySetter}>
                            <img id="close_icon" src={closeIcon} alt=""/>
                        </button>
            
                        <Link to='/' className="sidebar_logo_holder">
                            <img className="sidebar_icon" src={logo} alt=""/>
                        </Link>
                    </div>
            
                    <ul className="sidebar_items">
                        <CustomLink embedIn='sidebar' to='/'>HOME</CustomLink>
                        <CustomLink embedIn='sidebar' to='/projects'>PROJECTS</CustomLink>
                        <CustomLink embedIn='sidebar' to='/about'>ABOUT</CustomLink>
                        <CustomLink embedIn='sidebar' to='/contact'>CONTACT</CustomLink>
                    </ul>

                </div>
            </aside>

            <animated.div style={overlaySpring} className="sidebar_backdrop" onClick={overlaySetter}></animated.div>


        </>
    )
}


export default Navbar;