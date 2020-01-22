import React, { Component } from 'react';

import Header from '../Components/Header'
import GetStarted from '../Components/GetStarted'
import Form from '../Components/Form'
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
                <Statistics />
                <BoostToday />
                <Footer />
            </>
        )
    }
}

export default Home;