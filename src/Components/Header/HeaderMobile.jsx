import React, { useState } from 'react';
import styled from 'styled-components';

import MenuIcon from '../../assets/menu-icon.svg'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3vh 5vw;
`;

const Icon = styled.img`
    width: 8%;
    cursor: pointer;
`;

const FloatingMenu = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    width: 90%;
    top: 12%;
    left: 50%;
    transform: translateX(-50%);

    background: ${props => props.theme.DarkViolet};

    padding: 4vh 4vw;
    border-radius: 6px;

    opacity: ${props => props.toggle ? 1 : 0};
    pointer-events: ${props => props.toggle ? 'auto' : 'none'};
    transition: opacity 0.2s linear;

    hr {
        background: ${props => props.theme.LightBlack};
        width: 80%;
    }

    > * {
        text-align: center;
        display: block;
        color: white;
        margin: 1vh 0;
        &:hover {
            color: white;
        }
    }
`;

const ResponsiveNavigation = ({data}) => {
    const [navigator, setNavigator] = useState(false);

    const toggleNavigator = () => {
        let navBool = navigator === true ? false : true;
        setNavigator(navBool);
    }
    return (
        <>
            <Container>
                {data.title}
                <Icon src={MenuIcon} onClick={toggleNavigator}></Icon>
            </Container>
            <FloatingMenu toggle={navigator}>
                {data.buttons.out}
                <hr></hr>
                {data.buttons.in}
            </FloatingMenu>
        </>
    )
};

export default ResponsiveNavigation;