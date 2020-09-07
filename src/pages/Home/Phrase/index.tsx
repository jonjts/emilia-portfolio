import React from 'react';

import TrackVisibility from 'react-on-screen';
import SessionWave from '../../../components/sessions/Wave'
import Citacao from "./Citacao";
import {
    ContentContainer,
    ImageA,
    Row,
    Col,
    Roses,
    ImageContainer,
    RosesBack,
    RosesFront
} from './styles';

const Phrase: React.FC = () => {
    return (
        <SessionWave
            wavePath='none'
            footerWavePath={require('./footer.svg')}
            styleContainer={{ zIndex: 200 }}
            backgroundColor='transparent'
        >
            <ContentContainer >
                <Row>
                    <Col
                        className='align-items-center flex-column d-flex justify-content-center col'
                        sm={12}
                        md={12}
                        lg={6}
                        xl={6}
                    >
                        <ImageContainer>
                            <RosesBack
                                alt='Rosas'
                                src={require('../../../assets/img/roses-back.png')}
                            />
                            <ImageA
                                alt='Ana'
                                src={require('../../../assets/img/ana-a-1-round.png')}
                            />
                             <RosesFront
                                alt='Rosas'
                                src={require('../../../assets/img/roses-front.png')}
                            />
                        </ImageContainer>
                    </Col>
                    <Col className='align-items-center flex-column d-flex justify-content-center citacao'>
                        <TrackVisibility
                            once>
                            <Citacao />
                        </TrackVisibility>
                    </Col>
                </Row>
               
            </ContentContainer>
        </SessionWave>
    )
}

export default Phrase;