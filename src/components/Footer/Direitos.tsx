import React from 'react';

import {
    DireitosContainer,
    DireitosDetalhes,
    Casal
} from './styles';
import {
    Row,
    Col
} from 'reactstrap'

const Direitos: React.FC = () => {
    return (
        <DireitosContainer>
            <hr />
            <DireitosDetalhes>
                <Row>
                    <Col
                        sm='12'
                        md='12'
                        lg='6'
                        xl='6'
                    >
                        <label>
                            {`© ${(new Date()).getFullYear()} • Todos Direitos Reservados`}
                        </label>
                    </Col>
                    <Col className=''>
                        <Casal>
                            <label>
                                Criado por:
                            </label>
                            <img
                                className='ml-2'
                                src={require('../../assets/img/icons/cd.svg')}
                                alt='cd'
                            />
                        </Casal>
                    </Col>
                </Row>
            </DireitosDetalhes>
        </DireitosContainer>
    )
}

export default Direitos;