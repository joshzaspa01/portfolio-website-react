import { Link, useLocation} from 'react-router-dom'
import { emailIcon, behanceIcon, linkedinIcon } from '../../assets'
import './Footer.css'
import { useEffect, useState } from 'react'
import { sendingEmail } from '../../utils/utlilities'


function Footer() {

    const [date, setDate] = useState<Number>(0)

    useEffect(() => {
        const getCurrentDate = new Date().getFullYear();
        setDate(getCurrentDate)
    }, [])


    const location = useLocation();


    return (
        <>
            <footer className="footer_section">
                <p id="copywright_text">© {date.toString()} by Joshua Zaspa</p>
                <div className="footer_links">
                    <Link to={location.pathname} onClick={sendingEmail}><img src={emailIcon} alt=""/></Link>
                    <Link to="https://www.linkedin.com/in/joshua-zaspa/" target="_blank">
                        <img src={linkedinIcon} alt=""/>
                    </Link>
                    <Link to="https://www.behance.net/joshuazaspa" target="_blank">
                        <img src={behanceIcon} alt=""/>
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Footer;