import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

import StatisticItem from './StatisticItem';
import BrandRecognitionIcon from '../assets/icon-brand-recognition.svg';
import DetailedRecordsIcon from '../assets/icon-detailed-records.svg';
import FullyCustomizableIcon from '../assets/icon-fully-customizable.svg';

const Container = styled.div`
    background: ${props => props.theme.LightGray};
    padding: 15vh 10vw;
`;

const Info = styled.div`
    text-align: center;
    > span {
        display: block;
    }
    .title {
        font-size: 2.2rem;
        font-weight: bold;
        color: ${props => props.theme.LightBlack};
        margin: 2vh 0;
    }

    .subtitle {
        margin: 2vh 0;
        font-size: 1rem;
        color: ${props => props.theme.DarkGray};
        font-weight: 600;
    }
`;

const Items = styled.div``;

const StatsItems = [
    {
        icon: BrandRecognitionIcon,
        title: "Brand recognition",
        description: "Boost your brand recognition with each click. Generic links don't mean a thing; Branded links help instil confidence in your content.",
    },
    {
        icon: DetailedRecordsIcon,
        title: "Detailed records",
        description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content.",
    },
    {
        icon: FullyCustomizableIcon,
        title: "Fully customizable",
        description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    }
];

const Statistics = () => {
    return (
        <Container>
            <Info>
                <span className='title'>Advanced Statistics</span>
                <span className='subtitle'>Track how your links are performing across the web with <br></br> our advanced statistics dashboard.</span>
            </Info>
            <Items>
                <Row>
                    {StatsItems.map( item => <Col sm="12" md="4"> <StatisticItem icon={item.icon} key={item.title} title={item.title} description={item.description} /> </Col> )}
                </Row>
            </Items>
        </Container>
    )
}

export default Statistics;