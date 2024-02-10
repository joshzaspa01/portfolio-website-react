import './About.css'
import { wavehandIcon, toolsLogo, profilePic } from '../../assets'
import { animated } from '@react-spring/web';
import { wiggleAnimation, fadeInAnimation, fadeAndSlideAnimation } from '../../utils/animationHelpers';

function About() {

    const wiggle = wiggleAnimation();

    const fade = fadeInAnimation()

    const { ref, springProps } = fadeAndSlideAnimation()
    

    return (
        <>
            <animated.section ref={ref} style={springProps} className="about_section">
                <div className="content_section">
                    <div className="content_holder">
                        <animated.img style={fade} className="my_img_background" src={toolsLogo} alt=""/>
                        <animated.div className="my_img" style={{backgroundImage: `url(${profilePic})`}}></animated.div>
                    </div>
                    <animated.div style={fade} className="about_me_descriptions">
                        <div>
                            <h1>Hello</h1>
                            <animated.img style={wiggle} src={wavehandIcon} alt=""/>
                        </div>
                        <p className="description">
                            My name is <span>Joshua Zaspa</span>, a dedicated <span>Designer and Front-End Developer </span> 
                            aspirant. I graduated from Bulacan State University with a <span>Bachelor of Science in Information Technology</span>, specializing in <span>Web and Mobile Application Development</span> degree.
                            <br/><br/>
                            I am skilled of utilizing industry-standard design applications like <span>Figma</span>, 
                            <span> Adobe Illustrator</span>, and <span> Adobe XD</span>, as well as programming languages like <span> HTML</span>, 
                            <span> CSS</span>, <span> JavaScript</span>, <span> Java</span>, and <span>Python</span>. And also, I have a basic understanding about <span>ReactJS</span> and Version Control <span>Git / Github</span>.
                            <br/><br/>
                            My ability lies in <span>creating current and innovative designs</span> that are well aligned with the product's essential objectives. 
                            I take a thorough approach to my work, maintaining a perfect <span>balance of beauty and usefulness</span>. 
                            And also, I'm always <span>willing to learn</span> new thing and <span>open to suggestion</span> to deliver the best possible output. 
                        </p>
                    </animated.div>
                </div>
            </animated.section>

        </>
    )
}

export default About;