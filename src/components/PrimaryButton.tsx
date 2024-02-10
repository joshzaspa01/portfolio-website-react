import { animated } from "@react-spring/web";
import { scaleAnimation } from "../utils/animationHelpers";

interface PrimaryButtonProps {
    value: string,
    id: string,
    onClick: () => void,
}

function PrimaryButton(props: PrimaryButtonProps) {

    const {ref, springProps} = scaleAnimation()
    
    return (
        <>
            <animated.input ref={ref} style={springProps} className={`primary_btn`} id={props.id} type="button" value={props.value} onClick={props.onClick}/>
        </>
    )
}


export default PrimaryButton;