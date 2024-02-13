import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useSidebarContext } from "../../context/SidebarContext"

interface CustomLinkProps {
    to: string,
    children: string,
    embedIn: string,
}

function CustomLink(props: CustomLinkProps) {

    const { overlaySetter } = useSidebarContext()

    const resolvedPath = useResolvedPath(props.to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    const active_nav_id = isActive ? 'active_nav_item' : ''
    const active_sidebar_id = isActive ? 'active_sidebar_item' : ''

    const setID = props.embedIn === 'navbar' ? active_nav_id : active_sidebar_id
    
    const setFunction = props.embedIn === 'sidebar' ? overlaySetter : () => {}

    return (
        <li className="nav_item" id={setID} onClick={setFunction}>
            <Link className="nav_link" to={props.to}>{props.children}</Link>
        </li>
    )
}

export default CustomLink