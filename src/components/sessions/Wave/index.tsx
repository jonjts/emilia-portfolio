import React from 'react';

import {
    Container,
    ContentContainer,
    WaveContainer,
    Wave,
} from './styles';

const WaveSession: React.FC<{ wavePath?: string, backgroundColor?: string }> = ({
    children,
    wavePath = require('../../../assets/img/cover-wave.svg'),
    backgroundColor = '#fff'
}) => {
    return (
        <Container>
            <WaveContainer>
                <Wave
                    alt='wave'
                    src={wavePath}
                />
            </WaveContainer>
            <ContentContainer
                backgroundColor={backgroundColor}
            >
                {
                    children
                }
            </ContentContainer>
        </Container>
    )
}

export default WaveSession;