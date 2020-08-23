import React from 'react';

import { Container } from './styles';

interface ISubmit {
    onClick?(e: React.MouseEvent): void,
    target?: string,
    href?: string
}

const Submit: React.FC<ISubmit> = ({
    children,
    onClick,
    target,
    href
}) => {
    return (
        <Container
            target={target}
            href={href}
            color='primary'
            onClick={onClick}
        >
            {
                children
            }
        </Container>
    )
}

export default Submit;