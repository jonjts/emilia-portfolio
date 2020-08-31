import React, { useEffect, useState } from 'react';

import {
    Container,
    LeftImage,
    RightImage,
    ContentContainer,
    ContentLabelContainer,
    ImageContainer,
} from './styles';

const itens = [{
    path: require('../../../assets/img/ana-1.png'),
    alt: 'Dr. Ana'
}, {
    path: require('../../../assets/img/ana-2.png'),
    alt: 'Dr. Ana'
}]

interface IPresentation {
    indexImage: number
}

const Presentation: React.FC<IPresentation> = ({ indexImage }) => {

    const [animOne, setAnimOne] = useState('')
    const [animTwo, setAnimTwo] = useState('')

    useEffect(() => {
        if (indexImage === 0) {
            setAnimOne('animate__animated animate__fadeIn')
            setAnimTwo('animate__animated animate__fadeOut')
        } else {
            setAnimTwo('animate__animated animate__fadeIn')
            setAnimOne('animate__animated animate__fadeOut')
        }
    }, [indexImage])

    return (
        <Container>
            <LeftImage
                className='animate__animated animate__fadeIn'
            />
            <ContentContainer>
                <ContentLabelContainer
                    className='animate__animated animate__fadeInUp'
                >
                    <h1>
                        Dra Ana Emília Onias
                    </h1>
                    <h4>
                        Ginecologista
                    </h4>
                </ContentLabelContainer>
                <ImageContainer>
                    <div
                    >
                        <img
                            className={animOne}
                            src={itens[0].path}
                            alt={itens[0].alt} />
                        <img
                            className={animTwo}
                            src={itens[1].path}
                            alt={itens[1].alt} />
                    </div>
                </ImageContainer>
            </ContentContainer>
            <RightImage
                className='animate__animated animate__fadeIn'
                src={require('../../../assets/img/folha.svg')}
            />
        </Container>
    )
}

export default Presentation;