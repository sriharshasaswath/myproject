import React from 'react';
import {
    Collapse, Navbar, NavbarToggler, Nav, NavbarBrand, NavItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class TopNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.closeNav = this.closeNav.bind(this)
        this.state = {
            isOpen: false,
            navMargine: '64px'
        };

    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.navMargine !== this.state.navMargine) {
            this.setState({ navMargine: nextProps.navMargine }, () => {
                // console.log(this.state.navMargine)
            });
        }

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    closeNav() {
        if (this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        }
    }

    render() {
        return (
            <Navbar color="light" light expand="md" className="top-nav" sticky="top" style={{ marginLeft: this.state.navMargine }}>
                <NavbarBrand href="/dashboard">Dashboard</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar style={{    position: 'absolute',top: '12px',right: '10px',}}>
                    <Nav className="ml-auto" navbar onClick={this.closeNav}>
                        <NavItem>
                            <Link to="/profile"><FontAwesomeIcon icon="user-circle" color="#DB3D44" size="2x" /></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default TopNavBar;