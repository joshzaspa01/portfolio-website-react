import { animated } from "@react-spring/web";
import { scaleAnimation } from "../../utils/animationHelpers";
import styled from "styled-components";

interface ButtonProps {
    value: string,
    id: string,
    onClick: () => void,
}

const Button = styled(animated.input)`
    display: flex;
    width: 235px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 2px solid var(--default-primary, #1A1A1A);
    background: var(--primary-primary-main, #5947FF);
    color: var(--default-white);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    transition: box-shadow 0.1s ease-out;

    &:hover {
        border: 2px solid var(--primary-main);
        box-shadow: 4px 6px 0px 0px var(--default-primary);
        cursor: pointer;
    }

    &:active {
        border: 2px solid var(--primary-main);
        cursor: pointer;
    }

    @media only screen and (max-width: 576px) {
        font-size: 14px;
        line-height: 20px;
        width: 220px;
    }

`

function PrimaryButton(props: ButtonProps) {

    const {ref, springProps} = scaleAnimation()
    
    return (
        <>
            <Button ref={ref} style={springProps} className={`primary_btn`} id={props.id} type="button" value={props.value} onClick={props.onClick}/>
        </>
    )
}


export default PrimaryButton;