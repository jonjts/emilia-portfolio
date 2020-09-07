import React, { CSSProperties } from 'react';

import {
    Container,
    ContentContainer,
    WaveContainer,
    Wave,
    WaveContainerFooter
} from './styles';

const WaveSession: React.FC<{
    wavePath?: string | 'none',
    backgroundColor?: string,
    zIndex?: number,
    styleContainer?: CSSProperties,
    footerWavePath?: string
}> = ({
    children,
    wavePath = require('../../../assets/img/cover-wave.svg'),
    footerWavePath,
    backgroundColor = '#fff',
    zIndex,
    styleContainer
}) => {
        return (
            <Container style={styleContainer} >
                {
                    wavePath && wavePath !== 'none' &&
                    <WaveContainer
                        style={{ zIndex }}
                    >
                        <Wave
                            alt='wave'
                            src={wavePath}
                        />
                    </WaveContainer>
                }
                <ContentContainer
                    backgroundColor={backgroundColor}
                >
                    {
                        children
                    }
                </ContentContainer>
                {
                    footerWavePath &&
                    <WaveContainerFooter>
                        <Wave
                            alt='wave'
                            src={footerWavePath}
                        />
                    </WaveContainerFooter>
                }
            </Container>
        )
    }

export default WaveSession;