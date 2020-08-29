import React from 'react';

import NavBar from '../../components/Navbar'
import Footer from "../../components/Footer";
import { Container } from './styles';
import Cover from "./Cover";
import Trajetoria from './Trajetoria'

const QuemSou: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Cover />
            <Trajetoria />
            <Footer />
        </Container>
    )
}

export default QuemSou;