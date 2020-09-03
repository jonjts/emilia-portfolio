import React from 'react';

import ListaContatos from "./Lista";
import {
    Container,
    LineCurve,
    Jardin,
    Lista,
    BorboletaRigth,
    BorboletaLeft
} from './styles';

const Indicados: React.FC = () => {
    return (
        <Container>
            <LineCurve
                className='animate__animated  animate__fadeIn'
                alt='linha curva'
                src={require('../../../assets/img/linha-curva.svg')}
            />
            <BorboletaRigth
                className='animate__animated  animate__fadeIn'
                alt='borboleta'
                src={require('../../../assets/img/borboleta.png')}
            />
            <BorboletaLeft
                className='animate__animated  animate__fadeIn'
                alt='borboleta'
                src={require('../../../assets/img/borboleta.png')}
            />
            <Lista
                className='animate__animated  animate__fadeInUp'
            >
                <h1>
                    Indicações
                </h1>
                <ListaContatos />
            </Lista>
            <Jardin
                className='animate__animated  animate__fadeInUp'
                alt='jardin'
                src={require('../../../assets/img/varias-rosas.svg')}
            />
        </Container>
    )
}

export default Indicados;