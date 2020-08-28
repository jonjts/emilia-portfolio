import React from 'react';

import {
    Container,
    LeftImage,
    RightImage,
    ContentContainer,
    ContentLabelContainer,
    ImageContainer,
} from './styles';
import {
    Row,
    Col
} from "reactstrap";


const Presentation: React.FC = () => {


    return (
        <Container>
            <LeftImage
                src={require('../../../assets/img/varias-rosas.png')}
            />
            <ContentContainer>
                <Row className='p-0 m-0'>
                    <Col
                        sm='12'
                        md='6'
                        lg='6'
                        xl='6'
                        className='d-flex justify-content-center p-0'
                    >
                        <ContentLabelContainer>
                            <h1>
                                Quem sou?
                    </h1>
                            <label>
                                <p>Sou aquela que analisa e pondera. Penso sempre à frente e procuro entender. Sensível às dores, me esforço para buscar caminhos que levem ao alívio.</p>
                                <p>Amo livros e silêncio, é assim que me organizo e recarrego. Amo ser médica e escolhi a medicina por enxergar nessa profissão minha maior possibilidade de crescimento e de entrega às pessoas. A decisão pela ginecologia foi natural, pois considero encantadores os temas relacionados ao feminino e me sinto à vontade nesse universo.</p>
                                <p>Estou aqui buscando ser melhor a cada dia. Mais capacitada, mais humana, mais digna da confiança em mim depositada. Melhor para mim e para você.</p>

                            </label>
                        </ContentLabelContainer>
                    </Col>
                    <Col className='p-0'>
                        <ImageContainer>
                            <img
                                src={require('../../../assets/img/ana-quem-sou.png')}
                                alt='Dr. Ana' />
                        </ImageContainer>
                    </Col>
                </Row>


            </ContentContainer>
            <RightImage
                src={require('../../../assets/img/background-quem-sou.png')}
            />
        </Container>
    )
}

export default Presentation;