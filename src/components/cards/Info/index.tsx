import React from 'react';

import { Container, Footer } from './styles';

export interface IInfo {
    icon: string,
    text: string,
}

const Info: React.FC<IInfo> = ({ icon, text }) => {

    return (
        <Container >
            <img
                alt='icon'
                src={icon}
                width={40}
                height={40}
            />
            <label>
                {text}
            </label>
            <Footer />
        </Container >
    )
}

export default Info;