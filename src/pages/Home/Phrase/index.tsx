import React, { useState, useEffect } from 'react';

import TrackVisibility from 'react-on-screen';
import SessionWave from '../../../components/sessions/Wave'
import Citacao from "./Citacao";
import {
    ContentContainer,
    ImageA,
    Row,
    Col,
    ImageContainer,
    RosesBack,
    RosesFront
} from './styles';

const itens = [{
    path: require('../../../assets/img/ana-a-1-round.png'),
    alt: 'Dr. Ana'
}, {
    path: require('../../../assets/img/ana-a-2-round.png'),
    alt: 'Dr. Ana'
}]

interface IPresentation {
    indexImage: number
}

const Phrase: React.FC<IPresentation> = ({ indexImage }) => {

    const [animOne, setAnimOne] = useState('')
    const [animTwo, setAnimTwo] = useState('')

    useEffect(() => {
        if (indexImage === 0) {
            setAnimOne('animate__animated animate__fadeIn')
            setAnimTwo('animate__animated animate__fadeOut')
        } else {
            setAnimTwo('animate__animated animate__fadeIn')
            setAnimOne('animate__animated animate__fadeOut')
        }
    }, [indexImage])

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
                                className={animOne}
                                alt='Ana'
                                src={itens[0].path}
                            />
                            <ImageA
                                className={animTwo}
                                alt='Ana'
                                src={itens[1].path}
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