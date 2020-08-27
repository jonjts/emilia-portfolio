import React from 'react';
import animationData from '../../../../assets/anim/sent.json'

import Lottie from 'lottie-react-web'
import {
    Container,
    MensagemContainer
} from './styles';
import { SubmitButton } from '../styles'

interface ISent {
    onSendAgain(e: React.MouseEvent): void
}

const Sent: React.FC<ISent> = ({ onSendAgain }) => {


    return (
        <>
            <Container>
                <Lottie options={{
                    loop: false,
                    autoplay: true,
                    animationData,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                    height={240}
                    width={240}
                />
                <MensagemContainer>
                    <h4>
                        E-mail Enviado
                    </h4>
                    <SubmitButton
                        color='primary'
                        onClick={onSendAgain}
                    >
                        Enviar outro e-mail
                    </SubmitButton>
                </MensagemContainer>
            </Container>

        </>
    )
}

export default Sent;