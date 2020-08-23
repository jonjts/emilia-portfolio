import React from 'react';

import NavBar from '../../components/Navbar'
import Footer from "../../components/Footer";
import Cover from './Cover'
import Phrase from './Phrase'
import Servicos from './Servicos'
import { Container } from './styles';
import Antendimento from './Atendimento';

const Home: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Cover imageIndex={0} />
            <Phrase />
            <Servicos />
            <Antendimento />
            <Footer />
        </Container>
    )
}

export default Home;