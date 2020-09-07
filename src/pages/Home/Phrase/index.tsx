import React from 'react';

import TrackVisibility from 'react-on-screen';
import SessionWave from '../../../components/sessions/Wave'
import Citacao from "./Citacao";
import {
    ContentContainer,
    ImageA,
    Row,
    Col,
    Roses
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
                            sm={12}
                            md={12}
                            lg={6}
                            xl={6}
                        >
                            <ImageA
                                alt='Ana'
                                src={require('../../../assets/img/ana-a-1.png')}
                            />
                        </Col>
                        <Col className='align-items-center flex-column d-flex justify-content-center citacao'>
                            <TrackVisibility
                                once>
                                <Citacao />
                            </TrackVisibility>
                        </Col>
                    </Row>
                    <Roses
                        src={require('../../../assets/img/roses.png')}
                        alt='roses'
                    />
            </ContentContainer>
        </SessionWave>
    )
}

export default Phrase;