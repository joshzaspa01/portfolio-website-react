import { Link, useLocation } from "react-router-dom";
import { emailIcon, behanceIcon, linkedinIcon, wavehandIcon, starIcon, profilePic, shapesBG } from '../../assets'
import { Button, ProjectShowcase } from "../../components";
import { sendingEmail, downloadCV } from "../../utils/utlilities";
import './Home.css'
import { animated } from "@react-spring/web";
import { fadeAndSlideAnimation, fadeInAnimation, wiggleAnimation } from "../../utils/animationHelpers";

interface HomeProps {
    onClick: () => void
}

function Home() {

    
    return (
        <>
            <HeroSection onClick={sendingEmail}/>
            <SkillsBanner />
            <ProjectShowcase currentPage={'Home'}/>
        </>
    )
}

function HeroSection(props: HomeProps ) {
    
    const location = useLocation();

    const { ref, springProps } = fadeAndSlideAnimation()

    const wiggle = wiggleAnimation()

    const fade = fadeInAnimation()

    return (
        <>
            <animated.section ref={ref} style={springProps} className="hero_section">
                <div className="left_side">
                    <div className="hero_text">
                        <div className="header_text">
                            <div>
                                <h1>Hi,</h1>
                                <animated.img style={wiggle} src={wavehandIcon} alt=""/>
                            </div>
                            <h1>
                                I'm <span>Joshua Zaspa</span>
                            </h1>
                        </div>
                        <p className="subheader_text">UI / UX Designer that integrates passion into contemporary and innovative designs that seamlessly align with product goals.</p>
                    </div>

                    <div className="CTA_and_links">
                        <div className="links">
                            <Link to={location.pathname} onClick={props.onClick}>
                                <img src={emailIcon} alt=""/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/joshua-zaspa/" target="_blank">
                                <img src={linkedinIcon} alt=""/>
                            </Link>
                            <Link to="https://www.behance.net/joshuazaspa" target="_blank">
                                <img src={behanceIcon} alt=""/>
                            </Link>
                        </div>

                        <Button value="Download CV" id="hero_section_cta" onClick={downloadCV}/>

                    </div>
                </div>

                <div className="right_side">
                    <animated.img style={fade} id="hero_img_bg" src={shapesBG} alt=""/>
                    <div className="hero_section_img" style={{backgroundImage: `url(${profilePic})`}} ></div>
                </div>
                </animated.section>

        </>
    )
}

function SkillsBanner() {
    return (
        <>
            <section className="skills_banner">
                <div className="skills_banner_slider">
                    <div>
                        <img className="star_icon" src={starIcon} alt=""/>
                        <p className="skill_item">Web Design</p>
                        <img className="star_icon" src={starIcon} alt=""/>
                        <p className="skill_item">UI / UX Design</p>
                        <img className="star_icon" src={starIcon} alt=""/>
                        <p className="skill_item">Front-End Development</p>
                        <img className="star_icon" src={starIcon} alt=""/>
                        <p className="skill_item">Graphic Design</p>
                    </div>
                </div>

                <div className="skills_banner_slider">
                    <div>
                        <img className="star_icon" src={starIcon} alt=""/>
                        <p className="skill_item">Web Design</p>
                        <img className="star_icon" src={starIcon} alt=""/>
                        <p className="skill_item">UI / UX Design</p>
                        <img className="star_icon" src={starIcon} alt=""/>
                        <p className="skill_item">Front-End Development</p>
                        <img className="star_icon" src={starIcon} alt=""/>
                        <p className="skill_item">Graphic Design</p>
                    </div>
                </div>

            </section>

        
        </>
    );
}


export default Home;