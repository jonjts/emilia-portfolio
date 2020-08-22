import React from 'react';

import {
    Container,
    LeftImage,
    RightImage,
    ContentContainer,
    ContentLabelContainer,
} from './styles';
import { Fade } from "reactstrap";

const Presentation: React.FC<{ imageIndex: number }> = ({ imageIndex }) => {
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
                <Fade>
                    <img
                        alt='ana emilia'
                        src={require('../../../assets/img/ana-1.svg')}
                    />
                </Fade>
            </ContentContainer>
            <RightImage
                src={require('../../../assets/img/folha.svg')}
            />
        </Container>
    )
}

export default Presentation;