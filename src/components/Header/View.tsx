import React from 'react';
import { Navbar, Container, NavbarToggler, Collapse, Row, Col, NavbarBrand } from 'reactstrap';

import Logo from './Logo';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

interface IProps {
    isOpen?: boolean;
};

interface IState {
    isOpen: boolean;
}

class Header extends React.Component<IProps, IState> {
    public state = {
        isOpen: this.props.isOpen || false,
    }

    public toggleHandler = () => this.setState(({ isOpen, ...prevState }) => ({
        ...prevState,
        isOpen: !isOpen,
    }))

    public render() {
        const { isOpen } = this.state;
        return (
            <header>
                <Navbar color="dark" dark={true}>
                    <Container>
                        <NavbarBrand href={ROUTES.ROOT}>
                            <Logo />
                            <strong>Album</strong>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleHandler} />
                        <Collapse isOpen={isOpen} navbar={true}>
                            <Row>
                                <Col xs={12} sm={8} md={7} className="py-4">
                                    <h4 className="text-white">About</h4>
                                    <p className="text-muted">
                                        Add some information about the album below, the author, or any other
                                        background context. Make it a few sentences long so folks can pick up
                                        some informative tidbits. Then, link them off to some social networking
                                        sites or contact information.
                                    </p>
                                </Col>
                                <Col xs={12} sm={4} md={{ size: 4, offset: 1 }} className="py-4">
                                    <h4 className="text-white">Features</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to={ROUTES.MAP} className="text-white">Map</Link>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Collapse>
                    </Container>  
                </Navbar>
            </header>
        )
    }
}

export default Header;
