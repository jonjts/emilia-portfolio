import React from 'react';

import {
    Container,
    Content,
    Footer,
    Hr,
    Assinatura
} from './styles';

const Citacao: React.FC = () => {
    return (
        <Container>
            <div style={{ textAlign: 'center' }}>
                <img
                    alt='aspas'
                    src={require('../../../../assets/img/aspas.png')}
                />
            </div>
            <Content>
                A consulta com o ginecologista é um momento de grande importância no cuidado feminino. Mulheres que valorizam seu bem estar devem, regularmente, discutir com seu médico acerca de sua saúde.
            </Content>
            <Footer>
                <Hr />
                <Assinatura>
                    Dra Ana Emília Onias
                </Assinatura>
            </Footer>
        </Container>
    )
}

export default Citacao;