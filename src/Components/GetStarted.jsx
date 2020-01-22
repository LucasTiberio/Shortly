import React from 'react';
import styled from 'styled-components';

import Button from './Button'
import Working from '../assets/illustration-working.svg'

const Container = styled.div`
    margin: 1vh 0;
    margin-left: 10vw;
    
    display: grid;
    grid-template-columns: 1fr 50%;

`;

const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 1vw;

    .button {
        margin: 6vh 0;
        width: 100%;
    }
`;

const Title = styled.div`
    font-size: 4rem;
    font-weight: bold;
    color: ${props => props.theme.LightBlack || 'black'};
`;

const SubTitle = styled.div`
    font-size: 1.5rem;
    color: ${props => props.theme.DarkGray || 'black'};
`;

const Image = styled.div`
    margin-left: 1vw;
    img {
        width: 100%
    }
`;

const GetStarted = () => {
    return (
        <Container>
            <Text>
                <Title>More than just shorter links</Title>
                <SubTitle>Build your brand's recognition and get detailed insights on how your links are performing.</SubTitle>
                <div className='button'>
                    <Button padding='2.3vh 3vw' rounded light>Get Started</Button>
                </div>
            </Text>
            <Image>
                <img src={Working} alt="Upgrading life" />
            </Image>
        </Container>
    )
}

export default GetStarted;