import { PrimaryButton } from "../../components";
import './Contact.css'
import { Link } from "react-router-dom";
import { behanceIcon, linkedinIcon, astroIllustration } from "../../assets";
import { sendingEmail } from "../../utils/utlilities";
import { animated } from "@react-spring/web";
import { fadeAndSlideAnimation } from '../../utils/animationHelpers';

function Contact() {

    const { ref, springProps} = fadeAndSlideAnimation()
    
    return (
    <>
        <animated.section ref={ref} style={springProps} className="contact_section">
            <div className="content_section">
                <div className="infos_and_illustration">
                    <img src={astroIllustration} alt=""/>
                    <div className="headers">
                        <h1 className="header_text">Let's make your <span>Ideas Happen</span></h1>
                        <p className="subheader_text">Connect with me through this links:</p>
                    </div>
                </div>

                <div className="CTA_and_links">
                    <div className="links">
                        <Link to="https://www.linkedin.com/in/joshua-zaspa/" target="_blank"><img src={linkedinIcon} alt=""/></Link>
                        <Link to="https://www.behance.net/joshuazaspa" target="_blank"><img src={behanceIcon} alt=""/></Link>
                    </div>
                    <div className="dividers">
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>
                    
                    <PrimaryButton value="Send an email" id="send_email_btn" onClick={sendingEmail}/>
                </div>
            </div>
        </animated.section>
    </>
   )
}

export default Contact;