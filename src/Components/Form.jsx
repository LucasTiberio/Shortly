import React, { useState } from 'react';
import styled from 'styled-components';

import * as ShortenerService from '../Services/shortener.service.js'
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
    position: relative;
    outline: 0;
    margin: 0;
    border: 0;
    padding: 2vh 2vw;
    border-radius: 6px;
    border: ${props => props.error ? '1px solid red' : '1px solid white'};
        
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.theme.LightBlack};

    ::placeholder {
        color: ${props => props.theme.Gray};
    }
`;

const ErrorLabel = styled.span`
    position: absolute;
    top: 13%;
    left: 5%;
    
    z-index: 1;
    
    color: red;
    font-style: italic;
`;

const Form = () => {
    const [error, setError] = useState('');
    const [link, setLink] = useState('');

    const handleInputChangeLink = e => {
        setLink(e.target.value)
    }

    const handleClickNewLink = async () => {
        //todo check input has value
        if(link === '') {
            setError('Please add a link');
            return;
        }
        let response = await ShortenerService.createLink(link);
        
        if(response.ans === true) {
            //success
            console.log(response.data)
            return;
        }else{
            setError('Insert a valid link')
            return;
            //error
        }
    }

    return (
        <Container>
            <Content>
                <Input error={error !== ''} onChange={handleInputChangeLink} placeholder='Shorten a link here...' />
                {error && <ErrorLabel> {error} </ErrorLabel>}
                <Button light onClick={handleClickNewLink}>Shorten It!</Button>
                <img className='AbsoluteBackground' src={BackgroundDesktop} alt='Background for Shorten' />
            </Content>
        </Container>
    )
}

export default Form;