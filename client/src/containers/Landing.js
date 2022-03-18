import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import LandingComponent from '../components/LandingComponent';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarOpen: false
        }
    }
    toggleSidebar = () => {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
    }
    render() {
        return (
            <>
                <Navbar
                    isSidebarOpen={this.state.isSidebarOpen}
                    toggleSidebar={this.toggleSidebar}
                />
                <LandingComponent />
            </>
        );
    }
}

export default Landing;