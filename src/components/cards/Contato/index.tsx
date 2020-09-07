import React, { useState } from 'react';

import {
    Container,
    Header
} from './styles';
import Detalhes from './Detalhes'
import { Collapse, CardBody, Card } from 'reactstrap';
import Contato, { ILista as Item } from "../../../entities/Contato";

interface IContato {
    borders?: 'top' | 'bottom',
    item: Item
}

const ContatoCard: React.FC<IContato> = ({ borders, item }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const compareTo = (a: Contato, b: Contato) => {
        if (a.nome > b.nome) {
            return 1;
        }
        if (a.nome < b.nome) {
            return -1;
        }
        return 0;
    }

    return (
        <Container
            border={borders}
        >
            <Header
                onClick={toggle}
            >
                <label>
                    {item.categoria}
                </label>
                <img
                    alt='arrow'
                    src={isOpen ? require('../../../assets/img/icons/arrow-up.svg') : require('../../../assets/img/icons/arrow-down.svg')}
                />

            </Header>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        {
                            item.contatos.sort(compareTo).map((contato, key) => (
                                <>
                                    <Detalhes
                                        contato={contato}
                                        key={key}
                                    />
                                    {
                                        key !== (item?.contatos?.length - 1) &&
                                        <div
                                            style={{ height: 16 }}
                                        />
                                    }
                                </>
                            ))
                        }

                    </CardBody>
                </Card>
            </Collapse>
        </Container>
    )
}

export default ContatoCard;