import React, { useState, useEffect } from 'react';

import NavBar from '../../components/Navbar'
import Footer from "../../components/Footer";
import Cover from './Cover'
import Phrase from './Phrase'
import Servicos from './Servicos'
import Antendimento from './Atendimento';
import { Container } from './styles';



const Home: React.FC = () => {

    const [indexImage, setIndexImage] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setIndexImage(indexImage === 0 ? 1 : 0)
        }, 6000)
    }, [indexImage])


    return (
        <Container>
            <NavBar />
            <Cover indexImage={indexImage} />
            <Phrase indexImage={indexImage}/>
            <Servicos />
            <Antendimento />
            <Footer />
        </Container>
    )
}

export default Home;