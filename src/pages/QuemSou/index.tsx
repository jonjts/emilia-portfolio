import React from 'react';

import NavBar from '../../components/Navbar'
import Footer from "../../components/Footer";
import { Container } from './styles';
import Cover from "./Cover";

const QuemSou: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Cover />
            <Footer />
        </Container>
    )
}

export default QuemSou;