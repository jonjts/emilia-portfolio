import React, { useState, useEffect } from 'react';

import NavBar from '../../components/Navbar'
import Direitos from "../../components/Footer/Direitos";
import Form from './Form'
import { Container } from './styles';
import { Row, Col } from 'reactstrap'


const Contato: React.FC = () => {

    const [indexImage, setIndexImage] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setIndexImage(indexImage === 0 ? 1 : 0)
        }, 10000)
    }, [indexImage])


    return (
        <Container>
            <NavBar />
            <Row
                style={{ marginTop: 135 }}>
                <Col
                    sm='12'
                    md='12'
                    lg='6'
                    xl='6'
                    className='d-flex justify-content-center'
                >
                    <Form />
                </Col>
                <Col>
                </Col>
            </Row>
            <Direitos />
        </Container>
    )
}

export default Contato;