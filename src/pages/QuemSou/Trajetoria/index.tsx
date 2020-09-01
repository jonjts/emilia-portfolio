import React from 'react';

import TrackVisibility from 'react-on-screen';
import SessionWave from '../../../components/sessions/Wave'
import Header from '../../../components/Header'
import Hexagono from '../../../components/Hexagono'
import {
    Container,
    Borboleta,
    RosesBottom,
    DescricaoCurriculo,
    CurriculoContainer,
    CenterCurriculo,
    HexagonoContainer,
    Line,
    BorboletaContainer,
    RosasLado
} from './styles';

const curriculo = [
    {
        year: 2010,
        text: 'Graduação em medicina pela Escola Bahiana de Medicina e Saúde Pública - 2005 a 2010'
    },
    {
        year: 2014,
        text: 'Residência médica em ginecologia e obstetrícia Hospital Universitário Professor Edgard Santos - UFBA - 2011 a 2014'
    },
    {
        year: 2017,
        text: 'Curso de patologia do trato genital inferior e colposcopia Cetrus - 2017'
    },
    {
        year: 2018,
        text: 'Preceptora da residência de ginecologia e obstetrícia do Hospital Universitário HU-UFS desde 2018'
    }
]

const Itens: React.FC<{ isVisible?: boolean }> = ({ isVisible }) => (
    isVisible ?
        <>
            {
                curriculo.map((item, key) => (
                    <CenterCurriculo key={key} className='animate__animated animate__fadeInUp'>
                        <CurriculoContainer>
                            <HexagonoContainer>
                                <Hexagono
                                    text={`${item.year}`}
                                />
                                {
                                    item.year !== 2018 &&
                                    <Line />
                                }
                            </HexagonoContainer>
                            <DescricaoCurriculo>
                                {item.text}
                            </DescricaoCurriculo>
                        </CurriculoContainer>
                    </CenterCurriculo>
                ))
            }
        </>
        :
        null
)

const Trajetoria: React.FC = () => {
    return (
        <SessionWave
        >
            <BorboletaContainer>
                <Borboleta
                    alt='borboleta'
                    src={require('../../../assets/img/borboleta.png')}
                />
            </BorboletaContainer>
            <Header
                title='Currículo'
                subtitle='Conheça minha trajetória'
            />
            <Container>
                <TrackVisibility
                    once
                    style={{ minWidth: 100, minHeight: 100 }}
                >
                    <Itens />
                </TrackVisibility>
                <RosasLado
                    alt='rosas'
                    src={require('../../../assets/img/rosas-de-ladinho.png')}
                />
                <RosesBottom
                    alt='roses'
                    src={require('../../../assets/img/roses-bottom-right.png')}
                />
            </Container>
        </SessionWave>
    )
}

export default Trajetoria;
