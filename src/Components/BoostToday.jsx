import React from 'react';
import styled from 'styled-components';

import Button from './Button'
import BoostBackground from '../assets/bg-boost-desktop.svg'

const Container = styled.div`
    position: relative;
    text-align: center;
    overflow: hidden;

    padding: 8vh 0;

    background-color: ${props => props.theme.DarkViolet};
    z-index: -2;

    .AbsoluteBackground {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    }

    span.title {
        display: block;
        
        color: whitesmoke;
        
        font-weight: bold;
        font-size: 2.7rem;
        margin-bottom: 2vh;
    }
    
    button {
        font-size: 1.3rem;
    }
`;

const BoostToday = () => {
    return (
        <Container>
            <span className="title">Boost your links today</span>
            <Button rounded light padding='1.6vh 2.5vw'>Get Starded</Button>
            <img className='AbsoluteBackground' src={BoostBackground} alt={'Fundo Boost'} />
        </Container>
    )
}

export default BoostToday;