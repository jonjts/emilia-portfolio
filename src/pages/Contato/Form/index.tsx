import React, { useState } from 'react';
import axios from "axios";

import {
    Container,
    InputsContainer,
    SubmitButton
} from './styles';

import {
    Input,
    Label,
    FormGroup,
    FormFeedback,
    Form,
    Spinner,
} from "reactstrap"

interface IError {
    nome?: string,
    email?: string,
    assunto?: string,
    mensagem?: string,
}

const ContatoForm: React.FC = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [sending, setSending] = useState(false)

    const [error, setError] = useState<IError>({} as IError)

    async function handleSendEmail(e: React.MouseEvent): Promise<void> {
        e.preventDefault()
        if (validForm()) {
            setSending(true)
            await sendEmail()
        }
    }

    async function sendEmail() {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/send-email`,
                {
                    subject: `${nome} <${email}>`,
                    assunto: assunto,
                    body: `
                    Nome: ${nome}\nEmail: ${email}

${mensagem}
                    `
                })

            setNome('')
            setMensagem('')
            setAssunto('')
            setEmail('')
        } catch (error) {
            console.error(error)
            alert('Não conseguimos enviar seu contato, tente novamente mais tarde')
        }
        setSending(false)

    }


    function validForm(): boolean {
        const newError = {} as IError
        if (nome.length === 0) {
            newError.nome = "Informe o seu nome"
        }
        if (email.length === 0 || !validateEmail(email)) {
            newError.email = 'Informe seu email'
        }
        if (mensagem.length === 0) {
            newError.mensagem = 'Informe a sua mensagem'
        }
        if (assunto.length === 0) {
            newError.assunto = 'Informe o assunto da sua mensagem'
        }
        setError(newError)

        return Object.keys(newError).length === 0
    }

    function validateEmail(email: string) {
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <Container>
            <h3>
                Entre em Contato
            </h3>
            <InputsContainer>
                <Form onSubmit={e => e.preventDefault()}>
                    <FormGroup>
                        <Label>
                            Nome
                    </Label>
                        <Input
                            required
                            placeholder='Seu nome...'
                            invalid={!!error.nome}
                            value={nome}
                            onChange={({ target }) => setNome(target.value)}
                        />
                        <FormFeedback >
                            {error.nome}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            E-mail
                    </Label>
                        <Input
                            type='email'
                            required
                            placeholder='Seu email...'
                            invalid={!!error.email}
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <FormFeedback >
                            {error.email}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Assunto
                    </Label>
                        <Input
                            required
                            placeholder='Assunto da mensagem...'
                            invalid={!!error.assunto}
                            value={assunto}
                            onChange={({ target }) => setAssunto(target.value)}
                        />
                        <FormFeedback >
                            {error.assunto}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Mensagem
                    </Label>
                        <Input
                            required
                            type='textarea'
                            placeholder='Sua mensagem...'
                            invalid={!!error.mensagem}
                            value={mensagem}
                            onChange={({ target }) => setMensagem(target.value)}
                        />
                        <FormFeedback >
                            {error.mensagem}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <SubmitButton
                            color='primary'
                            onClick={handleSendEmail}
                            disabled={sending}
                        >
                            {
                                sending &&
                                <Spinner
                                    color='link'
                                    className='mr-2'
                                    size='sm'
                                />
                            }
                            Enviar e-mail
                    </SubmitButton>
                    </FormGroup>
                </Form>
            </InputsContainer>
        </Container>
    )
}

export default ContatoForm;