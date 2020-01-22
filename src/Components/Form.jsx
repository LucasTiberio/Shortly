import React from 'react';
import styled from 'styled-components';

import Button from './Button'

import BackgroundDesktop from '../assets/bg-shorten-desktop.svg'

const Container = styled.div`
    background: ${props => props.theme.GrayishViolet};
    background: ${props => "linear-gradient(180deg, white 50%, "+props.theme.LightGray+" 50%)"};
    padding: 2vh 10vw;
`;

const Content = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 15%;
    
    padding: 8vh 3vw;
    border-radius: 10px;
    
    overflow: hidden;

    background-color: ${props => props.theme.DarkViolet};

    input, button {
        margin: 0 1vw;
        z-index: 1;
    }

    .AbsoluteBackground {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        pointer-events: none;
        z-index: 0;
    }
`;

const Input = styled.input`
    outline: 0;
    margin: 0;
    border: 0;
    padding: 2vh 2vw;
    border-radius: 6px;
        
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.theme.LightBlack};

    ::placeholder {
        color: ${props => props.theme.Gray};
    }
`;

const Form = () => {
    return (
        <Container>
            <Content>
                <Input placeholder='Shorten a link here...' />
                <Button light>Shorten It!</Button>
                <img className='AbsoluteBackground' src={BackgroundDesktop} alt='Background for Shorten' />
            </Content>
        </Container>
    )
}

export default Form;