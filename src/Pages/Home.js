import React, { Component } from 'react';

import Header from '../Components/Header/index'
import GetStarted from '../Components/GetStarted'
import Form from '../Components/Form'
import LinkList from '../Components/LinkList'
import Statistics from '../Components/Statistics'
import BoostToday from '../Components/BoostToday'
import Footer from '../Components/Footer'

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <GetStarted />
                <Form />
                <LinkList />
                <Statistics />
                <BoostToday />
                <Footer />
            </>
        )
    }
}

export default Home;