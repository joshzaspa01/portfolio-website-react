import ProjectsCard from '../ProjectsCard/ProjectsCard'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from '../../data/DATA'
import './ProjecShowcase.css'
import { slideInAnimation } from '../../utils/animationHelpers';
import { animated } from '@react-spring/web';

interface ProjectShowcaseProps {
    currentPage: string
}

interface Project {
    id: number,
    coverImg: string,
    title: string,
    subtitle: string,
    behanceLink: string,
    view_on_homepage: boolean,
    createdDate: string
}

function ProjectShowcase(props: ProjectShowcaseProps) {

    const [cardData, setCardData] = useState<Project[]>([]);

    useEffect(() => {
        setCardData(projects)
    }, []);

    // Sorting the projects from newest to oldest
    const sortedProjects = cardData.slice().sort((a, b) => {
        const dateA: Date  = new Date(a.createdDate);
        const dateB: Date = new Date(b.createdDate);
              
        return dateB.getTime() - dateA.getTime();
    });


    const homePageCards = sortedProjects.filter(item => item.view_on_homepage)
  
    const projectsPageCards = sortedProjects.map(val => val)

    const projectsCardsArray = props.currentPage === 'Home' ? homePageCards : projectsPageCards;

    const projectShowcaseStyle = props.currentPage === 'Projects' ? 'projects_page' : 'home_page';

    const cardsHolderStyle = props.currentPage === 'Home' ? 'homePage_holder' : 'projectsPage_holder'; 

    const slide = slideInAnimation()

    return(
        <>
            <animated.section style={slide} className={`project_showcase_section ${projectShowcaseStyle}`}>
                {
                    props.currentPage === 'Home' &&

                    <div className="section_header">
                        <h1>Projects</h1>
                        <Link to="/projects">See All</Link>
                    </div>
                }

                <div className={`cards_holder ${cardsHolderStyle}`}>
                    {
                        projectsCardsArray.map(item => (
                            <ProjectsCard 
                                key={item.id}
                                id={item.id}
                                title={item.title} 
                                subtitle={item.subtitle} 
                                imageURL={item.coverImg}
                                behanceLink={item.behanceLink}
                            />
                        ))
                    }
                </div>
                
            </animated.section>
        </>
    )
}


export default ProjectShowcase