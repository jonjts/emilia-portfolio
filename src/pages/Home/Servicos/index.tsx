import React from 'react';

import {
    Container,
    TitleContainer,
    Content,
    Option,
    ContatoContainer
} from './styles'
import {
    Row,
    Col
} from 'reactstrap'
import SubmitButton from '../../../components/buttons/Submit'

const Servicos: React.FC = () => {

    return (
        <Container>
            <TitleContainer>
                <label className='subtitle'>
                    Meus Serviços
                </label>
                <label className='title'>
                    Como posso te ajudar
                </label>
            </TitleContainer>
            <Content>
                <Row className='justify-content-center'>
                    <Col
                        sm='6'
                        lg='auto'
                        xl='auto'
                        className='justify-content-center d-flex'
                    >
                        <Option>
                            <img
                                alt='consulta'
                                src={require('../../../assets/img/icons/consulta.png')}
                            />
                            <label>
                                Consultas
                            </label>
                        </Option>
                    </Col>
                    <Col
                        sm='6'
                        lg='auto'
                        xl='auto'
                        className='justify-content-center d-flex'
                    >
                        <Option>
                            <img
                                alt='citologia'
                                src={require('../../../assets/img/icons/citologia.png')}
                            />
                            <label>
                                Citologia e
                                Colposcopia
                            </label>
                        </Option>
                    </Col>
                    <Col
                        sm='6'
                        lg='auto'
                        xl='auto'
                        className='justify-content-center d-flex'
                    >
                        <Option>
                            <img
                                alt='utero'
                                src={require('../../../assets/img/icons/utero.png')}
                            />
                            <label>
                                Cauterização
                                de colo uterino
                                e vulva
                            </label>
                        </Option>
                    </Col>
                    <Col
                        sm='6'
                        lg='auto'
                        xl='auto'
                        className='justify-content-center d-flex'
                    >
                        <Option>
                            <img
                                alt='biopsia'
                                src={require('../../../assets/img/icons/biopsia.png')}
                            />
                            <label>
                                Biópsia de
                                colo uterino
                            </label>
                        </Option>
                    </Col>
                    <Col
                        sm='6'
                        lg='auto'
                        xl='auto'
                        className='justify-content-center d-flex'
                    >
                        <Option>
                            <img
                                alt='diu'
                                src={require('../../../assets/img/icons/diu.png')}
                            />
                            <label>
                                Inserção de
                                DIUs
                            </label>
                        </Option>
                    </Col>
                    <Col
                        sm='6'
                        lg='auto'
                        xl='auto'
                        className='justify-content-center d-flex'
                    >
                        <Option>
                            <img
                                alt='outros'
                                src={require('../../../assets/img/icons/others.png')}
                            />
                            <label>
                                Outros
                                Serviços
                            </label>
                        </Option>
                    </Col>
                </Row>
            </Content>
            <ContatoContainer>
                <SubmitButton
                    target='_blank'
                    href='https://api.whatsapp.com/send?phone=557998309833&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20consulta...'
                >
                    AGENDAR UMA CONSULTA
            </SubmitButton>
            </ContatoContainer>
        </Container>
    )
}

export default Servicos;