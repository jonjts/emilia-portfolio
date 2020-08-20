import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


import {
    Navbar,
    Container,
    SocialContainer,
    SocialButton
} from './styles';
import {
    NavLink,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";

const MyNavbar: React.FC = () => {

    let history = useHistory();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function handleSendEmail(e: React.MouseEvent) {
        e.preventDefault()
        history.push('/contato')
    }

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
                            <NavLink className='mr-2' href="/contato">Contato</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
                <SocialContainer>
                    <SocialButton
                        target='_blank'
                        href='https://www.instagram.com/anaemilia.onias/'
                        color='primary'
                    >
                        <i className="fab fa-instagram"></i>
                    </SocialButton>
                    <SocialButton
                        target='_blank'
                        href='https://api.whatsapp.com/send?phone=557998309833&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20consulta...'
                        color='primary'
                    >
                        <i className="fab fa-whatsapp"></i>
                    </SocialButton>
                    <SocialButton
                        onClick={(e: React.MouseEvent) => handleSendEmail(e)}
                        color='primary'
                    >
                        <i className="far fa-envelope"></i>
                    </SocialButton>
                </SocialContainer>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;