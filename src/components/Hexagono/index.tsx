import React from 'react';

import {
    Container,
    Forma,
    Objeto
} from './styles';

interface IHexagono {
    text: string
}

const Hexagono: React.FC<IHexagono> = ({ text }) => {
    return (
        <Container className='hexagono-container'>
            <Forma>
                <Objeto
                    src={require('../../assets/img/hexagono.png')}
                    alt='data'
                />
                <label>
                    {text}
                </label>
            </Forma>
        </Container>
    )
}

export default Hexagono;