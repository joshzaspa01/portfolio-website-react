import { useSpring } from "@react-spring/web";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { showSidebar } from "./utlilities";

export const fadeInAnimation = (): any => {
  return useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,

  });
};


export const slideInAnimation = (): any => {
  return useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
  });
};


export const scaleAnimation = (): any => {

    const [ref, inView] = useInView({
      triggerOnce: false,
    });
  
    const springProps = useSpring({
      transform: inView ? 'scale(1)' : 'scale(0)',
      config: { tension: 150, friction: 30 },
    });

    return { ref, springProps }
};


export const bounceAnimation = (): any => {
    return useSpring({
      from: { transform: 'translateY(-100px)' },
      to: { transform: 'translateY(0px)' },
      config: {
        tension: 100, 
        friction: 12
      }
    });
};


export const wiggleAnimation = (): any => {
    return useSpring({
      from: { transform: 'rotate(-10deg)' },
      to: { transform: 'rotate(10deg)' },
      loop: { reverse: true },
      config: { tension: 200 },
    });
};


export const fadeAndSlideAnimation = (): any => {

    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    
    const springProps = useSpring({
      opacity: inView ? 1 : 0, 
      transform: inView ? 'translateY(0px)' : 'translateY(30px)',
      config: { tension: 300, friction: 12, duration: 200 },
    });

    return { ref, springProps }
};


export const popUpAnimation = (): any => {
  
  const [ref, inView] = useInView({
      triggerOnce: false,
  });
  
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
  });

  return { ref, springProps };
}


// sidebar overlay animation
export const sidebarOverlayAnimation = () => {

    const [toggler, setToggler] = useState(false)

    const [overlaySpring, api] = useSpring(() => ({
        from: {
            opacity: toggler ? 1 : 0,
            display: toggler ? 'block' : 'none' 
        }
    }))

    const overlaySetter = () => {

        setToggler(prevToggler => !prevToggler)

        api.start({
            to: {
                opacity: !toggler ? 1 : 0,
                display: !toggler ? 'block' : 'none'
            }
        })

        showSidebar()
    }

    return { overlaySetter, overlaySpring }
}
