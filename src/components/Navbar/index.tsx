import React, { useState } from 'react';

import {
    Navbar,
    Container,
    SocialContainer
} from './styles';
import {
    NavLink,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText,
} from "reactstrap";

const MyNavbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <Container >
                <NavbarBrand style={{ width: 40, height: 40 }} href="/">
                    <img src={require('../../assets/img/brand/logo.png')} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className='justify-content-center' isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem active>
                            <NavLink className='mr-2' href="/home/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mr-2' href="/quem-sou">Quem Sou?</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mr-2' href="/indicacoes">Indicações</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mr-2' href="/quem-sou">Contato</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
                <SocialContainer>
                    <NavbarText className='item'>Simple Text</NavbarText>
                </SocialContainer>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;