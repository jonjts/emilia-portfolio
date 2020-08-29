import React from 'react';

import SessionWave from '../../../components/sessions/Wave'
import Header from '../../../components/Header'
import Hexagono from '../../../components/Hexagono'
import {
    Container,
    RosesTop,
    RosesBottom,
    DescricaoCurriculo,
    CurriculoContainer,
    CenterCurriculo,
    HexagonoContainer,
    Line
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

const Trajetoria: React.FC = () => {
    return (
        <SessionWave
        >
            <Header
                title='Currículo'
                subtitle='Conheça minha trajetória'
            />
            <Container>
                <RosesTop
                    alt='borboleta'
                    src={require('../../../assets/img/borboleta.png')}
                />
                {
                    curriculo.map((item, key) => (
                        <CenterCurriculo key={key}>
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
                <RosesBottom
                    alt='roses'
                    src={require('../../../assets/img/roses-bottom-right.png')}
                />
            </Container>
        </SessionWave>
    )
}

export default Trajetoria;