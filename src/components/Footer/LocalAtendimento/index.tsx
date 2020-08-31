import React from 'react';

import TrackVisibility from 'react-on-screen';
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

const RosaRightAnimi: React.FC<{ isVisible?: boolean }> = ({ isVisible }) => (
    isVisible ?
        <RosaRight
            className='animate__animated animate__fadeIn'
            alt='bordar'
            src={require('../../../assets/img/graveto.svg')}
        />
        : null
)

const RosaLeftAnimi: React.FC<{ isVisible?: boolean }> = ({ isVisible }) => (
    isVisible ?
        <RosaLeft
            className='animate__animated animate__fadeIn'
            alt='bordar'
            src={require('../../../assets/img/graveto.svg')}
        />
        :
        null
)

const LocalAtendimento: React.FC = () => {
    return (
        <Container>
            <BorderLeft
                alt='bordar'
                src={require('../../../assets/img/border.png')}
            />
            <TrackVisibility
                once
            >
                <RosaLeftAnimi />
            </TrackVisibility>
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
                        src={require('../../../assets/img/icons/whatsapp.svg')}
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
                        src={require('../../../assets/img/icons/local.svg')}
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
            <TrackVisibility
                once
            >
                <RosaRightAnimi />
            </TrackVisibility>
            <BorderRight
                alt='bordar'
                src={require('../../../assets/img/border.png')}
            />
        </Container>
    )
}

export default LocalAtendimento;