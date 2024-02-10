import './Sidebar.css'
import { logo, closeIcon } from '../../assets'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { showSidebar } from '../../utils/utlilities'

function Sidebar() {

    return (
        <>
            <aside className='sidebar'>
                <div>
                    <div className="header_section">
                        <button className="close_menu" onClick={showSidebar}>
                            <img id="close_icon" src={closeIcon} alt=""/>
                        </button>
            
                        <Link to='/' className="sidebar_logo_holder">
                            <img className="sidebar_icon" src={logo} alt=""/>
                        </Link>
                    </div>
            
                    <ul className="sidebar_items">
                        <CustomLink to='/'>HOME</CustomLink>
                        <CustomLink to='/projects'>PROJECTS</CustomLink>
                        <CustomLink to='/about'>ABOUT</CustomLink>
                        <CustomLink to='/contact'>CONTACT</CustomLink>
                    </ul>

                </div>
            </aside>

            <div className="sidebar_backdrop" onClick={showSidebar}></div>
        </>
    )
}

interface CustomLinkProps {
    to: string
    children: string
}

function CustomLink(props: CustomLinkProps) {

    const resolvedPath = useResolvedPath(props.to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className="nav_item" onClick={showSidebar} id={isActive ? 'active_sidebar_item': ''}>
            <Link className="nav_link" to={props.to}>{props.children}</Link>
        </li>
    )
}

export default Sidebar