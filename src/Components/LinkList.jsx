import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import LinkItem from './LinkItem'

const Container = styled.div`
    background: ${props => props.theme.LightGray};
    padding: 0 10vw;
`;

const LinkList = () => {
    const links = useSelector(state => state.linklist)

    return (
        <Container>
            {links.map(data => (
                <LinkItem data={data} />
            ))}
        </Container>
    )
};

export default LinkList;