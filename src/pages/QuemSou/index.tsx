import React from 'react';

import NavBar from '../../components/Navbar'
import Footer from "../../components/Footer";
import { Container } from './styles';

const QuemSou: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Footer />
        </Container>
    )
}   

export default QuemSou;