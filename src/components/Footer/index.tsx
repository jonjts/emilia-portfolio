import React from 'react';

import Map from '../Map'
import {
    Container,
    // NavigationContainer,
    BranContainer,
    ImgBrand,
} from './styles';
// import Navigation from "../Navbar/Navigation";
import LocalAtendimento from "./LocalAtendimento";
import Direitos from "./Direitos";


const Footer: React.FC = () => {


    return (
        <Container>
            <LocalAtendimento />
            <Map
                width='100%'
                height={320}
            />
            <BranContainer>
                <ImgBrand
                    src={require('../../assets/img/brand/logo-with-name.svg')}
                    alt='logo'
                />
                {/* <NavigationContainer>
                    <Navigation />
                </NavigationContainer> */}
            </BranContainer>
            <Direitos />
        </Container >
    )
}

export default Footer;