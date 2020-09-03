import React from 'react';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contatos from "./Contatos";
import { Container } from './styles';

const Indicacoes: React.FC = () => {
    return (
        <Container>
            <Navbar />
            <Contatos />
            <Footer />
        </Container>
    )
}

export default Indicacoes;