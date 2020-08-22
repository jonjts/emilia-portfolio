import React from 'react';

import NavBar from '../../components/Navbar'
import Footer from "../../components/Footer";
import Cover from './Cover'
import Phrase from './Phrase'
import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Cover imageIndex={0} />
            <Phrase />
            <Footer />
        </Container>
    )
}

export default Home;