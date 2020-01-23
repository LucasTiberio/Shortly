import React from 'react';
import styled from 'styled-components';

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

const ButtonList = styled.div`
    display: inline-block;
`;

const Header = ({data}) => {
    return (
        <Container>
            <Side>
                {data.title}
                <ButtonList>
                    {data.buttons.out}
                </ButtonList>
            </Side>
            <Side>
                <ButtonList>
                    {data.buttons.in}
                </ButtonList>
            </Side>
        </Container>
    )
}

export default Header;