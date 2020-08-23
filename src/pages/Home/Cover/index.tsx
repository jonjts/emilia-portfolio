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
    Fade,
} from "reactstrap";

const itens = [{
    path: require('../../../assets/img/ana-1.png'),
    alt: 'Dr. Ana'
}, {
    path: require('../../../assets/img/ana-2.png'),
    alt: 'Dr. Ana'
}]

interface IPresentation {
    indexImage: number
}

const Presentation: React.FC<IPresentation> = ({ indexImage }) => {


    return (
        <Container>
            <LeftImage
                src={require('../../../assets/img/cover-left.svg')}
            />
            <ContentContainer>
                <ContentLabelContainer>
                    <h1>
                        Dra Ana Emília Onias
                    </h1>
                    <h4>
                        Ginecologista
                    </h4>
                </ContentLabelContainer>
                <ImageContainer>
                    <Fade
                        in={indexImage === 0}
                        timeout={300}
                    >
                        <img
                            src={itens[0].path}
                            alt={itens[0].alt} />
                    </Fade>
                    <Fade
                        in={indexImage === 1}
                        timeout={300}
                    >
                        <img
                            src={itens[1].path}
                            alt={itens[1].alt} />
                    </Fade>
                </ImageContainer>
            </ContentContainer>
            <RightImage
                src={require('../../../assets/img/folha.svg')}
            />
        </Container>
    )
}

export default Presentation;