import React, { Component } from 'react';

import Header from './components/Header/View';
import Footer from './components/Footer/View';
import Routes from './Routes';

class App extends Component<{}, {}> {
    render() {
        return (
            <>
                <Header />
                <Routes />
                <Footer />
            </>
        );
    }
}

export default App;
