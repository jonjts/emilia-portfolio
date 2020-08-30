import React from 'react';

import Map from '../../../components/Map'
import {
    Card,
    MapPosition,
    MapDescription,
    ContatoButton,
    BackgroundMap
} from './styles';

const Local: React.FC = () => {
    return (
        <Card>
            <Map
                width='100%'
                height='400px'
            />
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