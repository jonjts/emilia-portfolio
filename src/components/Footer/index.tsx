import React from 'react';

import {
    Container,
    Map,
    NavigationContainer,
    BranContainer,
    ImgBrand,
    DireitosContainer,
    DireitosDetalhes
} from './styles';
import Navigation from "../Navbar/Navigation";

const Footer: React.FC = () => {
    return (
        <Container>
            <Map
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.2937902829559!2d-37.065739070823426!3d-10.950137699512737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3dc38d4ec91%3A0x7a35992cf278ae96!2sHospital%20Primavera%20-%20Reumatologia!5e0!3m2!1spt-BR!2sbr!4v1597961786758!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
            ></Map>
            <BranContainer>
                <ImgBrand
                    src={require('../../assets/img/brand/logo-with-name.svg')}
                    alt='logo'
                />
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </BranContainer>
            <DireitosContainer>
                <hr />
                <DireitosDetalhes>
                    <label>
                        © 2020 • Todos Direitos Reservados
                    </label>
                    <div>
                        <label>
                            Criado por:
                        </label>
                        <img
                            className='ml-2'
                            src={require('../../assets/img/icons/cd.svg')}
                            alt='cd'
                        />
                    </div>
                </DireitosDetalhes>
            </DireitosContainer>
        </Container>
    )
}

export default Footer;