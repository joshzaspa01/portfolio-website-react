import { animated } from '@react-spring/web';
import { popUpAnimation } from '../../utils/animationHelpers';
import './ProjectsCard.css'

interface ProjectCardProps {
    id: number
    imageURL: string
    title: string,
    subtitle: string
    behanceLink: string;
}

function ProjectsCard(props: ProjectCardProps) {

    const { ref, springProps } = popUpAnimation();

    const imageUrl = props.imageURL
    const behanceLink = props.behanceLink

    const divStyle = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <>
            <animated.div className="project_card" ref={ref} style={springProps} onClick={() => window.open(behanceLink, '_blank')}>
                <div className="img_container">
                    <div className="project_cover_img" style={divStyle}>
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="card_infos">
                    <h1 className="title">{props.title}</h1>
                    <p className="subtitle">{props.subtitle}</p>
                </div>
            </animated.div>
        </>
    )
}

export default ProjectsCard