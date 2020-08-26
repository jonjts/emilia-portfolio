import React, { useState } from 'react';

import { Container, Footer } from './styles';
import { useTransition, animated } from 'react-spring'

export interface IInfo {
    icon: string,
    text: string,
}

const Info: React.FC<IInfo> = ({ icon, text }) => {
    const [show, set] = useState(false)
    const transitions = useTransition(show, null, {
        from: {  opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    setTimeout(() => set(true), 1000)

    return (
        <>
            {transitions.map(({ item, key, props }) =>
                item && < animated.div style={props} key={key}>
                    <Container>
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
                    </Container>
                </animated.div >
            )}
        </>
    )
}

export default Info;