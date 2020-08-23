import React from 'react';

import {
    Container,
    InfoContainer,
    InfoDetails,
    ActionContainer,
    BorderLeft,
    BorderRight,
    RosaLeft,
    RosaRight
} from './styles';
import Header from '../../Header'
import Submit from '../../buttons/Submit';

const LocalAtendimento: React.FC = () => {
    return (
        <Container>
            <BorderLeft
                alt='bordar'
                src={require('../../../assets/img/border.png')}
            />
            <RosaLeft
                alt='bordar'
                src={require('../../../assets/img/folha.svg')}
            />
            <Header
                title='Agende uma Consulta'
                subtitle='Local de Atendimento'
            />
            <InfoContainer>
                <h4>
                    Hospital Primavera
                </h4>
                <InfoDetails>
                    <img
                        alt='whatsapp'
                        src={require('../../../assets/img/icons/whatsapp.png')}
                        width={32}
                        height={32}
                    />
                    <label>
                        (79) 9 9830-9833
                    </label>
                </InfoDetails>
                <InfoDetails>
                    <img
                        alt='whatsapp'
                        src={require('../../../assets/img/icons/local.png')}
                        width={32}
                        height={32}
                    />
                    <label>
                        Av. Ministro Geraldo Barreto
                        Sobral, 2277 - Jardins, Aracaju - SE, 49026-010
                    </label>
                </InfoDetails>
            </InfoContainer>
            <ActionContainer>
                <Submit
                    target='_blank'
                    href='https://api.whatsapp.com/send?phone=557998309833&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20consulta...'
                >
                    AGENDAR UMA CONSULTA
                </Submit>
            </ActionContainer>
            <RosaRight
                alt='bordar'
                src={require('../../../assets/img/folha.svg')}
            />
            <BorderRight
                alt='bordar'
                src={require('../../../assets/img/border.png')}
            />
        </Container>
    )
}

export default LocalAtendimento;