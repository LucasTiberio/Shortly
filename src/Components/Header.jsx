import React from 'react';
import styled from 'styled-components';

import Button from './Button'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 5vh 10vw;
`;

const Side = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.span`
    font-size: 2rem;
    font-weight: 700;
    margin-right: 1.5vw;
    color: ${props => props.theme.LightBlack || 'black'};
`;

const ButtonList = styled.div`
    display: inline-block;
`;

const Header = () => {
    return (
        <Container>
            <Side>
                <Title>Shortly</Title>
                <ButtonList>
                    <Button>Features</Button>
                    <Button>Pricing</Button>
                    <Button>Resources</Button>
                </ButtonList>
            </Side>
            <Side>
                <ButtonList>
                    <Button>Login</Button>
                    <Button rounded light>Sign Up</Button>
                </ButtonList>
            </Side>
        </Container>
    )
}

export default Header;