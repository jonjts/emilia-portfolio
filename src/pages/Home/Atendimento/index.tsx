import React from 'react';

import TrackVisibility from 'react-on-screen';
import {
    Container,
    RosesTop,
    RosesBottom,
    InfoContainer,
    HeaderContainer
} from './styles';
import Header from '../../../components/Header'
import InfoCard from '../../../components/cards/Info'

const itens = [{
    icon: require('../../../assets/img/icons/time.svg'),
    text: 'Os atendimentos são realizados sem pressa, podendo a duração estender-se ou encurtar-se de acordo com a necessidade.'
}, {
    icon: require('../../../assets/img/icons/chat.svg'),
    text: 'Na consulta é colhida toda a história da mulher: suas queixas, passado de intercorrências e tratamentos, histórico familiar e hábitos.'
}, {
    icon: require('../../../assets/img/icons/citologia.svg'),
    text: 'É realizado o exame físico e a coleta de exame citológico e colposcópico dentre outros, caso seja identificada necessidade.'
}, {
    icon: require('../../../assets/img/icons/doc.svg'),
    text: 'São então solicitados exames complementares e/ou analisados aqueles já realizados.'
}, {
    icon: require('../../../assets/img/icons/heart.svg'),
    text: 'Nesse momento são também discutidos tratamentos, adequações de hábitos e demais questões específicas de cada paciente, considerando sua realidade, individualidade e objetivos.'
}]

const Information: React.FC<{ isVisible?: boolean }> = ({ isVisible }) => (
    isVisible ?
        <>
            {
                itens.map((item, key) => (
                    <InfoContainer className={isVisible ? 'animate__animated animate__fadeInUp' : ''} key={key}>
                        <InfoCard
                            key={key}
                            icon={item.icon}
                            text={item.text}
                        />
                    </InfoContainer>
                ))
            }
        </>
        :
        null
)

const Atendimento: React.FC = () => {
    return (
        <Container>
            <RosesTop
                alt='roses'
                src={require('../../../assets/img/roses-top-left.png')}
            />
            <RosesBottom
                alt='roses'
                src={require('../../../assets/img/roses-bottom-right.png')}
            />
            <HeaderContainer>
                <Header
                    title='Meus Atendimentos'
                    subtitle='Como funcionam os atendimentos'
                />
            </HeaderContainer>
            <TrackVisibility once>
                <Information />
                
            </TrackVisibility>

        </Container>
    )
}

export default Atendimento;