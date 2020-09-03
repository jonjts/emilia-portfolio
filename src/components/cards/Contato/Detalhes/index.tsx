import React from 'react';
import Contato from "../../../../entities/Contato";

import {
    Container,
    Descricoes,
    Contato as ContatoContainer
} from './styles';

const Detalhes: React.FC<{ contato: Contato }> = ({ contato }) => {
    return (
        <Container>
            <h5>
                {
                    contato.nome
                }
            </h5>
            <Descricoes>
                {
                    contato.detalhes.map((item, key) => (
                        <ContatoContainer
                            key={key}>
                            <span className='circle' />
                            <label>
                                {
                                    item
                                }
                            </label>
                        </ContatoContainer>
                    ))
                }
            </Descricoes>
        </Container>
    )
}

export default Detalhes;