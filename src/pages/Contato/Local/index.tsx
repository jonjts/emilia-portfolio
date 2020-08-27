import React from 'react';

import {
    Card,
    MapContainer,
    MapPosition,
    MapDescription,
    ContatoButton,
    BackgroundMap
} from './styles';

const Local: React.FC = () => {
    return (
        <Card>
            <MapContainer>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.178177747249!2d-37.067498135249615!3d-10.949909642203915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a35992cf278ae96!2sHospital%20Primavera%20-%20Reumatologia!5e0!3m2!1spt-BR!2sbr!4v1598486359669!5m2!1spt-BR!2sbr" width='100%' height='400px' allowFullScreen style={{ border: 10 }}></iframe>
            </MapContainer>
            <MapDescription>
                <label className='subtitle'>
                    Hospital Primavera
                </label>
                <MapPosition>
                    <div>
                        <img
                            alt='local'
                            src={require('../../../assets/img/icons/local.png')}
                            width={16}
                            height={16}
                        />
                    </div>
                    <label>
                        Av. Ministro Geraldo Barreto
                        Sobral, 2277 - Jardins, Aracaju - SE, 49026-010
                    </label>
                </MapPosition>
                <ContatoButton
                    color='primary'
                    href="https://api.whatsapp.com/send?phone=557998309833&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20consulta..."
                    target="_blank"
                >
                    Entrar em Contato via WhatsApp
                </ContatoButton>
            </MapDescription>
            <BackgroundMap
                src={require('../../../assets/img/background-map.png')}
            />
        </Card>
    )
}

export default Local;